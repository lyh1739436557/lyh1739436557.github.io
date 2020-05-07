<template>
  <div class="l-filter-menu">
    <div class="l-filter-menu-row flex-row">
      <div class="l-filter-menu-item">
        <filter-Organization></filter-Organization>
      </div>
      <div class="l-filter-menu-item">
        <filter-Coverage @change="emitFilterCoverageChange" single></filter-Coverage>
      </div>
    </div>
    <div class="l-filter-menu-row flex-row l-filter-menu-row-police-type"  v-show="isClickMerge">
      <div class="l-filter-menu-item">
        <el-select v-model="aymcListSelect" clearable placeholder="警情类别筛选" class="aymc-list" @change="handleSelecetAymcChange">
          <el-option
            v-for="(item, index) in aymcList"
            :key="index"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="l-filter-menu-item" v-show="isClickMerge">
        <el-date-picker
          v-model="selectTime"
          type="datetimerange"
          align="right"
          unlink-panels
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          @change="selectTimeQuantum"
          :picker-options="pickerOptions"
          ref="timeSelect"
          class="stop-datepicker-class"
        ></el-date-picker>
      </div>
    </div>
    <div class="side-nav" v-show="chooseNav=='3'">
      <aggregation-layer :nav="aggregationNavData" v-on:clickLayer="clickLayer" single></aggregation-layer>
    </div>
  </div>
</template>

<script>
import {
  filterCoverage,
  filterOrganization,
  aggregationLayer
} from "@/components";
import { hpPoliceName } from "@/assets/js/fieldMap";
import fc from "../../../assets/svg/ic_fc.svg";
import activefc from "../../../assets/svg/ic_fc_actived.svg";
import wg from "../../../assets/svg/ic_wg.svg";
import activewg from "../../../assets/svg/ic_wg_actived.svg";
import yx from "../../../assets/svg/ic_yx.svg";
import activeyx from "../../../assets/svg/ic_yx_actived.svg";
export default {
  name: "lFliterMenu",
  data() {
    return {
      aymcList: [],
      aymcListSelect: '',
      mapDataDetection: false,
      isClickMerge: true,
      aggregationNavData: [
        {
          id: 0,
          name: "圆形",
          iconPath: yx,
          isChoose: true,
          chooseIconPath: activeyx
        },
        {
          id: 1,
          name: "网格",
          iconPath: wg,
          isChoose: false,
          chooseIconPath: activewg
        },
        {
          id: 2,
          name: "蜂巢",
          iconPath: fc,
          isChoose: false,
          chooseIconPath: activefc
        }
      ],
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      selectTime: [],
      chooseNav: 0,
      selectArea: "",
      selectType: ''
    };
  },
  components: {
    filterCoverage,
    filterOrganization,
    aggregationLayer
  },
  methods: {
    //点击了那个区域
    changeSelect(e) {
      this.selectArea = e[0] == 0 ? "" : hpPoliceName[e[0]];
      this.$store.dispatch("selectArea", { officeName: this.selectArea });
      this.initMapData();
    },
    ajaxHp110SadianGetJqClass () {
      this.$store.dispatch('ajaxHp110SadianGetJqClass').then(res => {
        // console.log(res)
        if (res && res.data instanceof Array) {
          this.aymcList = [
            { label: '全部', value: '' },
            ...res.data.map(curr => {
              return {
                label: curr,
                value: curr
              }
            })
          ]
        }
      })
    },
    clickLayer(e, n) {
      if (e !== undefined && this.aggregationNavData[e]) {
        if (n) {
          this.aggregationNavData = this.aggregationNavData.map((curr, i) => {
            return {
              ...curr,
              isChoose: curr.isChoose ? false : Boolean(i === e)
            };
          });
        } else {
          this.aggregationNavData[e].isChoose = this.aggregationNavData[e]
            .isChoose
            ? false
            : true;
        }
        const selected = this.aggregationNavData
          .filter(curr => curr.isChoose)
          .map(curr => curr.id);
        this.$store.dispatch("chooseAggregationLayer", selected[0]);
      }
    },
    selectTimeQuantum(e) {
      if (e && e.length !== 0) {
        let params = {
          startTime: new Date(e[0]).getTime(),
          endTime: new Date(e[1]).getTime()
        };
        this.$store.dispatch("timeSelect", params);
        this.initMapData();
      } else {
        let params = {
          startTime: "",
          endTime: ""
        };
        this.$store.dispatch("timeSelect", params);
        this.initMapData();
      }
    },
    emitFilterCoverageChange(val, done) {
      this.chooseNav = val[0];
      if (val.length === 0) {
        let params = {
          startTime: "",
          endTime: ""
        };
        this.$store.dispatch("timeSelect", params);
      }
      if (!this.mapDataDetection) {
        val.length === 0
          ? (this.isClickMerge = false)
          : (this.isClickMerge = true);
        this.$store
          .dispatch(
            "initMapData",
            Object.assign({}, this.$store.state.alertSituationAnalysis.selectTime,
            this.$store.state.alertSituationAnalysis.selectArea,
            this.$store.state.alertSituationAnalysis.selectType)
          )
          .then(res => {
            this.$store.dispatch("layerDataChange", res);
            this.$store.dispatch("chooseLayerIndex", val[0]);
            done(res, val);
          });
      } else {
        val.length === 0
          ? (this.isClickMerge = false)
          : (this.isClickMerge = true);
        this.$store.dispatch("chooseLayerIndex", val[0]);
        done(true, val);
      }
    },
    initMapData() {
      this.$store
        .dispatch(
          "initMapData",
            Object.assign({}, this.$store.state.alertSituationAnalysis.selectTime,
            this.$store.state.alertSituationAnalysis.selectArea,
            this.$store.state.alertSituationAnalysis.selectType)
          )
        .then(res => {
          this.$store.dispatch("layerDataChange", res);
          this.mapDataDetection = true;
        });
    },
    bodyClickStopDatepicker(e) {
      const className = e.target.className;
      if (className.indexOf("ol-unselectable") !== -1) {
        this.$refs["timeSelect"].handleClose();
      }
    },
    handleSelecetAymcChange (val) {
      this.$store.state.alertSituationAnalysis.selectType = {
        aymc: val
      };
      this.initMapData();
    }
  },
  computed: {
    closeSelectTime() {
      return this.$store.state.alertSituationAnalysis.closeSelectTime;
    }
  },
  watch: {
    closeSelectTime: {
      handler() {
        this.closeSelectTime === true && this.$refs["timeSelect"].handleClose();
      }
    }
  },
  mounted() {
    this.initMapData()
    this.ajaxHp110SadianGetJqClass()
  },
  created() {
    document.body.addEventListener("click", this.bodyClickStopDatepicker);
  },
  destroyed() {
    document.body.removeEventListener("click", this.bodyClickStopDatepicker);
  }
};
</script>

<style lang="scss">
.l-filter-menu {
  position: fixed;
  top: 16px;
  right: 72px;
  z-index: 100;
  &-row + &-row {
    margin-top: 8px;
  }
  &-item + &-item {
    margin-left: 16px;
  }
  .time-select {
    width: 335px;
  }
  .aymc-list {
    width: 145px;
  }
}
.side-nav {
  position: fixed;
  top: 80px;
  right: 14px;
}
</style>
