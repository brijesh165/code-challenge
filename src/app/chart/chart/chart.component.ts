import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  @Input() maleCount: number;
  @Input() femaleCount: number;
  @Output() selectedVale: EventEmitter<string> = new EventEmitter<string>();

  totalCount: number;

  highcharts = Highcharts;
  chartOptions = {
    chart : {
      plotBorderWidth: null,
      plotShadow: false
    },
    title : {
      text: 'Browser market shares at a specific website, 2014'
    },
    tooltip : {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions : {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}%</b>: {point.percentage:.1f} %',
          style: {
            color:
              'black'
          }
        }
      }
    },
    series : [{
      type: 'pie',
      name: 'Browser share',
      data: [
        ['Male',   this.maleCount],
        ['Female', this.femaleCount],
      ]
    }]
  };

  constructor() { }

  ngOnInit() {
    this.totalCount = this.maleCount + this.femaleCount;
    this.chartOptions.series[0].data[0][1] = (this.maleCount / this.totalCount) * 100;
    this.chartOptions.series[0].data[1][1] = (this.femaleCount / this.totalCount) * 100;
  }

  sendSexToParent(event) {
    this.selectedVale.emit(event.point.name);
  }
}
