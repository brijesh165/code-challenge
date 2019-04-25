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

  // For Highcharts
  highcharts = Highcharts;
  chartOptions = {
    chart : {
      plotBorderWidth: null,
      plotShadow: false
    },
    title : {
      text: 'Titanic Data'
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
    this.chartOptions.series[0].data[0][1] = this.maleCount;
    this.chartOptions.series[0].data[1][1] = this.femaleCount;
  }

  // @Output event
  sendSexToParent(event) {
    if (event.point) {
      this.selectedVale.emit(event.point.name);
    }
  }
}
