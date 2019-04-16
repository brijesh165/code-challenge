(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"panel panel-primary\">\n    <div class=\"panel-heading\">Data</div>\n    <div class=\"panel-body\">\n      <div class=\"container\" *ngIf=\"titanicData.length else elseBlock\">\n        <jqxGrid #myGrid\n              [width]=\"'90%'\" [columns]=\"columns\"\n              [pageable]=\"true\" [theme]=\"metro\"\n              [pagesizeoptions]=\"['10', '20', '30']\">\n              <tr>\n                   <th>PassengerId</th>\n                   <th>Pclass</th>\n                   <th>Name</th>\n                   <th>Sex</th>\n                   <th>Age</th>\n                   <th>SibSp</th>\n                   <th>Parch</th>\n                   <th>Ticket</th>\n                   <th>Fare</th>\n                   <th>Cabin</th>\n                   <th>Embarked</th>\n              </tr>\n             <tr *ngFor=\"let titanic of titanicData\">\n               <td>{{titanic.PassengerId}}</td>\n               <td>{{titanic.Pclass}}</td>\n               <td>{{titanic.Name}}</td>\n               <td>{{titanic.Sex}}</td>\n               <td>{{titanic.Age}}</td>\n               <td>{{titanic.SibSp}}</td>\n               <td>{{titanic.Parch}}</td>\n               <td>{{titanic.Ticket}}</td>\n               <td>{{titanic.Fare}}</td>\n               <td>{{titanic.Cabin}}</td>\n               <td>{{titanic.Embarked}}</td>\n        </jqxGrid>\n        <div class=\"container\">\n          <button class=\"btn btn-primary\"\n                  (click)=\"onChartClick()\">\n                  {{loadChartComponent ? 'Hide chart' : 'Show chart'}}\n          </button>\n          <app-chart *ngIf=\"loadChartComponent\"\n                [maleCount]=\"maleCount\"\n                [femaleCount]=\"femaleCount\"\n                (selectedVale)=\"getSexFromChild($event)\"></app-chart>\n        </div>\n      </div>\n      <ng-template #elseBlock>\n        <app-spinner></app-spinner>\n      </ng-template>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _get_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-data.service */ "./src/app/get-data.service.ts");
/* harmony import */ var jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */ "./node_modules/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(getDataService) {
        var _this = this;
        this.getDataService = getDataService;
        this.titanicData = [];
        this.loadChartComponent = false;
        this.maleCount = 0;
        this.femaleCount = 0;
        this.source = {
            datatype: 'array',
            dataFields: [
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
        this.columns = [
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
        this.addfilter = function () {
            var filterGroup = new jqx.filter();
            var filterOrOperator = 1;
            var filterValue = _this.filterBy;
            var filterCondition = 'equal';
            var filter1 = filterGroup.createfilter('stringfilter', filterValue, filterCondition);
            filterGroup.addfilter(filterOrOperator, filter1);
            _this.myGrid.addfilter('Sex', filterGroup, true);
            _this.myGrid.applyfilters();
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getDataService.getData()
            .subscribe(function (data) {
            _this.titanicData = data.data;
        });
        this.getDataService.getMaleCount()
            .subscribe(function (data) {
            _this.maleCount = data.dataLength;
        });
        this.getDataService.getFemaleCount()
            .subscribe(function (data) {
            _this.femaleCount = data.dataLength;
        });
    };
    AppComponent.prototype.onChartClick = function () {
        this.loadChartComponent = !this.loadChartComponent;
    };
    AppComponent.prototype.getSexFromChild = function (event) {
        this.filterBy = event;
        this.addfilter();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myGrid'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_3__["jqxGridComponent"])
    ], AppComponent.prototype, "myGrid", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            providers: [_get_data_service__WEBPACK_IMPORTED_MODULE_2__["GetDataService"]],
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_get_data_service__WEBPACK_IMPORTED_MODULE_2__["GetDataService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */ "./node_modules/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! highcharts-angular */ "./node_modules/highcharts-angular/fesm5/highcharts-angular.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _chart_chart_chart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chart/chart/chart.component */ "./src/app/chart/chart/chart.component.ts");
/* harmony import */ var _data_pipe_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./data-pipe.pipe */ "./src/app/data-pipe.pipe.ts");
/* harmony import */ var _spinner_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./spinner/spinner/spinner.component */ "./src/app/spinner/spinner/spinner.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_5__["jqxGridComponent"],
                _chart_chart_chart_component__WEBPACK_IMPORTED_MODULE_8__["ChartComponent"],
                _data_pipe_pipe__WEBPACK_IMPORTED_MODULE_9__["DataPipePipe"],
                _spinner_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_10__["SpinnerComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                highcharts_angular__WEBPACK_IMPORTED_MODULE_6__["HighchartsChartModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chart/chart/chart.component.css":
/*!*************************************************!*\
  !*** ./src/app/chart/chart/chart.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0L2NoYXJ0L2NoYXJ0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/chart/chart/chart.component.html":
/*!**************************************************!*\
  !*** ./src/app/chart/chart/chart.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <highcharts-chart\n     [Highcharts] = \"highcharts\"\n     [options] = \"chartOptions\"\n     style = \"width: 100%; height: 400px; display: block;\"\n     (click)=\"sendSexToParent($event)\">\n  </highcharts-chart>\n</div>\n"

/***/ }),

/***/ "./src/app/chart/chart/chart.component.ts":
/*!************************************************!*\
  !*** ./src/app/chart/chart/chart.component.ts ***!
  \************************************************/
/*! exports provided: ChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartComponent", function() { return ChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);



var ChartComponent = /** @class */ (function () {
    function ChartComponent() {
        this.selectedVale = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
        this.chartOptions = {
            chart: {
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: 'Browser market shares at a specific website, 2014'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}%</b>: {point.percentage:.1f} %',
                        style: {
                            color: 'black'
                        }
                    }
                }
            },
            series: [{
                    type: 'pie',
                    name: 'Browser share',
                    data: [
                        ['Male', this.maleCount],
                        ['Female', this.femaleCount],
                    ]
                }]
        };
    }
    ChartComponent.prototype.ngOnInit = function () {
        this.totalCount = this.maleCount + this.femaleCount;
        this.chartOptions.series[0].data[0][1] = (this.maleCount / this.totalCount) * 100;
        this.chartOptions.series[0].data[1][1] = (this.femaleCount / this.totalCount) * 100;
    };
    ChartComponent.prototype.sendSexToParent = function (event) {
        this.selectedVale.emit(event.point.name);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], ChartComponent.prototype, "maleCount", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], ChartComponent.prototype, "femaleCount", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ChartComponent.prototype, "selectedVale", void 0);
    ChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chart',
            template: __webpack_require__(/*! ./chart.component.html */ "./src/app/chart/chart/chart.component.html"),
            styles: [__webpack_require__(/*! ./chart.component.css */ "./src/app/chart/chart/chart.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChartComponent);
    return ChartComponent;
}());



/***/ }),

/***/ "./src/app/data-pipe.pipe.ts":
/*!***********************************!*\
  !*** ./src/app/data-pipe.pipe.ts ***!
  \***********************************/
/*! exports provided: DataPipePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataPipePipe", function() { return DataPipePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DataPipePipe = /** @class */ (function () {
    function DataPipePipe() {
    }
    DataPipePipe.prototype.transform = function (value, args) {
        console.log(args);
        return args ?
            value.filter(function (item, index) {
                if (item.Sex.toLowerCase().indexOf(args.toLowerCase()) !== -1) {
                    return true;
                }
            })
            : value;
    };
    DataPipePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'dataPipe'
        })
    ], DataPipePipe);
    return DataPipePipe;
}());



/***/ }),

/***/ "./src/app/get-data.service.ts":
/*!*************************************!*\
  !*** ./src/app/get-data.service.ts ***!
  \*************************************/
/*! exports provided: GetDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetDataService", function() { return GetDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var GetDataService = /** @class */ (function () {
    function GetDataService(http) {
        this.http = http;
    }
    GetDataService.prototype.getData = function () {
        return this.http.get('http://localhost:3000/getData');
    };
    GetDataService.prototype.getMaleCount = function () {
        return this.http.get('http://localhost:3000/getMaleCount');
    };
    GetDataService.prototype.getFemaleCount = function () {
        return this.http.get('http://localhost:3000/getFemaleCount');
    };
    GetDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GetDataService);
    return GetDataService;
}());



/***/ }),

/***/ "./src/app/spinner/spinner/spinner.component.css":
/*!*******************************************************!*\
  !*** ./src/app/spinner/spinner/spinner.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Loader,\n.Loader:before,\n.Loader:after {\n  border-radius: 50%;\n}\n.Loader {\n  color: #521751;\n  font-size: 11px;\n  text-indent: -99999em;\n  margin: 55px auto;\n  position: relative;\n  width: 10em;\n  height: 10em;\n  box-shadow: inset 0 0 0 1em;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n}\n.Loader:before,\n.Loader:after {\n  position: absolute;\n  content: '';\n}\n.Loader:before {\n  width: 5.2em;\n  height: 10.2em;\n  background: #ffffff;\n  border-radius: 10.2em 0 0 10.2em;\n  top: -0.1em;\n  left: -0.1em;\n  -webkit-transform-origin: 5.2em 5.1em;\n  transform-origin: 5.2em 5.1em;\n  -webkit-animation: load2 2s infinite ease 1.5s;\n  animation: load2 2s infinite ease 1.5s;\n}\n.Loader:after {\n  width: 5.2em;\n  height: 10.2em;\n  background: #ffffff;\n  border-radius: 0 10.2em 10.2em 0;\n  top: -0.1em;\n  left: 5.1em;\n  -webkit-transform-origin: 0px 5.1em;\n  transform-origin: 0px 5.1em;\n  -webkit-animation: load2 2s infinite ease;\n  animation: load2 2s infinite ease;\n}\n@-webkit-keyframes load2 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n@keyframes load2 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Bpbm5lci9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0VBR0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLGdDQUFnQztFQUVoQyx3QkFBd0I7QUFDMUI7QUFDQTs7RUFFRSxrQkFBa0I7RUFDbEIsV0FBVztBQUNiO0FBQ0E7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLG1CQUFtQjtFQUNuQixnQ0FBZ0M7RUFDaEMsV0FBVztFQUNYLFlBQVk7RUFDWixxQ0FBcUM7RUFDckMsNkJBQTZCO0VBQzdCLDhDQUE4QztFQUM5QyxzQ0FBc0M7QUFDeEM7QUFDQTtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGdDQUFnQztFQUNoQyxXQUFXO0VBQ1gsV0FBVztFQUNYLG1DQUFtQztFQUNuQywyQkFBMkI7RUFDM0IseUNBQXlDO0VBQ3pDLGlDQUFpQztBQUNuQztBQUNBO0VBQ0U7SUFDRSwrQkFBK0I7SUFDL0IsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxpQ0FBaUM7SUFDakMseUJBQXlCO0VBQzNCO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsK0JBQStCO0lBQy9CLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsaUNBQWlDO0lBQ2pDLHlCQUF5QjtFQUMzQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc3Bpbm5lci9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5Mb2FkZXIsXG4uTG9hZGVyOmJlZm9yZSxcbi5Mb2FkZXI6YWZ0ZXIge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uTG9hZGVyIHtcbiAgY29sb3I6ICM1MjE3NTE7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgdGV4dC1pbmRlbnQ6IC05OTk5OWVtO1xuICBtYXJnaW46IDU1cHggYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTBlbTtcbiAgaGVpZ2h0OiAxMGVtO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxZW07XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG59XG4uTG9hZGVyOmJlZm9yZSxcbi5Mb2FkZXI6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6ICcnO1xufVxuLkxvYWRlcjpiZWZvcmUge1xuICB3aWR0aDogNS4yZW07XG4gIGhlaWdodDogMTAuMmVtO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMC4yZW0gMCAwIDEwLjJlbTtcbiAgdG9wOiAtMC4xZW07XG4gIGxlZnQ6IC0wLjFlbTtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1LjJlbSA1LjFlbTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogNS4yZW0gNS4xZW07XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkMiAycyBpbmZpbml0ZSBlYXNlIDEuNXM7XG4gIGFuaW1hdGlvbjogbG9hZDIgMnMgaW5maW5pdGUgZWFzZSAxLjVzO1xufVxuLkxvYWRlcjphZnRlciB7XG4gIHdpZHRoOiA1LjJlbTtcbiAgaGVpZ2h0OiAxMC4yZW07XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDAgMTAuMmVtIDEwLjJlbSAwO1xuICB0b3A6IC0wLjFlbTtcbiAgbGVmdDogNS4xZW07XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMHB4IDUuMWVtO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwcHggNS4xZW07XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkMiAycyBpbmZpbml0ZSBlYXNlO1xuICBhbmltYXRpb246IGxvYWQyIDJzIGluZmluaXRlIGVhc2U7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgbG9hZDIge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBsb2FkMiB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/spinner/spinner/spinner.component.html":
/*!********************************************************!*\
  !*** ./src/app/spinner/spinner/spinner.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"Loader\">Loading...</div>\n</div>\n"

/***/ }),

/***/ "./src/app/spinner/spinner/spinner.component.ts":
/*!******************************************************!*\
  !*** ./src/app/spinner/spinner/spinner.component.ts ***!
  \******************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent() {
    }
    SpinnerComponent.prototype.ngOnInit = function () {
    };
    SpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-spinner',
            template: __webpack_require__(/*! ./spinner.component.html */ "./src/app/spinner/spinner/spinner.component.html"),
            styles: [__webpack_require__(/*! ./spinner.component.css */ "./src/app/spinner/spinner/spinner.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Brijesh/Desktop/code-challange/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map