import { Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { GetDataService } from './get-data.service';
import {jqxGridComponent} from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';
import sampleJson from 'src/app/assets/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GetDataService, HttpClient]
})
export class AppComponent implements OnInit {
  @ViewChild('myGrid') myGrid: jqxGridComponent;
  dataJson: any = sampleJson;
  loadChartComponent = false;
  maleCount = 0;
  femaleCount = 0;
  filterBy;
  pageNumber = 1;
  pageSize = 10;

  source: any =
    {
      localdata: [],
      dataFields:
        [
          { name: 'PassengerId', type: 'number' },
          { name: 'Pclass', type: 'number' },
          { name: 'Name', type: 'string' },
          { name: 'Sex', type: 'string' },
          { name: 'Age', type: 'string' },
          { name: 'SibSp', type: 'number' },
          { name: 'Parch', type: 'number' },
          { name: 'Ticket', type: 'string' },
          { name: 'Fare', type: 'number' },
          { name: 'Cabin', type: 'string' },
          { name: 'Embarked', type: 'string' },
        ],
      datatype: 'array',
      pageCount: 0
    };
  dataAdapter: any = new jqx.dataAdapter(this.source, length, 1000);
  columns: any[] = [];

  addfilter = (): void => {
    const filterGroup = new jqx.filter();
    const filterOrOperator = 1;
    const filterValue = this.filterBy;
    const filterCondition = 'equal';
    const filter = filterGroup.createfilter('stringfilter', filterValue, filterCondition);
    filterGroup.addfilter(filterOrOperator, filter);
    this.myGrid.addfilter('Sex', filterGroup, true);
    this.myGrid.applyfilters();
  }

  onPageChanged(event: any): void {
    let args = event.args;
    let pageNumber = args.pagenum + 1;
    let pageSize = args.pagesize;
    this.getDataFromDatabase(pageNumber, pageSize);
  }

  constructor(private getDataService: GetDataService) {}

  getDataFromDatabase(pageNum, pageSize) {
    console.log(pageNum + ' ' + pageSize);
    this.getDataService.getData(pageNum, pageSize)
      .subscribe((data: any) => {
        this.source.localdata = data.message;
      });
  }

  ngOnInit(): void {
    this.getDataFromDatabase(this.pageNumber, this.pageSize);

    this.getDataService.getColumnName()
      .subscribe((data: any) => {
        if (!this.columns.length) {
          for (let i = 0; i < data.columnName.length - 2; i++) {
            if (data.columnName[i] === 'Name') {
              this.columns.push({
                type: data.columnName[i],
                datafield:  data.columnName[i],
                width: 300
              });
            } else {
              this.columns.push({
                type: data.columnName[i],
                datafield:  data.columnName[i],
              });
            }
          }
        }
      });

    this.getDataService.getMaleCount()
      .subscribe((data: any) => {
        this.maleCount = data.dataLength;
      });

    this.getDataService.getFemaleCount()
      .subscribe((data: any) => {
        this.femaleCount = data.dataLength;
      });
  }

  onLoadData() {
    this.getDataService.putData(this.dataJson)
      .subscribe((data: any) => {
        console.log(data);
      });
  }

  onChartClick() {
    this.loadChartComponent = !this.loadChartComponent;
  }

  getSexFromChild(event) {
    this.filterBy = event;
    this.addfilter();
  }

}
