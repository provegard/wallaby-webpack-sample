import * as am4core from "@amcharts/amcharts4/core"
import * as am4charts from "@amcharts/amcharts4/charts"

export default class Person {
  constructor(name) {
    this.name = name;
  }

  addChart() {
    const div = document.createElement('div');
    this.chart = am4core.create(div, am4charts.PieChart);
  }
};