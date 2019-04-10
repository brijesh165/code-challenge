import {Component, OnInit, ViewChild} from '@angular/core';

import { GetDataService } from './get-data.service';
import {jqxGridComponent} from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GetDataService]
})
export class AppComponent implements OnInit {
  titanicData: any = [];
  loadChartComponent = false;
  maleCount = 0;
  femaleCount = 0;
  filterBy;

  @ViewChild('myGrid') myGrid: jqxGridComponent;
  source: any =
    {
      datatype: 'array',
      dataFields:
        [
          { name: 'PassengerId', type: 'number', map: '0' },
          { name: 'Pclass', type: 'number', map: '1' },
          { name: 'Name', type: 'string', map: '2' },
          { name: 'Sex', type: 'string', map: '3' },
          { name: 'Age', type: 'string', map: '4' },
          { name: 'SibSp', type: 'number', map: '5' },
          { name: 'Parch', type: 'number', map: '6' },
          { name: 'Ticket', type: 'string', map: '7' },
          { name: 'Fare', type: 'number', map: '8' },
          { name: 'Cabin', type: 'string', map: '9' },
          { name: 'Embarked', type: 'string', map: '10' },
        ],
    };
  columns: any[] =
      [
        { text: 'Passenger Id', dataField: 'PassengerId', width: 100 },
        { text: 'Passenger Class', dataField: 'Pclass', width: 120 },
        { text: 'Name', dataField: 'Name', width: 250 },
        { text: 'Sex',
          dataField: 'Sex',
          width: 80
        },
        { text: 'Age', dataField: 'Age' },
        { text: 'SibSp', dataField: 'SibSp' },
        { text: 'Parch', dataField: 'Parch' },
        { text: 'Ticket', dataField: 'Ticket' },
        { text: 'Fare', dataField: 'Fare' },
        { text: 'Cabin', dataField: 'Cabin' },
        { text: 'Embarked', dataField: 'Embarked' },
      ];

  addfilter = (): void => {
    const filterGroup = new jqx.filter();
    const filterOrOperator = 1;
    const filterValue = this.filterBy;
    const filterCondition = 'equal';
    const filter1 = filterGroup.createfilter('stringfilter', filterValue, filterCondition);
    filterGroup.addfilter(filterOrOperator, filter1);
    this.myGrid.addfilter('Sex', filterGroup, true);
    this.myGrid.applyfilters();
  };

  constructor(private getDataService: GetDataService) {}

  ngOnInit(): void {
    this.getDataService.getData()
      .subscribe((data: any) => {
        this.titanicData = data.data;
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

  onChartClick() {
    this.loadChartComponent = !this.loadChartComponent;
  }

  getSexFromChild(event) {
    this.filterBy = event;
    this.addfilter();
  }
}
