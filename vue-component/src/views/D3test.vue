<template>
  <svg class="fy-component-main"></svg>
</template>

<script>
import * as d3 from "d3";
export default {
  data() {
    return {
      data: [
        { name: "flare", title: "flare", group: "121", value: 8 },
        { name: "flare1", title: "flare1", group: "121", value: 10 },
        { name: "flare2", title: "flare2", group: "121", value: 90 },
        { name: "flare3", title: "flare3", group: "121", value: 50 }
      ]
    };
  },
  methods: {
    initChart() {
      d3.select("svg")
        .selectAll("g")
        .remove(); //清空作图区域
      var svg = d3.select("svg"),
        width = +svg.attr("width"),
        height = +svg.attr("height");
      var format = d3.format(",d");

      //       var color = d3.scaleOrdinal(d3.schemeCategory20c);
      var color = [
        "#CCFF00",
        "#FF0033",
        "#336699",
        "#33FF66",
        "#669966",
        "#66CCFF",
        "#99CCFF",
        "#CCCCCC"
      ]; //自定义颜色
      var pack = d3
        .pack()
        .size([width, height])
        .padding(1.5);
      var num, pid;
      var root = d3
        .hierarchy({ children: this.data })
        .sum(function(d) {
          return d.value;
        })
        .each(function(d) {
          if (d.parent == null) {
            num = d.value;
          }
          if ((id = d.data.name)) {
            var id;
            d.id = id;
            d.class = id;
            pid = num / d.value;
            d.colorPick =
              pid > 100 ? 5 : pid > 50 ? 4 : pid > 10 ? 3 : pid > 2 ? 2 : 1;
            console.log(d.colorPick);
          }
        });
      var node = svg
        .selectAll(".node")
        .data(pack(root).leaves())
        .enter()
        .append("g")
        .attr("class", "node")
        .attr("transform", function(d) {
          return "translate(" + d.x + "," + d.y + ")";
        });

      node
        .append("circle")
        .attr("id", function(d) {
          return d.id;
        })
        .attr("r", function(d) {
          return d.r;
        })
        .style("fill", function(d) {
          return color[d.colorPick];
        });

      node
        .append("clipPath")
        .attr("id", function(d) {
          return "clip-" + d.id;
        })
        .append("use")
        .attr("xlink:href", function(d) {
          return "#" + d.id;
        });

      node
        .append("text")
        .attr("clip-path", function(d) {
          return "url(#clip-" + d.id + ")";
        })
        .selectAll("tspan")
        .data(function(d) {
          var arr = new Array();
          arr.push(d.class);
          arr.push(d.data.value);
          return arr; //圆内显示内容
        })
        .enter()
        .append("tspan")
        .attr("x", 0)
        .attr("y", function(d, i, nodes) {
          return 25 + (i - nodes.length / 2 - 0.5) * 20;
        })
        .text(function(d) {
          return d;
        });

      node.append("title").text(function(d) {
        return d.id + "\n" + format(d.value);
      });
      node.on("click", function(d) {
        clickBubble(d.id); //自定义点击事件
      });
    }
  },
  mounted() {
    // this.$nextTick(res => {
      this.initChart()
    // })
  },
};
</script>

<style lang="scss">
.fy-component-main{
  height: 500px;
  width: 500px;
}
</style>
