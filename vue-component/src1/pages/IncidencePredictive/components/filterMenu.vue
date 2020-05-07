<template>
  <div class="l-filter-menu flex-row">
    <div class="l-filter-menu-fliter">
      <div class="l-filter-menu-item">
        <filter-Organization></filter-Organization>
      </div>
      <div class="l-filter-menu-item">
        <filter-Coverage-jq @change="emitFilterCoverageChange" single></filter-Coverage-jq>
      </div>
    </div>
    <div class="l-filter-menu-row flex-row l-filter-menu-row-police-type">
      <div class="l-filter-menu-item">
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
  </div>
</template>

<script>
import { filterCoverageJq, filterOrganization } from "@/components";
export default {
  name: "lFliterMenu",
  data() {
    return {
      aymcList: [],
      aymcListSelect: "",
      mapDataDetection: false,
      isClickMerge: true,
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
      chooseNav: 0
    };
  },
  components: {
    filterCoverageJq,
    filterOrganization
  },
  methods: {
    emitFilterCoverageChange(val, done) {
      this.chooseNav = val[0];
      if (val.length === 0) {
        let params = {
          startTime: new Date().getHours() + 1,
          endTime: new Date().getHours() + 2
        };
        this.$store.dispatch("prolygonTimeSelect", params);
      }
      if (!this.mapDataDetection) {
        this.$store
          .dispatch(
            "prolygonLayerData",
            Object.assign({}, this.$store.state.incidencePredictive.selectTime)
          )
          .then(res => {
            this.$store.dispatch("prolygonLayerDataChange", res);
            this.$store.dispatch("prolygonLayer", val[0]);
            this.mapDataDetection = true;
            done(true, val);
          });
      } else {
        this.$store.dispatch("prolygonLayer", val[0]);
        done(true, val);
      }
    },
    selectTimeQuantum(e) {
      if (e && e.length !== 0) {
        let params = {
          startInt: new Date(e[0]).getTime(),
          endInt: new Date(e[1]).getTime()
        };
        this.$store.dispatch("prolygonTimeSelect", params);
        this.initMapData();
      } else {
        let params = {
          startInt: "",
          endInt: ""
        };
        this.$store.dispatch("prolygonTimeSelect", params);
        this.initMapData();
      }
    },
    bodyClickStopDatepicker(e) {
      const className = e.target.className;
      if (className.indexOf("ol-unselectable") !== -1) {
        this.$refs["timeSelect"].handleClose();
      }
    },
    initMapData() {
      this.$store
        .dispatch(
          "prolygonLayerData",
          Object.assign({}, this.$store.state.incidencePredictive.selectTime)
        )
        .then(res => {
          this.$store.dispatch("prolygonLayerDataChange", res);
          this.mapDataDetection = true;
        });
    }
  },
  computed: {
    closeSelectTime() {
      return this.$store.state.incidencePredictive.selectTime;
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
    this.$nextTick(() => {
      this.initMapData();
    });
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
  z-index: 99999;
  position: fixed;
  top: 16px;
  right: 72px;
  &-item + &-item {
    margin-left: 16px;
  }
  display: flex;
  flex-flow: column nowrap;
  .l-filter-menu-fliter {
    display: flex;
    flex-flow: row nowrap;
  }
  .l-filter-menu-row {
    position: fixed;
    top: 70px;
    right: 72px;
  }
}
</style>
