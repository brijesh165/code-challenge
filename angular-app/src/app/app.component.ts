import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { GetDataService } from './get-data.service';
import {jqxGridComponent} from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';
import sampleJson from 'src/app/assets/data.json';
import {type} from 'os';

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
  maleCount;
  femaleCount;
  filterBy;
  pageNumber = 1;
  pageSize = 10;
  loadData = false;

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
    };
  columns: any[] = [];
  dataAdapter: any = new jqx.dataAdapter(this.source);

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
    console.log(pageNumber + ' ' + pageSize);
    this.getDataFromDatabase(pageNumber, pageSize);
    this.source.localdata.length += 10;
  }

  constructor(private getDataService: GetDataService) {}

  getDataFromDatabase(pageNum, pageSize) {
    this.getDataService.getData(pageNum, pageSize)
      .subscribe((data: any) => {
        for (let i = 0; i < data.message.length; i++) {
          console.log(data.message[i]);
          this.source.localdata.push(data.message[i]);
        }
        this.maleCount = data.malePercentage;
        this.femaleCount = data.femalePercentage;
      });
  }

  ngOnInit(): void {
    if (this.loadData) {
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
      }
  }

  onLoadData() {
    this.getDataService.putData(this.dataJson)
      .subscribe((data: any) => {
        if (data.status) {
          this.loadData = !this.loadData;
          this.ngOnInit();
        }
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
