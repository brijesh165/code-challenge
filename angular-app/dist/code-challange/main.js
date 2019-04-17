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

module.exports = ".bgImage {\n  background-image: url('titanic.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 1000px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBbUQ7RUFDbkQsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmdJbWFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hcHAvYXNzZXRzL3RpdGFuaWMuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBoZWlnaHQ6IDEwMDBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bgImage\">\n  <div class=\"container\">\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\">\n        <h3>Titanic Data</h3>\n      </div>\n      <div class=\"panel-body\">\n        <div class=\"container\" style=\"margin-bottom: 20px\">\n          <button class=\"btn btn-primary\" id=\"loadData\"\n                  (click)=\"onLoadData()\">Load Data</button>\n        </div>\n        <div class=\"container\" *ngIf=\"source.localdata.length else elseBlock\">\n          <jqxGrid #myGrid\n                [width]=\"'95%'\"\n                [source]=\"dataAdapter\"\n                [columns]=\"columns\"\n                [pageable]=\"true\"\n                [autoheight]=\"true\"\n                [theme]=\"metro\"\n                [sortable]=\"true\"\n                [filterable]=\"true\"\n                (onPagechanged)=\"onPageChanged($event)\">\n          </jqxGrid>\n          <br />\n          <button class=\"btn btn-primary\"\n                  (click)=\"onChartClick()\">\n                  {{loadChartComponent ? 'Hide chart' : 'Show chart'}}\n          </button>\n          <br />\n          <app-chart *ngIf=\"loadChartComponent\"\n                [maleCount]=\"maleCount\"\n                [femaleCount]=\"femaleCount\"\n                (selectedVale)=\"getSexFromChild($event)\"></app-chart>\n        </div>\n        <ng-template #elseBlock>\n          <app-spinner></app-spinner>\n        </ng-template>\n      </div>\n    </div>\n  </div>\n</div>\n"

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _get_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-data.service */ "./src/app/get-data.service.ts");
/* harmony import */ var jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */ "./node_modules/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var src_app_assets_data_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/assets/data.json */ "./src/app/assets/data.json");
var src_app_assets_data_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/app/assets/data.json */ "./src/app/assets/data.json", 1);






var AppComponent = /** @class */ (function () {
    function AppComponent(getDataService) {
        var _this = this;
        this.getDataService = getDataService;
        this.dataJson = src_app_assets_data_json__WEBPACK_IMPORTED_MODULE_5__;
        this.loadChartComponent = false;
        this.maleCount = 0;
        this.femaleCount = 0;
        this.pageNumber = 1;
        this.pageSize = 10;
        this.source = {
            localdata: [],
            dataFields: [
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
        this.dataAdapter = new jqx.dataAdapter(this.source, length, 1000);
        this.columns = [];
        this.addfilter = function () {
            var filterGroup = new jqx.filter();
            var filterOrOperator = 1;
            var filterValue = _this.filterBy;
            var filterCondition = 'equal';
            var filter = filterGroup.createfilter('stringfilter', filterValue, filterCondition);
            filterGroup.addfilter(filterOrOperator, filter);
            _this.myGrid.addfilter('Sex', filterGroup, true);
            _this.myGrid.applyfilters();
        };
    }
    AppComponent.prototype.onPageChanged = function (event) {
        var args = event.args;
        var pageNumber = args.pagenum + 1;
        var pageSize = args.pagesize;
        this.getDataFromDatabase(pageNumber, pageSize);
    };
    AppComponent.prototype.getDataFromDatabase = function (pageNum, pageSize) {
        var _this = this;
        console.log(pageNum + ' ' + pageSize);
        this.getDataService.getData(pageNum, pageSize)
            .subscribe(function (data) {
            _this.source.localdata = data.message;
        });
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getDataFromDatabase(this.pageNumber, this.pageSize);
        this.getDataService.getColumnName()
            .subscribe(function (data) {
            if (!_this.columns.length) {
                for (var i = 0; i < data.columnName.length - 2; i++) {
                    if (data.columnName[i] === 'Name') {
                        _this.columns.push({
                            type: data.columnName[i],
                            datafield: data.columnName[i],
                            width: 300
                        });
                    }
                    else {
                        _this.columns.push({
                            type: data.columnName[i],
                            datafield: data.columnName[i],
                        });
                    }
                }
            }
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
    AppComponent.prototype.onLoadData = function () {
        this.getDataService.putData(this.dataJson)
            .subscribe(function (data) {
            console.log(data);
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_4__["jqxGridComponent"])
    ], AppComponent.prototype, "myGrid", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            providers: [_get_data_service__WEBPACK_IMPORTED_MODULE_3__["GetDataService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]],
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_get_data_service__WEBPACK_IMPORTED_MODULE_3__["GetDataService"]])
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
                _spinner_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_10__["SpinnerComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                highcharts_angular__WEBPACK_IMPORTED_MODULE_6__["HighchartsChartModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/assets/data.json":
/*!**********************************!*\
  !*** ./src/app/assets/data.json ***!
  \**********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, default */
/***/ (function(module) {

module.exports = [{"PassengerId":892,"Pclass":3,"Name":"Kelly, Mr. James","Sex":"male","Age":34.5,"SibSp":0,"Parch":0,"Ticket":"330911","Fare":7.8292,"Cabin":"","Embarked":"Q"},{"PassengerId":893,"Pclass":3,"Name":"Wilkes, Mrs. James (Ellen Needs)","Sex":"female","Age":47,"SibSp":1,"Parch":0,"Ticket":"363272","Fare":7,"Cabin":"","Embarked":"S"},{"PassengerId":894,"Pclass":2,"Name":"Myles, Mr. Thomas Francis","Sex":"male","Age":62,"SibSp":0,"Parch":0,"Ticket":"240276","Fare":9.6875,"Cabin":"","Embarked":"Q"},{"PassengerId":895,"Pclass":3,"Name":"Wirz, Mr. Albert","Sex":"male","Age":27,"SibSp":0,"Parch":0,"Ticket":"315154","Fare":8.6625,"Cabin":"","Embarked":"S"},{"PassengerId":896,"Pclass":3,"Name":"Hirvonen, Mrs. Alexander (Helga E Lindqvist)","Sex":"female","Age":22,"SibSp":1,"Parch":1,"Ticket":"3101298","Fare":12.2875,"Cabin":"","Embarked":"S"},{"PassengerId":897,"Pclass":3,"Name":"Svensson, Mr. Johan Cervin","Sex":"male","Age":14,"SibSp":0,"Parch":0,"Ticket":"7538","Fare":9.225,"Cabin":"","Embarked":"S"},{"PassengerId":898,"Pclass":3,"Name":"Connolly, Miss. Kate","Sex":"female","Age":30,"SibSp":0,"Parch":0,"Ticket":"330972","Fare":7.6292,"Cabin":"","Embarked":"Q"},{"PassengerId":899,"Pclass":2,"Name":"Caldwell, Mr. Albert Francis","Sex":"male","Age":26,"SibSp":1,"Parch":1,"Ticket":"248738","Fare":29,"Cabin":"","Embarked":"S"},{"PassengerId":900,"Pclass":3,"Name":"Abrahim, Mrs. Joseph (Sophie Halaut Easu)","Sex":"female","Age":18,"SibSp":0,"Parch":0,"Ticket":"2657","Fare":7.2292,"Cabin":"","Embarked":"C"},{"PassengerId":901,"Pclass":3,"Name":"Davies, Mr. John Samuel","Sex":"male","Age":21,"SibSp":2,"Parch":0,"Ticket":"A/4 48871","Fare":24.15,"Cabin":"","Embarked":"S"},{"PassengerId":902,"Pclass":3,"Name":"Ilieff, Mr. Ylio","Sex":"male","Age":null,"SibSp":0,"Parch":0,"Ticket":"349220","Fare":7.8958,"Cabin":"","Embarked":"S"},{"PassengerId":903,"Pclass":1,"Name":"Jones, Mr. Charles Cresson","Sex":"male","Age":46,"SibSp":0,"Parch":0,"Ticket":"694","Fare":26,"Cabin":"","Embarked":"S"},{"PassengerId":904,"Pclass":1,"Name":"Snyder, Mrs. John Pillsbury (Nelle Stevenson)","Sex":"female","Age":23,"SibSp":1,"Parch":0,"Ticket":"21228","Fare":82.2667,"Cabin":"B45","Embarked":"S"},{"PassengerId":905,"Pclass":2,"Name":"Howard, Mr. Benjamin","Sex":"male","Age":63,"SibSp":1,"Parch":0,"Ticket":"24065","Fare":26,"Cabin":"","Embarked":"S"},{"PassengerId":906,"Pclass":1,"Name":"Chaffee, Mrs. Herbert Fuller (Carrie Constance Toogood)","Sex":"female","Age":47,"SibSp":1,"Parch":0,"Ticket":"W.E.P. 5734","Fare":61.175,"Cabin":"E31","Embarked":"S"},{"PassengerId":907,"Pclass":2,"Name":"del Carlo, Mrs. Sebastiano (Argenia Genovesi)","Sex":"female","Age":24,"SibSp":1,"Parch":0,"Ticket":"SC/PARIS 2167","Fare":27.7208,"Cabin":"","Embarked":"C"},{"PassengerId":908,"Pclass":2,"Name":"Keane, Mr. Daniel","Sex":"male","Age":35,"SibSp":0,"Parch":0,"Ticket":"233734","Fare":12.35,"Cabin":"","Embarked":"Q"},{"PassengerId":909,"Pclass":3,"Name":"Assaf, Mr. Gerios","Sex":"male","Age":21,"SibSp":0,"Parch":0,"Ticket":"2692","Fare":7.225,"Cabin":"","Embarked":"C"},{"PassengerId":910,"Pclass":3,"Name":"Ilmakangas, Miss. Ida Livija","Sex":"female","Age":27,"SibSp":1,"Parch":0,"Ticket":"STON/O2. 3101270","Fare":7.925,"Cabin":"","Embarked":"S"},{"PassengerId":911,"Pclass":3,"Name":"Assaf Khalil, Mrs. Mariana (Miriam\")\"","Sex":"female","Age":45,"SibSp":0,"Parch":0,"Ticket":"2696","Fare":7.225,"Cabin":"","Embarked":"C"},{"PassengerId":912,"Pclass":1,"Name":"Rothschild, Mr. Martin","Sex":"male","Age":55,"SibSp":1,"Parch":0,"Ticket":"PC 17603","Fare":59.4,"Cabin":"","Embarked":"C"},{"PassengerId":913,"Pclass":3,"Name":"Olsen, Master. Artur Karl","Sex":"male","Age":9,"SibSp":0,"Parch":1,"Ticket":"C 17368","Fare":3.1708,"Cabin":"","Embarked":"S"},{"PassengerId":914,"Pclass":1,"Name":"Flegenheim, Mrs. Alfred (Antoinette)","Sex":"female","Age":null,"SibSp":0,"Parch":0,"Ticket":"PC 17598","Fare":31.6833,"Cabin":"","Embarked":"S"},{"PassengerId":915,"Pclass":1,"Name":"Williams, Mr. Richard Norris II","Sex":"male","Age":21,"SibSp":0,"Parch":1,"Ticket":"PC 17597","Fare":61.3792,"Cabin":"","Embarked":"C"},{"PassengerId":916,"Pclass":1,"Name":"Ryerson, Mrs. Arthur Larned (Emily Maria Borie)","Sex":"female","Age":48,"SibSp":1,"Parch":3,"Ticket":"PC 17608","Fare":262.375,"Cabin":"B57 B59 B63 B66","Embarked":"C"},{"PassengerId":917,"Pclass":3,"Name":"Robins, Mr. Alexander A","Sex":"male","Age":50,"SibSp":1,"Parch":0,"Ticket":"A/5. 3337","Fare":14.5,"Cabin":"","Embarked":"S"},{"PassengerId":918,"Pclass":1,"Name":"Ostby, Miss. Helene Ragnhild","Sex":"female","Age":22,"SibSp":0,"Parch":1,"Ticket":"113509","Fare":61.9792,"Cabin":"B36","Embarked":"C"},{"PassengerId":919,"Pclass":3,"Name":"Daher, Mr. Shedid","Sex":"male","Age":22.5,"SibSp":0,"Parch":0,"Ticket":"2698","Fare":7.225,"Cabin":"","Embarked":"C"},{"PassengerId":920,"Pclass":1,"Name":"Brady, Mr. John Bertram","Sex":"male","Age":41,"SibSp":0,"Parch":0,"Ticket":"113054","Fare":30.5,"Cabin":"A21","Embarked":"S"},{"PassengerId":921,"Pclass":3,"Name":"Samaan, Mr. Elias","Sex":"male","Age":null,"SibSp":2,"Parch":0,"Ticket":"2662","Fare":21.6792,"Cabin":"","Embarked":"C"},{"PassengerId":922,"Pclass":2,"Name":"Louch, Mr. Charles Alexander","Sex":"male","Age":50,"SibSp":1,"Parch":0,"Ticket":"SC/AH 3085","Fare":26,"Cabin":"","Embarked":"S"},{"PassengerId":923,"Pclass":2,"Name":"Jefferys, Mr. Clifford Thomas","Sex":"male","Age":24,"SibSp":2,"Parch":0,"Ticket":"C.A. 31029","Fare":31.5,"Cabin":"","Embarked":"S"},{"PassengerId":924,"Pclass":3,"Name":"Dean, Mrs. Bertram (Eva Georgetta Light)","Sex":"female","Age":33,"SibSp":1,"Parch":2,"Ticket":"C.A. 2315","Fare":20.575,"Cabin":"","Embarked":"S"},{"PassengerId":925,"Pclass":3,"Name":"Johnston, Mrs. Andrew G (Elizabeth Lily\" Watson)\"","Sex":"female","Age":null,"SibSp":1,"Parch":2,"Ticket":"W./C. 6607","Fare":23.45,"Cabin":"","Embarked":"S"},{"PassengerId":926,"Pclass":1,"Name":"Mock, Mr. Philipp Edmund","Sex":"male","Age":30,"SibSp":1,"Parch":0,"Ticket":"13236","Fare":57.75,"Cabin":"C78","Embarked":"C"},{"PassengerId":927,"Pclass":3,"Name":"Katavelas, Mr. Vassilios (Catavelas Vassilios\")\"","Sex":"male","Age":18.5,"SibSp":0,"Parch":0,"Ticket":"2682","Fare":7.2292,"Cabin":"","Embarked":"C"},{"PassengerId":928,"Pclass":3,"Name":"Roth, Miss. Sarah A","Sex":"female","Age":null,"SibSp":0,"Parch":0,"Ticket":"342712","Fare":8.05,"Cabin":"","Embarked":"S"},{"PassengerId":929,"Pclass":3,"Name":"Cacic, Miss. Manda","Sex":"female","Age":21,"SibSp":0,"Parch":0,"Ticket":"315087","Fare":8.6625,"Cabin":"","Embarked":"S"},{"PassengerId":930,"Pclass":3,"Name":"Sap, Mr. Julius","Sex":"male","Age":25,"SibSp":0,"Parch":0,"Ticket":"345768","Fare":9.5,"Cabin":"","Embarked":"S"},{"PassengerId":931,"Pclass":3,"Name":"Hee, Mr. Ling","Sex":"male","Age":null,"SibSp":0,"Parch":0,"Ticket":"1601","Fare":56.4958,"Cabin":"","Embarked":"S"},{"PassengerId":932,"Pclass":3,"Name":"Karun, Mr. Franz","Sex":"male","Age":39,"SibSp":0,"Parch":1,"Ticket":"349256","Fare":13.4167,"Cabin":"","Embarked":"C"},{"PassengerId":933,"Pclass":1,"Name":"Franklin, Mr. Thomas Parham","Sex":"male","Age":null,"SibSp":0,"Parch":0,"Ticket":"113778","Fare":26.55,"Cabin":"D34","Embarked":"S"},{"PassengerId":934,"Pclass":3,"Name":"Goldsmith, Mr. Nathan","Sex":"male","Age":41,"SibSp":0,"Parch":0,"Ticket":"SOTON/O.Q. 3101263","Fare":7.85,"Cabin":"","Embarked":"S"},{"PassengerId":935,"Pclass":2,"Name":"Corbett, Mrs. Walter H (Irene Colvin)","Sex":"female","Age":30,"SibSp":0,"Parch":0,"Ticket":"237249","Fare":13,"Cabin":"","Embarked":"S"},{"PassengerId":936,"Pclass":1,"Name":"Kimball, Mrs. Edwin Nelson Jr (Gertrude Parsons)","Sex":"female","Age":45,"SibSp":1,"Parch":0,"Ticket":"11753","Fare":52.5542,"Cabin":"D19","Embarked":"S"},{"PassengerId":937,"Pclass":3,"Name":"Peltomaki, Mr. Nikolai Johannes","Sex":"male","Age":25,"SibSp":0,"Parch":0,"Ticket":"STON/O 2. 3101291","Fare":7.925,"Cabin":"","Embarked":"S"},{"PassengerId":938,"Pclass":1,"Name":"Chevre, Mr. Paul Romaine","Sex":"male","Age":45,"SibSp":0,"Parch":0,"Ticket":"PC 17594","Fare":29.7,"Cabin":"A9","Embarked":"C"},{"PassengerId":939,"Pclass":3,"Name":"Shaughnessy, Mr. Patrick","Sex":"male","Age":null,"SibSp":0,"Parch":0,"Ticket":"370374","Fare":7.75,"Cabin":"","Embarked":"Q"},{"PassengerId":940,"Pclass":1,"Name":"Bucknell, Mrs. William Robert (Emma Eliza Ward)","Sex":"female","Age":60,"SibSp":0,"Parch":0,"Ticket":"11813","Fare":76.2917,"Cabin":"D15","Embarked":"C"},{"PassengerId":941,"Pclass":3,"Name":"Coutts, Mrs. William (Winnie Minnie\" Treanor)\"","Sex":"female","Age":36,"SibSp":0,"Parch":2,"Ticket":"C.A. 37671","Fare":15.9,"Cabin":"","Embarked":"S"},{"PassengerId":942,"Pclass":1,"Name":"Smith, Mr. Lucien Philip","Sex":"male","Age":24,"SibSp":1,"Parch":0,"Ticket":"13695","Fare":60,"Cabin":"C31","Embarked":"S"},{"PassengerId":943,"Pclass":2,"Name":"Pulbaum, Mr. Franz","Sex":"male","Age":27,"SibSp":0,"Parch":0,"Ticket":"SC/PARIS 2168","Fare":15.0333,"Cabin":"","Embarked":"C"},{"PassengerId":944,"Pclass":2,"Name":"Hocking, Miss. Ellen Nellie\"\"","Sex":"female","Age":20,"SibSp":2,"Parch":1,"Ticket":"29105","Fare":23,"Cabin":"","Embarked":"S"},{"PassengerId":945,"Pclass":1,"Name":"Fortune, Miss. Ethel Flora","Sex":"female","Age":28,"SibSp":3,"Parch":2,"Ticket":"19950","Fare":263,"Cabin":"C23 C25 C27","Embarked":"S"},{"PassengerId":946,"Pclass":2,"Name":"Mangiavacchi, Mr. Serafino Emilio","Sex":"male","Age":null,"SibSp":0,"Parch":0,"Ticket":"SC/A.3 2861","Fare":15.5792,"Cabin":"","Embarked":"C"},{"PassengerId":947,"Pclass":3,"Name":"Rice, Master. Albert","Sex":"male","Age":10,"SibSp":4,"Parch":1,"Ticket":"382652","Fare":29.125,"Cabin":"","Embarked":"Q"},{"PassengerId":948,"Pclass":3,"Name":"Cor, Mr. Bartol","Sex":"male","Age":35,"SibSp":0,"Parch":0,"Ticket":"349230","Fare":7.8958,"Cabin":"","Embarked":"S"},{"PassengerId":949,"Pclass":3,"Name":"Abelseth, Mr. Olaus Jorgensen","Sex":"male","Age":25,"SibSp":0,"Parch":0,"Ticket":"348122","Fare":7.65,"Cabin":"F G63","Embarked":"S"},{"PassengerId":950,"Pclass":3,"Name":"Davison, Mr. Thomas Henry","Sex":"male","Age":null,"SibSp":1,"Parch":0,"Ticket":"386525","Fare":16.1,"Cabin":"","Embarked":"S"},{"PassengerId":951,"Pclass":1,"Name":"Chaudanson, Miss. Victorine","Sex":"female","Age":36,"SibSp":0,"Parch":0,"Ticket":"PC 17608","Fare":262.375,"Cabin":"B61","Embarked":"C"},{"PassengerId":952,"Pclass":3,"Name":"Dika, Mr. Mirko","Sex":"male","Age":17,"SibSp":0,"Parch":0,"Ticket":"349232","Fare":7.8958,"Cabin":"","Embarked":"S"},{"PassengerId":953,"Pclass":2,"Name":"McCrae, Mr. Arthur Gordon","Sex":"male","Age":32,"SibSp":0,"Parch":0,"Ticket":"237216","Fare":13.5,"Cabin":"","Embarked":"S"},{"PassengerId":954,"Pclass":3,"Name":"Bjorklund, Mr. Ernst Herbert","Sex":"male","Age":18,"SibSp":0,"Parch":0,"Ticket":"347090","Fare":7.75,"Cabin":"","Embarked":"S"},{"PassengerId":955,"Pclass":3,"Name":"Bradley, Miss. Bridget Delia","Sex":"female","Age":22,"SibSp":0,"Parch":0,"Ticket":"334914","Fare":7.725,"Cabin":"","Embarked":"Q"},{"PassengerId":956,"Pclass":1,"Name":"Ryerson, Master. John Borie","Sex":"male","Age":13,"SibSp":2,"Parch":2,"Ticket":"PC 17608","Fare":262.375,"Cabin":"B57 B59 B63 B66","Embarked":"C"},{"PassengerId":957,"Pclass":2,"Name":"Corey, Mrs. Percy C (Mary Phyllis Elizabeth Miller)","Sex":"female","Age":null,"SibSp":0,"Parch":0,"Ticket":"F.C.C. 13534","Fare":21,"Cabin":"","Embarked":"S"},{"PassengerId":958,"Pclass":3,"Name":"Burns, Miss. Mary Delia","Sex":"female","Age":18,"SibSp":0,"Parch":0,"Ticket":"330963","Fare":7.8792,"Cabin":"","Embarked":"Q"},{"PassengerId":959,"Pclass":1,"Name":"Moore, Mr. Clarence Bloomfield","Sex":"male","Age":47,"SibSp":0,"Parch":0,"Ticket":"113796","Fare":42.4,"Cabin":"","Embarked":"S"},{"PassengerId":960,"Pclass":1,"Name":"Tucker, Mr. Gilbert Milligan Jr","Sex":"male","Age":31,"SibSp":0,"Parch":0,"Ticket":"2543","Fare":28.5375,"Cabin":"C53","Embarked":"C"},{"PassengerId":961,"Pclass":1,"Name":"Fortune, Mrs. Mark (Mary McDougald)","Sex":"female","Age":60,"SibSp":1,"Parch":4,"Ticket":"19950","Fare":263,"Cabin":"C23 C25 C27","Embarked":"S"},{"PassengerId":962,"Pclass":3,"Name":"Mulvihill, Miss. Bertha E","Sex":"female","Age":24,"SibSp":0,"Parch":0,"Ticket":"382653","Fare":7.75,"Cabin":"","Embarked":"Q"},{"PassengerId":963,"Pclass":3,"Name":"Minkoff, Mr. Lazar","Sex":"male","Age":21,"SibSp":0,"Parch":0,"Ticket":"349211","Fare":7.8958,"Cabin":"","Embarked":"S"},{"PassengerId":964,"Pclass":3,"Name":"Nieminen, Miss. Manta Josefina","Sex":"female","Age":29,"SibSp":0,"Parch":0,"Ticket":"3101297","Fare":7.925,"Cabin":"","Embarked":"S"},{"PassengerId":965,"Pclass":1,"Name":"Ovies y Rodriguez, Mr. Servando","Sex":"male","Age":28.5,"SibSp":0,"Parch":0,"Ticket":"PC 17562","Fare":27.7208,"Cabin":"D43","Embarked":"C"},{"PassengerId":966,"Pclass":1,"Name":"Geiger, Miss. Amalie","Sex":"female","Age":35,"SibSp":0,"Parch":0,"Ticket":"113503","Fare":211.5,"Cabin":"C130","Embarked":"C"},{"PassengerId":967,"Pclass":1,"Name":"Keeping, Mr. Edwin","Sex":"male","Age":32.5,"SibSp":0,"Parch":0,"Ticket":"113503","Fare":211.5,"Cabin":"C132","Embarked":"C"},{"PassengerId":968,"Pclass":3,"Name":"Miles, Mr. Frank","Sex":"male","Age":null,"SibSp":0,"Parch":0,"Ticket":"359306","Fare":8.05,"Cabin":"","Embarked":"S"},{"PassengerId":969,"Pclass":1,"Name":"Cornell, Mrs. Robert Clifford (Malvina Helen Lamson)","Sex":"female","Age":55,"SibSp":2,"Parch":0,"Ticket":"11770","Fare":25.7,"Cabin":"C101","Embarked":"S"},{"PassengerId":970,"Pclass":2,"Name":"Aldworth, Mr. Charles Augustus","Sex":"male","Age":30,"SibSp":0,"Parch":0,"Ticket":"248744","Fare":13,"Cabin":"","Embarked":"S"},{"PassengerId":971,"Pclass":3,"Name":"Doyle, Miss. Elizabeth","Sex":"female","Age":24,"SibSp":0,"Parch":0,"Ticket":"368702","Fare":7.75,"Cabin":"","Embarked":"Q"},{"PassengerId":972,"Pclass":3,"Name":"Boulos, Master. Akar","Sex":"male","Age":6,"SibSp":1,"Parch":1,"Ticket":"2678","Fare":15.2458,"Cabin":"","Embarked":"C"},{"PassengerId":973,"Pclass":1,"Name":"Straus, Mr. Isidor","Sex":"male","Age":67,"SibSp":1,"Parch":0,"Ticket":"PC 17483","Fare":221.7792,"Cabin":"C55 C57","Embarked":"S"},{"PassengerId":974,"Pclass":1,"Name":"Case, Mr. Howard Brown","Sex":"male","Age":49,"SibSp":0,"Parch":0,"Ticket":"19924","Fare":26,"Cabin":"","Embarked":"S"},{"PassengerId":975,"Pclass":3,"Name":"Demetri, Mr. Marinko","Sex":"male","Age":null,"SibSp":0,"Parch":0,"Ticket":"349238","Fare":7.8958,"Cabin":"","Embarked":"S"},{"PassengerId":976,"Pclass":2,"Name":"Lamb, Mr. John Joseph","Sex":"male","Age":null,"SibSp":0,"Parch":0,"Ticket":"240261","Fare":10.7083,"Cabin":"","Embarked":"Q"},{"PassengerId":977,"Pclass":3,"Name":"Khalil, Mr. Betros","Sex":"male","Age":null,"SibSp":1,"Parch":0,"Ticket":"2660","Fare":14.4542,"Cabin":"","Embarked":"C"},{"PassengerId":978,"Pclass":3,"Name":"Barry, Miss. Julia","Sex":"female","Age":27,"SibSp":0,"Parch":0,"Ticket":"330844","Fare":7.8792,"Cabin":"","Embarked":"Q"},{"PassengerId":979,"Pclass":3,"Name":"Badman, Miss. Emily Louisa","Sex":"female","Age":18,"SibSp":0,"Parch":0,"Ticket":"A/4 31416","Fare":8.05,"Cabin":"","Embarked":"S"},{"PassengerId":980,"Pclass":3,"Name":"O'Donoghue, Ms. Bridget","Sex":"female","Age":null,"SibSp":0,"Parch":0,"Ticket":"364856","Fare":7.75,"Cabin":"","Embarked":"Q"},{"PassengerId":981,"Pclass":2,"Name":"Wells, Master. Ralph Lester","Sex":"male","Age":2,"SibSp":1,"Parch":1,"Ticket":"29103","Fare":23,"Cabin":"","Embarked":"S"},{"PassengerId":982,"Pclass":3,"Name":"Dyker, Mrs. Adolf Fredrik (Anna Elisabeth Judith Andersson)","Sex":"female","Age":22,"SibSp":1,"Parch":0,"Ticket":"347072","Fare":13.9,"Cabin":"","Embarked":"S"},{"PassengerId":983,"Pclass":3,"Name":"Pedersen, Mr. Olaf","Sex":"male","Age":null,"SibSp":0,"Parch":0,"Ticket":"345498","Fare":7.775,"Cabin":"","Embarked":"S"},{"PassengerId":984,"Pclass":1,"Name":"Davidson, Mrs. Thornton (Orian Hays)","Sex":"female","Age":27,"SibSp":1,"Parch":2,"Ticket":"F.C. 12750","Fare":52,"Cabin":"B71","Embarked":"S"},{"PassengerId":985,"Pclass":3,"Name":"Guest, Mr. Robert","Sex":"male","Age":null,"SibSp":0,"Parch":0,"Ticket":"376563","Fare":8.05,"Cabin":"","Embarked":"S"},{"PassengerId":986,"Pclass":1,"Name":"Birnbaum, Mr. Jakob","Sex":"male","Age":25,"SibSp":0,"Parch":0,"Ticket":"13905","Fare":26,"Cabin":"","Embarked":"C"},{"PassengerId":987,"Pclass":3,"Name":"Tenglin, Mr. Gunnar Isidor","Sex":"male","Age":25,"SibSp":0,"Parch":0,"Ticket":"350033","Fare":7.7958,"Cabin":"","Embarked":"S"},{"PassengerId":988,"Pclass":1,"Name":"Cavendish, Mrs. Tyrell William (Julia Florence Siegel)","Sex":"female","Age":76,"SibSp":1,"Parch":0,"Ticket":"19877","Fare":78.85,"Cabin":"C46","Embarked":"S"},{"PassengerId":989,"Pclass":3,"Name":"Makinen, Mr. Kalle Edvard","Sex":"male","Age":29,"SibSp":0,"Parch":0,"Ticket":"STON/O 2. 3101268","Fare":7.925,"Cabin":"","Embarked":"S"},{"PassengerId":990,"Pclass":3,"Name":"Braf, Miss. Elin Ester Maria","Sex":"female","Age":20,"SibSp":0,"Parch":0,"Ticket":"347471","Fare":7.8542,"Cabin":"","Embarked":"S"},{"PassengerId":991,"Pclass":3,"Name":"Nancarrow, Mr. William Henry","Sex":"male","Age":33,"SibSp":0,"Parch":0,"Ticket":"A./5. 3338","Fare":8.05,"Cabin":"","Embarked":"S"},{"PassengerId":992,"Pclass":1,"Name":"Stengel, Mrs. Charles Emil Henry (Annie May Morris)","Sex":"female","Age":43,"SibSp":1,"Parch":0,"Ticket":"11778","Fare":55.4417,"Cabin":"C116","Embarked":"C"},{"PassengerId":993,"Pclass":2,"Name":"Weisz, Mr. Leopold","Sex":"male","Age":27,"SibSp":1,"Parch":0,"Ticket":"228414","Fare":26,"Cabin":"","Embarked":"S"},{"PassengerId":994,"Pclass":3,"Name":"Foley, Mr. William","Sex":"male","Age":null,"SibSp":0,"Parch":0,"Ticket":"365235","Fare":7.75,"Cabin":"","Embarked":"Q"},{"PassengerId":995,"Pclass":3,"Name":"Johansson Palmquist, Mr. Oskar Leander","Sex":"male","Age":26,"SibSp":0,"Parch":0,"Ticket":"347070","Fare":7.775,"Cabin":"","Embarked":"S"},{"PassengerId":996,"Pclass":3,"Name":"Thomas, Mrs. Alexander (Thamine Thelma\")\"","Sex":"female","Age":16,"SibSp":1,"Parch":1,"Ticket":"2625","Fare":8.5167,"Cabin":"","Embarked":"C"},{"PassengerId":997,"Pclass":3,"Name":"Holthen, Mr. Johan Martin","Sex":"male","Age":28,"SibSp":0,"Parch":0,"Ticket":"C 4001","Fare":22.525,"Cabin":"","Embarked":"S"},{"PassengerId":998,"Pclass":3,"Name":"Buckley, Mr. Daniel","Sex":"male","Age":21,"SibSp":0,"Parch":0,"Ticket":"330920","Fare":7.8208,"Cabin":"","Embarked":"Q"},{"PassengerId":999,"Pclass":3,"Name":"Ryan, Mr. Edward","Sex":"male","Age":null,"SibSp":0,"Parch":0,"Ticket":"383162","Fare":7.75,"Cabin":"","Embarked":"Q"},{"PassengerId":1000,"Pclass":3,"Name":"Willer, Mr. Aaron (Abi Weller\")\"","Sex":"male","Age":null,"SibSp":0,"Parch":0,"Ticket":"3410","Fare":8.7125,"Cabin":"","Embarked":"S"},{"PassengerId":1001,"Pclass":2,"Name":"Swane, Mr. George","Sex":"male","Age":18.5,"SibSp":0,"Parch":0,"Ticket":"248734","Fare":13,"Cabin":"F","Embarked":"S"},{"PassengerId":1002,"Pclass":2,"Name":"Stanton, Mr. Samuel Ward","Sex":"male","Age":41,"SibSp":0,"Parch":0,"Ticket":"237734","Fare":15.0458,"Cabin":"","Embarked":"C"},{"PassengerId":1003,"Pclass":3,"Name":"Shine, Miss. Ellen Natalia","Sex":"female","Age":null,"SibSp":0,"Parch":0,"Ticket":"330968","Fare":7.7792,"Cabin":"","Embarked":"Q"},{"PassengerId":1004,"Pclass":1,"Name":"Evans, Miss. Edith Corse","Sex":"female","Age":36,"SibSp":0,"Parch":0,"Ticket":"PC 17531","Fare":31.6792,"Cabin":"A29","Embarked":"C"},{"PassengerId":1005,"Pclass":3,"Name":"Buckley, Miss. Katherine","Sex":"female","Age":18.5,"SibSp":0,"Parch":0,"Ticket":"329944","Fare":7.2833,"Cabin":"","Embarked":"Q"},{"PassengerId":1006,"Pclass":1,"Name":"Straus, Mrs. Isidor (Rosalie Ida Blun)","Sex":"female","Age":63,"SibSp":1,"Parch":0,"Ticket":"PC 17483","Fare":221.7792,"Cabin":"C55 C57","Embarked":"S"},{"PassengerId":1007,"Pclass":3,"Name":"Chronopoulos, Mr. Demetrios","Sex":"male","Age":18,"SibSp":1,"Parch":0,"Ticket":"2680","Fare":14.4542,"Cabin":"","Embarked":"C"},{"PassengerId":1008,"Pclass":3,"Name":"Thomas, Mr. John","Sex":"male","Age":null,"SibSp":0,"Parch":0,"Ticket":"2681","Fare":6.4375,"Cabin":"","Embarked":"C"},{"PassengerId":1009,"Pclass":3,"Name":"Sandstrom, Miss. Beatrice Irene","Sex":"female","Age":1,"SibSp":1,"Parch":1,"Ticket":"PP 9549","Fare":16.7,"Cabin":"G6","Embarked":"S"},{"PassengerId":1010,"Pclass":1,"Name":"Beattie, Mr. Thomson","Sex":"male","Age":36,"SibSp":0,"Parch":0,"Ticket":"13050","Fare":75.2417,"Cabin":"C6","Embarked":"C"},{"PassengerId":1011,"Pclass":2,"Name":"Chapman, Mrs. John Henry (Sara Elizabeth Lawry)","Sex":"female","Age":29,"SibSp":1,"Parch":0,"Ticket":"SC/AH 29037","Fare":26,"Cabin":"","Embarked":"S"},{"PassengerId":1012,"Pclass":2,"Name":"Watt, Miss. Bertha J","Sex":"female","Age":12,"SibSp":0,"Parch":0,"Ticket":"C.A. 33595","Fare":15.75,"Cabin":"","Embarked":"S"},{"PassengerId":1013,"Pclass":3,"Name":"Kiernan, Mr. John","Sex":"male","Age":null,"SibSp":1,"Parch":0,"Ticket":"367227","Fare":7.75,"Cabin":"","Embarked":"Q"},{"PassengerId":1014,"Pclass":1,"Name":"Schabert, Mrs. Paul (Emma Mock)","Sex":"female","Age":35,"SibSp":1,"Parch":0,"Ticket":"13236","Fare":57.75,"Cabin":"C28","Embarked":"C"},{"PassengerId":1015,"Pclass":3,"Name":"Carver, Mr. Alfred John","Sex":"male","Age":28,"SibSp":0,"Parch":0,"Ticket":"392095","Fare":7.25,"Cabin":"","Embarked":"S"},{"PassengerId":1016,"Pclass":3,"Name":"Kennedy, Mr. John","Sex":"male","Age":null,"SibSp":0,"Parch":0,"Ticket":"368783","Fare":7.75,"Cabin":"","Embarked":"Q"},{"PassengerId":1017,"Pclass":3,"Name":"Cribb, Miss. Laura Alice","Sex":"female","Age":17,"SibSp":0,"Parch":1,"Ticket":"371362","Fare":16.1,"Cabin":"","Embarked":"S"},{"PassengerId":1018,"Pclass":3,"Name":"Brobeck, Mr. Karl Rudolf","Sex":"male","Age":22,"SibSp":0,"Parch":0,"Ticket":"350045","Fare":7.7958,"Cabin":"","Embarked":"S"},{"PassengerId":1019,"Pclass":3,"Name":"McCoy, Miss. Alicia","Sex":"female","Age":null,"SibSp":2,"Parch":0,"Ticket":"367226","Fare":23.25,"Cabin":"","Embarked":"Q"},{"PassengerId":1020,"Pclass":2,"Name":"Bowenur, Mr. Solomon","Sex":"male","Age":42,"SibSp":0,"Parch":0,"Ticket":"211535","Fare":13,"Cabin":"","Embarked":"S"},{"PassengerId":1021,"Pclass":3,"Name":"Petersen, Mr. Marius","Sex":"male","Age":24,"SibSp":0,"Parch":0,"Ticket":"342441","Fare":8.05,"Cabin":"","Embarked":"S"},{"PassengerId":1022,"Pclass":3,"Name":"Spinner, Mr. Henry John","Sex":"male","Age":32,"SibSp":0,"Parch":0,"Ticket":"STON/OQ. 369943","Fare":8.05,"Cabin":"","Embarked":"S"},{"PassengerId":1023,"Pclass":1,"Name":"Gracie, Col. Archibald IV","Sex":"male","Age":53,"SibSp":0,"Parch":0,"Ticket":"113780","Fare":28.5,"Cabin":"C51","Embarked":"C"},{"PassengerId":1024,"Pclass":3,"Name":"Lefebre, Mrs. Frank (Frances)","Sex":"female","Age":null,"SibSp":0,"Parch":4,"Ticket":"4133","Fare":25.4667,"Cabin":"","Embarked":"S"},{"PassengerId":1025,"Pclass":3,"Name":"Thomas, Mr. Charles P","Sex":"male","Age":null,"SibSp":1,"Parch":0,"Ticket":"2621","Fare":6.4375,"Cabin":"","Embarked":"C"},{"PassengerId":1026,"Pclass":3,"Name":"Dintcheff, Mr. Valtcho","Sex":"male","Age":43,"SibSp":0,"Parch":0,"Ticket":"349226","Fare":7.8958,"Cabin":"","Embarked":"S"},{"PassengerId":1027,"Pclass":3,"Name":"Carlsson, Mr. Carl Robert","Sex":"male","Age":24,"SibSp":0,"Parch":0,"Ticket":"350409","Fare":7.8542,"Cabin":"","Embarked":"S"},{"PassengerId":1028,"Pclass":3,"Name":"Zakarian, Mr. Mapriededer","Sex":"male","Age":26.5,"SibSp":0,"Parch":0,"Ticket":"2656","Fare":7.225,"Cabin":"","Embarked":"C"},{"PassengerId":1029,"Pclass":2,"Name":"Schmidt, Mr. August","Sex":"male","Age":26,"SibSp":0,"Parch":0,"Ticket":"248659","Fare":13,"Cabin":"","Embarked":"S"},{"PassengerId":1030,"Pclass":3,"Name":"Drapkin, Miss. Jennie","Sex":"female","Age":23,"SibSp":0,"Parch":0,"Ticket":"SOTON/OQ 392083","Fare":8.05,"Cabin":"","Embarked":"S"},{"PassengerId":1031,"Pclass":3,"Name":"Goodwin, Mr. Charles Frederick","Sex":"male","Age":40,"SibSp":1,"Parch":6,"Ticket":"CA 2144","Fare":46.9,"Cabin":"","Embarked":"S"},{"PassengerId":1032,"Pclass":3,"Name":"Goodwin, Miss. Jessie Allis","Sex":"female","Age":10,"SibSp":5,"Parch":2,"Ticket":"CA 2144","Fare":46.9,"Cabin":"","Embarked":"S"},{"PassengerId":1033,"Pclass":1,"Name":"Daniels, Miss. Sarah","Sex":"female","Age":33,"SibSp":0,"Parch":0,"Ticket":"113781","Fare":151.55,"Cabin":"","Embarked":"S"},{"PassengerId":1034,"Pclass":1,"Name":"Ryerson, Mr. Arthur Larned","Sex":"male","Age":61,"SibSp":1,"Parch":3,"Ticket":"PC 17608","Fare":262.375,"Cabin":"B57 B59 B63 B66","Embarked":"C"},{"PassengerId":1035,"Pclass":2,"Name":"Beauchamp, Mr. Henry James","Sex":"male","Age":28,"SibSp":0,"Parch":0,"Ticket":"244358","Fare":26,"Cabin":"","Embarked":"S"},{"PassengerId":1036,"Pclass":1,"Name":"Lindeberg-Lind, Mr. Erik Gustaf (Mr Edward Lingrey\")\"","Sex":"male","Age":42,"SibSp":0,"Parch":0,"Ticket":"17475","Fare":26.55,"Cabin":"","Embarked":"S"},{"PassengerId":1037,"Pclass":3,"Name":"Vander Planke, Mr. Julius","Sex":"male","Age":31,"SibSp":3,"Parch":0,"Ticket":"345763","Fare":18,"Cabin":"","Embarked":"S"},{"PassengerId":1038,"Pclass":1,"Name":"Hilliard, Mr. Herbert Henry","Sex":"male","Age":null,"SibSp":0,"Parch":0,"Ticket":"17463","Fare":51.8625,"Cabin":"E46","Embarked":"S"},{"PassengerId":1039,"Pclass":3,"Name":"Davies, Mr. Evan","Sex":"male","Age":22,"SibSp":0,"Parch":0,"Ticket":"SC/A4 23568","Fare":8.05,"Cabin":"","Embarked":"S"},{"PassengerId":1040,"Pclass":1,"Name":"Crafton, Mr. John Bertram","Sex":"male","Age":null,"SibSp":0,"Parch":0,"Ticket":"113791","Fare":26.55,"Cabin":"","Embarked":"S"},{"PassengerId":1041,"Pclass":2,"Name":"Lahtinen, Rev. William","Sex":"male","Age":30,"SibSp":1,"Parch":1,"Ticket":"250651","Fare":26,"Cabin":"","Embarked":"S"},{"PassengerId":1042,"Pclass":1,"Name":"Earnshaw, Mrs. Boulton (Olive Potter)","Sex":"female","Age":23,"SibSp":0,"Parch":1,"Ticket":"11767","Fare":83.1583,"Cabin":"C54","Embarked":"C"},{"PassengerId":1043,"Pclass":3,"Name":"Matinoff, Mr. Nicola","Sex":"male","Age":null,"SibSp":0,"Parch":0,"Ticket":"349255","Fare":7.8958,"Cabin":"","Embarked":"C"},{"PassengerId":1044,"Pclass":3,"Name":"Storey, Mr. Thomas","Sex":"male","Age":60.5,"SibSp":0,"Parch":0,"Ticket":"3701","Fare":null,"Cabin":"","Embarked":"S"},{"PassengerId":1045,"Pclass":3,"Name":"Klasen, Mrs. (Hulda Kristina Eugenia Lofqvist)","Sex":"female","Age":36,"SibSp":0,"Parch":2,"Ticket":"350405","Fare":12.1833,"Cabin":"","Embarked":"S"},{"PassengerId":1046,"Pclass":3,"Name":"Asplund, Master. Filip Oscar","Sex":"male","Age":13,"SibSp":4,"Parch":2,"Ticket":"347077","Fare":31.3875,"Cabin":"","Embarked":"S"},{"PassengerId":1047,"Pclass":3,"Name":"Duquemin, Mr. Joseph","Sex":"male","Age":24,"SibSp":0,"Parch":0,"Ticket":"S.O./P.P. 752","Fare":7.55,"Cabin":"","Embarked":"S"},{"PassengerId":1048,"Pclass":1,"Name":"Bird, Miss. Ellen","Sex":"female","Age":29,"SibSp":0,"Parch":0,"Ticket":"PC 17483","Fare":221.7792,"Cabin":"C97","Embarked":"S"},{"PassengerId":1049,"Pclass":3,"Name":"Lundin, Miss. Olga Elida","Sex":"female","Age":23,"SibSp":0,"Parch":0,"Ticket":"347469","Fare":7.8542,"Cabin":"","Embarked":"S"},{"PassengerId":1050,"Pclass":1,"Name":"Borebank, Mr. John James","Sex":"male","Age":42,"SibSp":0,"Parch":0,"Ticket":"110489","Fare":26.55,"Cabin":"D22","Embarked":"S"},{"PassengerId":1051,"Pclass":3,"Name":"Peacock, Mrs. Benjamin (Edith Nile)","Sex":"female","Age":26,"SibSp":0,"Parch":2,"Ticket":"SOTON/O.Q. 3101315","Fare":13.775,"Cabin":"","Embarked":"S"},{"PassengerId":1052,"Pclass":3,"Name":"Smyth, Miss. Julia","Sex":"female","Age":null,"SibSp":0,"Parch":0,"Ticket":"335432","Fare":7.7333,"Cabin":"","Embarked":"Q"},{"PassengerId":1053,"Pclass":3,"Name":"Touma, Master. Georges Youssef","Sex":"male","Age":7,"SibSp":1,"Parch":1,"Ticket":"2650","Fare":15.2458,"Cabin":"","Embarked":"C"},{"PassengerId":1054,"Pclass":2,"Name":"Wright, Miss. Marion","Sex":"female","Age":26,"SibSp":0,"Parch":0,"Ticket":"220844","Fare":13.5,"Cabin":"","Embarked":"S"},{"PassengerId":1055,"Pclass":3,"Name":"Pearce, Mr. Ernest","Sex":"male","Age":null,"SibSp":0,"Parch":0,"Ticket":"343271","Fare":7,"Cabin":"","Embarked":"S"},{"PassengerId":1056,"Pclass":2,"Name":"Peruschitz, Rev. Joseph Maria","Sex":"male","Age":41,"SibSp":0,"Parch":0,"Ticket":"237393","Fare":13,"Cabin":"","Embarked":"S"},{"PassengerId":1057,"Pclass":3,"Name":"Kink-Heilmann, Mrs. Anton (Luise Heilmann)","Sex":"female","Age":26,"SibSp":1,"Parch":1,"Ticket":"315153","Fare":22.025,"Cabin":"","Embarked":"S"},{"PassengerId":1058,"Pclass":1,"Name":"Brandeis, Mr. Emil","Sex":"male","Age":48,"SibSp":0,"Parch":0,"Ticket":"PC 17591","Fare":50.4958,"Cabin":"B10","Embarked":"C"},{"PassengerId":1059,"Pclass":3,"Name":"Ford, Mr. Edward Watson","Sex":"male","Age":18,"SibSp":2,"Parch":2,"Ticket":"W./C. 6608","Fare":34.375,"Cabin":"","Embarked":"S"},{"PassengerId":1060,"Pclass":1,"Name":"Cassebeer, Mrs. Henry Arthur Jr (Eleanor Genevieve Fosdick)","Sex":"female","Age":null,"SibSp":0,"Parch":0,"Ticket":"17770","Fare":27.7208,"Cabin":"","Embarked":"C"},{"PassengerId":1061,"Pclass":3,"Name":"Hellstrom, Miss. Hilda Maria","Sex":"female","Age":22,"SibSp":0,"Parch":0,"Ticket":"7548","Fare":8.9625,"Cabin":"","Embarked":"S"},{"PassengerId":1062,"Pclass":3,"Name":"Lithman, Mr. Simon","Sex":"male","Age":null,"SibSp":0,"Parch":0,"Ticket":"S.O./P.P. 251","Fare":7.55,"Cabin":"","Embarked":"S"},{"PassengerId":1063,"Pclass":3,"Name":"Zakarian, Mr. Ortin","Sex":"male","Age":27,"SibSp":0,"Parch":0,"Ticket":"2670","Fare":7.225,"Cabin":"","Embarked":"C"},{"PassengerId":1064,"Pclass":3,"Name":"Dyker, Mr. Adolf Fredrik","Sex":"male","Age":23,"SibSp":1,"Parch":0,"Ticket":"347072","Fare":13.9,"Cabin":"","Embarked":"S"},{"PassengerId":1065,"Pclass":3,"Name":"Torfa, Mr. Assad","Sex":"male","Age":null,"SibSp":0,"Parch":0,"Ticket":"2673","Fare":7.2292,"Cabin":"","Embarked":"C"},{"PassengerId":1066,"Pclass":3,"Name":"Asplund, Mr. Carl Oscar Vilhelm Gustafsson","Sex":"male","Age":40,"SibSp":1,"Parch":5,"Ticket":"347077","Fare":31.3875,"Cabin":"","Embarked":"S"},{"PassengerId":1067,"Pclass":2,"Name":"Brown, Miss. Edith Eileen","Sex":"female","Age":15,"SibSp":0,"Parch":2,"Ticket":"29750","Fare":39,"Cabin":"","Embarked":"S"},{"PassengerId":1068,"Pclass":2,"Name":"Sincock, Miss. Maude","Sex":"female","Age":20,"SibSp":0,"Parch":0,"Ticket":"C.A. 33112","Fare":36.75,"Cabin":"","Embarked":"S"},{"PassengerId":1069,"Pclass":1,"Name":"Stengel, Mr. Charles Emil Henry","Sex":"male","Age":54,"SibSp":1,"Parch":0,"Ticket":"11778","Fare":55.4417,"Cabin":"C116","Embarked":"C"},{"PassengerId":1070,"Pclass":2,"Name":"Becker, Mrs. Allen Oliver (Nellie E Baumgardner)","Sex":"female","Age":36,"SibSp":0,"Parch":3,"Ticket":"230136","Fare":39,"Cabin":"F4","Embarked":"S"},{"PassengerId":1071,"Pclass":1,"Name":"Compton, Mrs. Alexander Taylor (Mary Eliza Ingersoll)","Sex":"female","Age":64,"SibSp":0,"Parch":2,"Ticket":"PC 17756","Fare":83.1583,"Cabin":"E45","Embarked":"C"},{"PassengerId":1072,"Pclass":2,"Name":"McCrie, Mr. James Matthew","Sex":"male","Age":30,"SibSp":0,"Parch":0,"Ticket":"233478","Fare":13,"Cabin":"","Embarked":"S"},{"PassengerId":1073,"Pclass":1,"Name":"Compton, Mr. Alexander Taylor Jr","Sex":"male","Age":37,"SibSp":1,"Parch":1,"Ticket":"PC 17756","Fare":83.1583,"Cabin":"E52","Embarked":"C"},{"PassengerId":1074,"Pclass":1,"Name":"Marvin, Mrs. Daniel Warner (Mary Graham Carmichael Farquarson)","Sex":"female","Age":18,"SibSp":1,"Parch":0,"Ticket":"113773","Fare":53.1,"Cabin":"D30","Embarked":"S"},{"PassengerId":1075,"Pclass":3,"Name":"Lane, Mr. Patrick","Sex":"male","Age":null,"SibSp":0,"Parch":0,"Ticket":"7935","Fare":7.75,"Cabin":"","Embarked":"Q"},{"PassengerId":1076,"Pclass":1,"Name":"Douglas, Mrs. Frederick Charles (Mary Helene Baxter)","Sex":"female","Age":27,"SibSp":1,"Parch":1,"Ticket":"PC 17558","Fare":247.5208,"Cabin":"B58 B60","Embarked":"C"},{"PassengerId":1077,"Pclass":2,"Name":"Maybery, Mr. Frank Hubert","Sex":"male","Age":40,"SibSp":0,"Parch":0,"Ticket":"239059","Fare":16,"Cabin":"","Embarked":"S"},{"PassengerId":1078,"Pclass":2,"Name":"Phillips, Miss. Alice Frances Louisa","Sex":"female","Age":21,"SibSp":0,"Parch":1,"Ticket":"S.O./P.P. 2","Fare":21,"Cabin":"","Embarked":"S"},{"PassengerId":1079,"Pclass":3,"Name":"Davies, Mr. Joseph","Sex":"male","Age":17,"SibSp":2,"Parch":0,"Ticket":"A/4 48873","Fare":8.05,"Cabin":"","Embarked":"S"},{"PassengerId":1080,"Pclass":3,"Name":"Sage, Miss. Ada","Sex":"female","Age":null,"SibSp":8,"Parch":2,"Ticket":"CA. 2343","Fare":69.55,"Cabin":"","Embarked":"S"},{"PassengerId":1081,"Pclass":2,"Name":"Veal, Mr. James","Sex":"male","Age":40,"SibSp":0,"Parch":0,"Ticket":"28221","Fare":13,"Cabin":"","Embarked":"S"},{"PassengerId":1082,"Pclass":2,"Name":"Angle, Mr. William A","Sex":"male","Age":34,"SibSp":1,"Parch":0,"Ticket":"226875","Fare":26,"Cabin":"","Embarked":"S"},{"PassengerId":1083,"Pclass":1,"Name":"Salomon, Mr. Abraham L","Sex":"male","Age":null,"SibSp":0,"Parch":0,"Ticket":"111163","Fare":26,"Cabin":"","Embarked":"S"},{"PassengerId":1084,"Pclass":3,"Name":"van Billiard, Master. Walter John","Sex":"male","Age":11.5,"SibSp":1,"Parch":1,"Ticket":"A/5. 851","Fare":14.5,"Cabin":"","Embarked":"S"},{"PassengerId":1085,"Pclass":2,"Name":"Lingane, Mr. John","Sex":"male","Age":61,"SibSp":0,"Parch":0,"Ticket":"235509","Fare":12.35,"Cabin":"","Embarked":"Q"},{"PassengerId":1086,"Pclass":2,"Name":"Drew, Master. Marshall Brines","Sex":"male","Age":8,"SibSp":0,"Parch":2,"Ticket":"28220","Fare":32.5,"Cabin":"","Embarked":"S"},{"PassengerId":1087,"Pclass":3,"Name":"Karlsson, Mr. Julius Konrad Eugen","Sex":"male","Age":33,"SibSp":0,"Parch":0,"Ticket":"347465","Fare":7.8542,"Cabin":"","Embarked":"S"},{"PassengerId":1088,"Pclass":1,"Name":"Spedden, Master. Robert Douglas","Sex":"male","Age":6,"SibSp":0,"Parch":2,"Ticket":"16966","Fare":134.5,"Cabin":"E34","Embarked":"C"},{"PassengerId":1089,"Pclass":3,"Name":"Nilsson, Miss. Berta Olivia","Sex":"female","Age":18,"SibSp":0,"Parch":0,"Ticket":"347066","Fare":7.775,"Cabin":"","Embarked":"S"},{"PassengerId":1090,"Pclass":2,"Name":"Baimbrigge, Mr. Charles Robert","Sex":"male","Age":23,"SibSp":0,"Parch":0,"Ticket":"C.A. 31030","Fare":10.5,"Cabin":"","Embarked":"S"},{"PassengerId":1091,"Pclass":3,"Name":"Rasmussen, Mrs. (Lena Jacobsen Solvang)","Sex":"female","Age":null,"SibSp":0,"Parch":0,"Ticket":"65305","Fare":8.1125,"Cabin":"","Embarked":"S"},{"PassengerId":1092,"Pclass":3,"Name":"Murphy, Miss. Nora","Sex":"female","Age":null,"SibSp":0,"Parch":0,"Ticket":"36568","Fare":15.5,"Cabin":"","Embarked":"Q"},{"PassengerId":1093,"Pclass":3,"Name":"Danbom, Master. Gilbert Sigvard Emanuel","Sex":"male","Age":0.33,"SibSp":0,"Parch":2,"Ticket":"347080","Fare":14.4,"Cabin":"","Embarked":"S"},{"PassengerId":1094,"Pclass":1,"Name":"Astor, Col. John Jacob","Sex":"male","Age":47,"SibSp":1,"Parch":0,"Ticket":"PC 17757","Fare":227.525,"Cabin":"C62 C64","Embarked":"C"},{"PassengerId":1095,"Pclass":2,"Name":"Quick, Miss. Winifred Vera","Sex":"female","Age":8,"SibSp":1,"Parch":1,"Ticket":"26360","Fare":26,"Cabin":"","Embarked":"S"},{"PassengerId":1096,"Pclass":2,"Name":"Andrew, Mr. Frank Thomas","Sex":"male","Age":25,"SibSp":0,"Parch":0,"Ticket":"C.A. 34050","Fare":10.5,"Cabin":"","Embarked":"S"},{"PassengerId":1097,"Pclass":1,"Name":"Omont, Mr. Alfred Fernand","Sex":"male","Age":null,"SibSp":0,"Parch":0,"Ticket":"F.C. 12998","Fare":25.7417,"Cabin":"","Embarked":"C"},{"PassengerId":1098,"Pclass":3,"Name":"McGowan, Miss. Katherine","Sex":"female","Age":35,"SibSp":0,"Parch":0,"Ticket":"9232","Fare":7.75,"Cabin":"","Embarked":"Q"},{"PassengerId":1099,"Pclass":2,"Name":"Collett, Mr. Sidney C Stuart","Sex":"male","Age":24,"SibSp":0,"Parch":0,"Ticket":"28034","Fare":10.5,"Cabin":"","Embarked":"S"},{"PassengerId":1100,"Pclass":1,"Name":"Rosenbaum, Miss. Edith Louise","Sex":"female","Age":33,"SibSp":0,"Parch":0,"Ticket":"PC 17613","Fare":27.7208,"Cabin":"A11","Embarked":"C"},{"PassengerId":1101,"Pclass":3,"Name":"Delalic, Mr. Redjo","Sex":"male","Age":25,"SibSp":0,"Parch":0,"Ticket":"349250","Fare":7.8958,"Cabin":"","Embarked":"S"},{"PassengerId":1102,"Pclass":3,"Name":"Andersen, Mr. Albert Karvin","Sex":"male","Age":32,"SibSp":0,"Parch":0,"Ticket":"C 4001","Fare":22.525,"Cabin":"","Embarked":"S"},{"PassengerId":1103,"Pclass":3,"Name":"Finoli, Mr. Luigi","Sex":"male","Age":null,"SibSp":0,"Parch":0,"Ticket":"SOTON/O.Q. 3101308","Fare":7.05,"Cabin":"","Embarked":"S"},{"PassengerId":1104,"Pclass":2,"Name":"Deacon, Mr. Percy William","Sex":"male","Age":17,"SibSp":0,"Parch":0,"Ticket":"S.O.C. 14879","Fare":73.5,"Cabin":"","Embarked":"S"},{"PassengerId":1105,"Pclass":2,"Name":"Howard, Mrs. Benjamin (Ellen Truelove Arman)","Sex":"female","Age":60,"SibSp":1,"Parch":0,"Ticket":"24065","Fare":26,"Cabin":"","Embarked":"S"},{"PassengerId":1106,"Pclass":3,"Name":"Andersson, Miss. Ida Augusta Margareta","Sex":"female","Age":38,"SibSp":4,"Parch":2,"Ticket":"347091","Fare":7.775,"Cabin":"","Embarked":"S"},{"PassengerId":1107,"Pclass":1,"Name":"Head, Mr. Christopher","Sex":"male","Age":42,"SibSp":0,"Parch":0,"Ticket":"113038","Fare":42.5,"Cabin":"B11","Embarked":"S"},{"PassengerId":1108,"Pclass":3,"Name":"Mahon, Miss. Bridget Delia","Sex":"female","Age":null,"SibSp":0,"Parch":0,"Ticket":"330924","Fare":7.8792,"Cabin":"","Embarked":"Q"},{"PassengerId":1109,"Pclass":1,"Name":"Wick, Mr. George Dennick","Sex":"male","Age":57,"SibSp":1,"Parch":1,"Ticket":"36928","Fare":164.8667,"Cabin":"","Embarked":"S"},{"PassengerId":1110,"Pclass":1,"Name":"Widener, Mrs. George Dunton (Eleanor Elkins)","Sex":"female","Age":50,"SibSp":1,"Parch":1,"Ticket":"113503","Fare":211.5,"Cabin":"C80","Embarked":"C"},{"PassengerId":1111,"Pclass":3,"Name":"Thomson, Mr. Alexander Morrison","Sex":"male","Age":null,"SibSp":0,"Parch":0,"Ticket":"32302","Fare":8.05,"Cabin":"","Embarked":"S"},{"PassengerId":1112,"Pclass":2,"Name":"Duran y More, Miss. Florentina","Sex":"female","Age":30,"SibSp":1,"Parch":0,"Ticket":"SC/PARIS 2148","Fare":13.8583,"Cabin":"","Embarked":"C"},{"PassengerId":1113,"Pclass":3,"Name":"Reynolds, Mr. Harold J","Sex":"male","Age":21,"SibSp":0,"Parch":0,"Ticket":"342684","Fare":8.05,"Cabin":"","Embarked":"S"},{"PassengerId":1114,"Pclass":2,"Name":"Cook, Mrs. (Selena Rogers)","Sex":"female","Age":22,"SibSp":0,"Parch":0,"Ticket":"W./C. 14266","Fare":10.5,"Cabin":"F33","Embarked":"S"},{"PassengerId":1115,"Pclass":3,"Name":"Karlsson, Mr. Einar Gervasius","Sex":"male","Age":21,"SibSp":0,"Parch":0,"Ticket":"350053","Fare":7.7958,"Cabin":"","Embarked":"S"},{"PassengerId":1116,"Pclass":1,"Name":"Candee, Mrs. Edward (Helen Churchill Hungerford)","Sex":"female","Age":53,"SibSp":0,"Parch":0,"Ticket":"PC 17606","Fare":27.4458,"Cabin":"","Embarked":"C"},{"PassengerId":1117,"Pclass":3,"Name":"Moubarek, Mrs. George (Omine Amenia\" Alexander)\"","Sex":"female","Age":null,"SibSp":0,"Parch":2,"Ticket":"2661","Fare":15.2458,"Cabin":"","Embarked":"C"},{"PassengerId":1118,"Pclass":3,"Name":"Asplund, Mr. Johan Charles","Sex":"male","Age":23,"SibSp":0,"Parch":0,"Ticket":"350054","Fare":7.7958,"Cabin":"","Embarked":"S"},{"PassengerId":1119,"Pclass":3,"Name":"McNeill, Miss. Bridget","Sex":"female","Age":null,"SibSp":0,"Parch":0,"Ticket":"370368","Fare":7.75,"Cabin":"","Embarked":"Q"},{"PassengerId":1120,"Pclass":3,"Name":"Everett, Mr. Thomas James","Sex":"male","Age":40.5,"SibSp":0,"Parch":0,"Ticket":"C.A. 6212","Fare":15.1,"Cabin":"","Embarked":"S"},{"PassengerId":1121,"Pclass":2,"Name":"Hocking, Mr. Samuel James Metcalfe","Sex":"male","Age":36,"SibSp":0,"Parch":0,"Ticket":"242963","Fare":13,"Cabin":"","Embarked":"S"},{"PassengerId":1122,"Pclass":2,"Name":"Sweet, Mr. George Frederick","Sex":"male","Age":14,"SibSp":0,"Parch":0,"Ticket":"220845","Fare":65,"Cabin":"","Embarked":"S"},{"PassengerId":1123,"Pclass":1,"Name":"Willard, Miss. Constance","Sex":"female","Age":21,"SibSp":0,"Parch":0,"Ticket":"113795","Fare":26.55,"Cabin":"","Embarked":"S"},{"PassengerId":1124,"Pclass":3,"Name":"Wiklund, Mr. Karl Johan","Sex":"male","Age":21,"SibSp":1,"Parch":0,"Ticket":"3101266","Fare":6.4958,"Cabin":"","Embarked":"S"},{"PassengerId":1125,"Pclass":3,"Name":"Linehan, Mr. Michael","Sex":"male","Age":null,"SibSp":0,"Parch":0,"Ticket":"330971","Fare":7.8792,"Cabin":"","Embarked":"Q"},{"PassengerId":1126,"Pclass":1,"Name":"Cumings, Mr. John Bradley","Sex":"male","Age":39,"SibSp":1,"Parch":0,"Ticket":"PC 17599","Fare":71.2833,"Cabin":"C85","Embarked":"C"},{"PassengerId":1127,"Pclass":3,"Name":"Vendel, Mr. Olof Edvin","Sex":"male","Age":20,"SibSp":0,"Parch":0,"Ticket":"350416","Fare":7.8542,"Cabin":"","Embarked":"S"},{"PassengerId":1128,"Pclass":1,"Name":"Warren, Mr. Frank Manley","Sex":"male","Age":64,"SibSp":1,"Parch":0,"Ticket":"110813","Fare":75.25,"Cabin":"D37","Embarked":"C"},{"PassengerId":1129,"Pclass":3,"Name":"Baccos, Mr. Raffull","Sex":"male","Age":20,"SibSp":0,"Parch":0,"Ticket":"2679","Fare":7.225,"Cabin":"","Embarked":"C"},{"PassengerId":1130,"Pclass":2,"Name":"Hiltunen, Miss. Marta","Sex":"female","Age":18,"SibSp":1,"Parch":1,"Ticket":"250650","Fare":13,"Cabin":"","Embarked":"S"},{"PassengerId":1131,"Pclass":1,"Name":"Douglas, Mrs. Walter Donald (Mahala Dutton)","Sex":"female","Age":48,"SibSp":1,"Parch":0,"Ticket":"PC 17761","Fare":106.425,"Cabin":"C86","Embarked":"C"},{"PassengerId":1132,"Pclass":1,"Name":"Lindstrom, Mrs. Carl Johan (Sigrid Posse)","Sex":"female","Age":55,"SibSp":0,"Parch":0,"Ticket":"112377","Fare":27.7208,"Cabin":"","Embarked":"C"},{"PassengerId":1133,"Pclass":2,"Name":"Christy, Mrs. (Alice Frances)","Sex":"female","Age":45,"SibSp":0,"Parch":2,"Ticket":"237789","Fare":30,"Cabin":"","Embarked":"S"},{"PassengerId":1134,"Pclass":1,"Name":"Spedden, Mr. Frederic Oakley","Sex":"male","Age":45,"SibSp":1,"Parch":1,"Ticket":"16966","Fare":134.5,"Cabin":"E34","Embarked":"C"},{"PassengerId":1135,"Pclass":3,"Name":"Hyman, Mr. Abraham","Sex":"male","Age":null,"SibSp":0,"Parch":0,"Ticket":"3470","Fare":7.8875,"Cabin":"","Embarked":"S"},{"PassengerId":1136,"Pclass":3,"Name":"Johnston, Master. William Arthur Willie\"\"","Sex":"male","Age":null,"SibSp":1,"Parch":2,"Ticket":"W./C. 6607","Fare":23.45,"Cabin":"","Embarked":"S"},{"PassengerId":1137,"Pclass":1,"Name":"Kenyon, Mr. Frederick R","Sex":"male","Age":41,"SibSp":1,"Parch":0,"Ticket":"17464","Fare":51.8625,"Cabin":"D21","Embarked":"S"},{"PassengerId":1138,"Pclass":2,"Name":"Karnes, Mrs. J Frank (Claire Bennett)","Sex":"female","Age":22,"SibSp":0,"Parch":0,"Ticket":"F.C.C. 13534","Fare":21,"Cabin":"","Embarked":"S"},{"PassengerId":1139,"Pclass":2,"Name":"Drew, Mr. James Vivian","Sex":"male","Age":42,"SibSp":1,"Parch":1,"Ticket":"28220","Fare":32.5,"Cabin":"","Embarked":"S"},{"PassengerId":1140,"Pclass":2,"Name":"Hold, Mrs. Stephen (Annie Margaret Hill)","Sex":"female","Age":29,"SibSp":1,"Parch":0,"Ticket":"26707","Fare":26,"Cabin":"","Embarked":"S"},{"PassengerId":1141,"Pclass":3,"Name":"Khalil, Mrs. Betros (Zahie Maria\" Elias)\"","Sex":"female","Age":null,"SibSp":1,"Parch":0,"Ticket":"2660","Fare":14.4542,"Cabin":"","Embarked":"C"},{"PassengerId":1142,"Pclass":2,"Name":"West, Miss. Barbara J","Sex":"female","Age":0.92,"SibSp":1,"Parch":2,"Ticket":"C.A. 34651","Fare":27.75,"Cabin":"","Embarked":"S"},{"PassengerId":1143,"Pclass":3,"Name":"Abrahamsson, Mr. Abraham August Johannes","Sex":"male","Age":20,"SibSp":0,"Parch":0,"Ticket":"SOTON/O2 3101284","Fare":7.925,"Cabin":"","Embarked":"S"},{"PassengerId":1144,"Pclass":1,"Name":"Clark, Mr. Walter Miller","Sex":"male","Age":27,"SibSp":1,"Parch":0,"Ticket":"13508","Fare":136.7792,"Cabin":"C89","Embarked":"C"},{"PassengerId":1145,"Pclass":3,"Name":"Salander, Mr. Karl Johan","Sex":"male","Age":24,"SibSp":0,"Parch":0,"Ticket":"7266","Fare":9.325,"Cabin":"","Embarked":"S"},{"PassengerId":1146,"Pclass":3,"Name":"Wenzel, Mr. Linhart","Sex":"male","Age":32.5,"SibSp":0,"Parch":0,"Ticket":"345775","Fare":9.5,"Cabin":"","Embarked":"S"},{"PassengerId":1147,"Pclass":3,"Name":"MacKay, Mr. George William","Sex":"male","Age":null,"SibSp":0,"Parch":0,"Ticket":"C.A. 42795","Fare":7.55,"Cabin":"","Embarked":"S"},{"PassengerId":1148,"Pclass":3,"Name":"Mahon, Mr. John","Sex":"male","Age":null,"SibSp":0,"Parch":0,"Ticket":"AQ/4 3130","Fare":7.75,"Cabin":"","Embarked":"Q"},{"PassengerId":1149,"Pclass":3,"Name":"Niklasson, Mr. Samuel","Sex":"male","Age":28,"SibSp":0,"Parch":0,"Ticket":"363611","Fare":8.05,"Cabin":"","Embarked":"S"},{"PassengerId":1150,"Pclass":2,"Name":"Bentham, Miss. Lilian W","Sex":"female","Age":19,"SibSp":0,"Parch":0,"Ticket":"28404","Fare":13,"Cabin":"","Embarked":"S"},{"PassengerId":1151,"Pclass":3,"Name":"Midtsjo, Mr. Karl Albert","Sex":"male","Age":21,"SibSp":0,"Parch":0,"Ticket":"345501","Fare":7.775,"Cabin":"","Embarked":"S"},{"PassengerId":1152,"Pclass":3,"Name":"de Messemaeker, Mr. Guillaume Joseph","Sex":"male","Age":36.5,"SibSp":1,"Parch":0,"Ticket":"345572","Fare":17.4,"Cabin":"","Embarked":"S"},{"PassengerId":1153,"Pclass":3,"Name":"Nilsson, Mr. August Ferdinand","Sex":"male","Age":21,"SibSp":0,"Parch":0,"Ticket":"350410","Fare":7.8542,"Cabin":"","Embarked":"S"},{"PassengerId":1154,"Pclass":2,"Name":"Wells, Mrs. Arthur Henry (Addie\" Dart Trevaskis)\"","Sex":"female","Age":29,"SibSp":0,"Parch":2,"Ticket":"29103","Fare":23,"Cabin":"","Embarked":"S"},{"PassengerId":1155,"Pclass":3,"Name":"Klasen, Miss. Gertrud Emilia","Sex":"female","Age":1,"SibSp":1,"Parch":1,"Ticket":"350405","Fare":12.1833,"Cabin":"","Embarked":"S"},{"PassengerId":1156,"Pclass":2,"Name":"Portaluppi, Mr. Emilio Ilario Giuseppe","Sex":"male","Age":30,"SibSp":0,"Parch":0,"Ticket":"C.A. 34644","Fare":12.7375,"Cabin":"","Embarked":"C"},{"PassengerId":1157,"Pclass":3,"Name":"Lyntakoff, Mr. Stanko","Sex":"male","Age":null,"SibSp":0,"Parch":0,"Ticket":"349235","Fare":7.8958,"Cabin":"","Embarked":"S"},{"PassengerId":1158,"Pclass":1,"Name":"Chisholm, Mr. Roderick Robert Crispin","Sex":"male","Age":null,"SibSp":0,"Parch":0,"Ticket":"112051","Fare":0,"Cabin":"","Embarked":"S"},{"PassengerId":1159,"Pclass":3,"Name":"Warren, Mr. Charles William","Sex":"male","Age":null,"SibSp":0,"Parch":0,"Ticket":"C.A. 49867","Fare":7.55,"Cabin":"","Embarked":"S"},{"PassengerId":1160,"Pclass":3,"Name":"Howard, Miss. May Elizabeth","Sex":"female","Age":null,"SibSp":0,"Parch":0,"Ticket":"A. 2. 39186","Fare":8.05,"Cabin":"","Embarked":"S"},{"PassengerId":1161,"Pclass":3,"Name":"Pokrnic, Mr. Mate","Sex":"male","Age":17,"SibSp":0,"Parch":0,"Ticket":"315095","Fare":8.6625,"Cabin":"","Embarked":"S"},{"PassengerId":1162,"Pclass":1,"Name":"McCaffry, Mr. Thomas Francis","Sex":"male","Age":46,"SibSp":0,"Parch":0,"Ticket":"13050","Fare":75.2417,"Cabin":"C6","Embarked":"C"},{"PassengerId":1163,"Pclass":3,"Name":"Fox, Mr. Patrick","Sex":"male","Age":null,"SibSp":0,"Parch":0,"Ticket":"368573","Fare":7.75,"Cabin":"","Embarked":"Q"},{"PassengerId":1164,"Pclass":1,"Name":"Clark, Mrs. Walter Miller (Virginia McDowell)","Sex":"female","Age":26,"SibSp":1,"Parch":0,"Ticket":"13508","Fare":136.7792,"Cabin":"C89","Embarked":"C"},{"PassengerId":1165,"Pclass":3,"Name":"Lennon, Miss. Mary","Sex":"female","Age":null,"SibSp":1,"Parch":0,"Ticket":"370371","Fare":15.5,"Cabin":"","Embarked":"Q"},{"PassengerId":1166,"Pclass":3,"Name":"Saade, Mr. Jean Nassr","Sex":"male","Age":null,"SibSp":0,"Parch":0,"Ticket":"2676","Fare":7.225,"Cabin":"","Embarked":"C"},{"PassengerId":1167,"Pclass":2,"Name":"Bryhl, Miss. Dagmar Jenny Ingeborg ","Sex":"female","Age":20,"SibSp":1,"Parch":0,"Ticket":"236853","Fare":26,"Cabin":"","Embarked":"S"},{"PassengerId":1168,"Pclass":2,"Name":"Parker, Mr. Clifford Richard","Sex":"male","Age":28,"SibSp":0,"Parch":0,"Ticket":"SC 14888","Fare":10.5,"Cabin":"","Embarked":"S"},{"PassengerId":1169,"Pclass":2,"Name":"Faunthorpe, Mr. Harry","Sex":"male","Age":40,"SibSp":1,"Parch":0,"Ticket":"2926","Fare":26,"Cabin":"","Embarked":"S"},{"PassengerId":1170,"Pclass":2,"Name":"Ware, Mr. John James","Sex":"male","Age":30,"SibSp":1,"Parch":0,"Ticket":"CA 31352","Fare":21,"Cabin":"","Embarked":"S"},{"PassengerId":1171,"Pclass":2,"Name":"Oxenham, Mr. Percy Thomas","Sex":"male","Age":22,"SibSp":0,"Parch":0,"Ticket":"W./C. 14260","Fare":10.5,"Cabin":"","Embarked":"S"},{"PassengerId":1172,"Pclass":3,"Name":"Oreskovic, Miss. Jelka","Sex":"female","Age":23,"SibSp":0,"Parch":0,"Ticket":"315085","Fare":8.6625,"Cabin":"","Embarked":"S"},{"PassengerId":1173,"Pclass":3,"Name":"Peacock, Master. Alfred Edward","Sex":"male","Age":0.75,"SibSp":1,"Parch":1,"Ticket":"SOTON/O.Q. 3101315","Fare":13.775,"Cabin":"","Embarked":"S"},{"PassengerId":1174,"Pclass":3,"Name":"Fleming, Miss. Honora","Sex":"female","Age":null,"SibSp":0,"Parch":0,"Ticket":"364859","Fare":7.75,"Cabin":"","Embarked":"Q"},{"PassengerId":1175,"Pclass":3,"Name":"Touma, Miss. Maria Youssef","Sex":"female","Age":9,"SibSp":1,"Parch":1,"Ticket":"2650","Fare":15.2458,"Cabin":"","Embarked":"C"},{"PassengerId":1176,"Pclass":3,"Name":"Rosblom, Miss. Salli Helena","Sex":"female","Age":2,"SibSp":1,"Parch":1,"Ticket":"370129","Fare":20.2125,"Cabin":"","Embarked":"S"},{"PassengerId":1177,"Pclass":3,"Name":"Dennis, Mr. William","Sex":"male","Age":36,"SibSp":0,"Parch":0,"Ticket":"A/5 21175","Fare":7.25,"Cabin":"","Embarked":"S"},{"PassengerId":1178,"Pclass":3,"Name":"Franklin, Mr. Charles (Charles Fardon)","Sex":"male","Age":null,"SibSp":0,"Parch":0,"Ticket":"SOTON/O.Q. 3101314","Fare":7.25,"Cabin":"","Embarked":"S"},{"PassengerId":1179,"Pclass":1,"Name":"Snyder, Mr. John Pillsbury","Sex":"male","Age":24,"SibSp":1,"Parch":0,"Ticket":"21228","Fare":82.2667,"Cabin":"B45","Embarked":"S"},{"PassengerId":1180,"Pclass":3,"Name":"Mardirosian, Mr. Sarkis","Sex":"male","Age":null,"SibSp":0,"Parch":0,"Ticket":"2655","Fare":7.2292,"Cabin":"F E46","Embarked":"C"},{"PassengerId":1181,"Pclass":3,"Name":"Ford, Mr. Arthur","Sex":"male","Age":null,"SibSp":0,"Parch":0,"Ticket":"A/5 1478","Fare":8.05,"Cabin":"","Embarked":"S"},{"PassengerId":1182,"Pclass":1,"Name":"Rheims, Mr. George Alexander Lucien","Sex":"male","Age":null,"SibSp":0,"Parch":0,"Ticket":"PC 17607","Fare":39.6,"Cabin":"","Embarked":"S"},{"PassengerId":1183,"Pclass":3,"Name":"Daly, Miss. Margaret Marcella Maggie\"\"","Sex":"female","Age":30,"SibSp":0,"Parch":0,"Ticket":"382650","Fare":6.95,"Cabin":"","Embarked":"Q"},{"PassengerId":1184,"Pclass":3,"Name":"Nasr, Mr. Mustafa","Sex":"male","Age":null,"SibSp":0,"Parch":0,"Ticket":"2652","Fare":7.2292,"Cabin":"","Embarked":"C"},{"PassengerId":1185,"Pclass":1,"Name":"Dodge, Dr. Washington","Sex":"male","Age":53,"SibSp":1,"Parch":1,"Ticket":"33638","Fare":81.8583,"Cabin":"A34","Embarked":"S"},{"PassengerId":1186,"Pclass":3,"Name":"Wittevrongel, Mr. Camille","Sex":"male","Age":36,"SibSp":0,"Parch":0,"Ticket":"345771","Fare":9.5,"Cabin":"","Embarked":"S"},{"PassengerId":1187,"Pclass":3,"Name":"Angheloff, Mr. Minko","Sex":"male","Age":26,"SibSp":0,"Parch":0,"Ticket":"349202","Fare":7.8958,"Cabin":"","Embarked":"S"},{"PassengerId":1188,"Pclass":2,"Name":"Laroche, Miss. Louise","Sex":"female","Age":1,"SibSp":1,"Parch":2,"Ticket":"SC/Paris 2123","Fare":41.5792,"Cabin":"","Embarked":"C"},{"PassengerId":1189,"Pclass":3,"Name":"Samaan, Mr. Hanna","Sex":"male","Age":null,"SibSp":2,"Parch":0,"Ticket":"2662","Fare":21.6792,"Cabin":"","Embarked":"C"},{"PassengerId":1190,"Pclass":1,"Name":"Loring, Mr. Joseph Holland","Sex":"male","Age":30,"SibSp":0,"Parch":0,"Ticket":"113801","Fare":45.5,"Cabin":"","Embarked":"S"},{"PassengerId":1191,"Pclass":3,"Name":"Johansson, Mr. Nils","Sex":"male","Age":29,"SibSp":0,"Parch":0,"Ticket":"347467","Fare":7.8542,"Cabin":"","Embarked":"S"},{"PassengerId":1192,"Pclass":3,"Name":"Olsson, Mr. Oscar Wilhelm","Sex":"male","Age":32,"SibSp":0,"Parch":0,"Ticket":"347079","Fare":7.775,"Cabin":"","Embarked":"S"},{"PassengerId":1193,"Pclass":2,"Name":"Malachard, Mr. Noel","Sex":"male","Age":null,"SibSp":0,"Parch":0,"Ticket":"237735","Fare":15.0458,"Cabin":"D","Embarked":"C"},{"PassengerId":1194,"Pclass":2,"Name":"Phillips, Mr. Escott Robert","Sex":"male","Age":43,"SibSp":0,"Parch":1,"Ticket":"S.O./P.P. 2","Fare":21,"Cabin":"","Embarked":"S"},{"PassengerId":1195,"Pclass":3,"Name":"Pokrnic, Mr. Tome","Sex":"male","Age":24,"SibSp":0,"Parch":0,"Ticket":"315092","Fare":8.6625,"Cabin":"","Embarked":"S"},{"PassengerId":1196,"Pclass":3,"Name":"McCarthy, Miss. Catherine Katie\"\"","Sex":"female","Age":null,"SibSp":0,"Parch":0,"Ticket":"383123","Fare":7.75,"Cabin":"","Embarked":"Q"},{"PassengerId":1197,"Pclass":1,"Name":"Crosby, Mrs. Edward Gifford (Catherine Elizabeth Halstead)","Sex":"female","Age":64,"SibSp":1,"Parch":1,"Ticket":"112901","Fare":26.55,"Cabin":"B26","Embarked":"S"},{"PassengerId":1198,"Pclass":1,"Name":"Allison, Mr. Hudson Joshua Creighton","Sex":"male","Age":30,"SibSp":1,"Parch":2,"Ticket":"113781","Fare":151.55,"Cabin":"C22 C26","Embarked":"S"},{"PassengerId":1199,"Pclass":3,"Name":"Aks, Master. Philip Frank","Sex":"male","Age":0.83,"SibSp":0,"Parch":1,"Ticket":"392091","Fare":9.35,"Cabin":"","Embarked":"S"},{"PassengerId":1200,"Pclass":1,"Name":"Hays, Mr. Charles Melville","Sex":"male","Age":55,"SibSp":1,"Parch":1,"Ticket":"12749","Fare":93.5,"Cabin":"B69","Embarked":"S"},{"PassengerId":1201,"Pclass":3,"Name":"Hansen, Mrs. Claus Peter (Jennie L Howard)","Sex":"female","Age":45,"SibSp":1,"Parch":0,"Ticket":"350026","Fare":14.1083,"Cabin":"","Embarked":"S"},{"PassengerId":1202,"Pclass":3,"Name":"Cacic, Mr. Jego Grga","Sex":"male","Age":18,"SibSp":0,"Parch":0,"Ticket":"315091","Fare":8.6625,"Cabin":"","Embarked":"S"},{"PassengerId":1203,"Pclass":3,"Name":"Vartanian, Mr. David","Sex":"male","Age":22,"SibSp":0,"Parch":0,"Ticket":"2658","Fare":7.225,"Cabin":"","Embarked":"C"},{"PassengerId":1204,"Pclass":3,"Name":"Sadowitz, Mr. Harry","Sex":"male","Age":null,"SibSp":0,"Parch":0,"Ticket":"LP 1588","Fare":7.575,"Cabin":"","Embarked":"S"},{"PassengerId":1205,"Pclass":3,"Name":"Carr, Miss. Jeannie","Sex":"female","Age":37,"SibSp":0,"Parch":0,"Ticket":"368364","Fare":7.75,"Cabin":"","Embarked":"Q"},{"PassengerId":1206,"Pclass":1,"Name":"White, Mrs. John Stuart (Ella Holmes)","Sex":"female","Age":55,"SibSp":0,"Parch":0,"Ticket":"PC 17760","Fare":135.6333,"Cabin":"C32","Embarked":"C"},{"PassengerId":1207,"Pclass":3,"Name":"Hagardon, Miss. Kate","Sex":"female","Age":17,"SibSp":0,"Parch":0,"Ticket":"AQ/3. 30631","Fare":7.7333,"Cabin":"","Embarked":"Q"},{"PassengerId":1208,"Pclass":1,"Name":"Spencer, Mr. William Augustus","Sex":"male","Age":57,"SibSp":1,"Parch":0,"Ticket":"PC 17569","Fare":146.5208,"Cabin":"B78","Embarked":"C"},{"PassengerId":1209,"Pclass":2,"Name":"Rogers, Mr. Reginald Harry","Sex":"male","Age":19,"SibSp":0,"Parch":0,"Ticket":"28004","Fare":10.5,"Cabin":"","Embarked":"S"},{"PassengerId":1210,"Pclass":3,"Name":"Jonsson, Mr. Nils Hilding","Sex":"male","Age":27,"SibSp":0,"Parch":0,"Ticket":"350408","Fare":7.8542,"Cabin":"","Embarked":"S"},{"PassengerId":1211,"Pclass":2,"Name":"Jefferys, Mr. Ernest Wilfred","Sex":"male","Age":22,"SibSp":2,"Parch":0,"Ticket":"C.A. 31029","Fare":31.5,"Cabin":"","Embarked":"S"},{"PassengerId":1212,"Pclass":3,"Name":"Andersson, Mr. Johan Samuel","Sex":"male","Age":26,"SibSp":0,"Parch":0,"Ticket":"347075","Fare":7.775,"Cabin":"","Embarked":"S"},{"PassengerId":1213,"Pclass":3,"Name":"Krekorian, Mr. Neshan","Sex":"male","Age":25,"SibSp":0,"Parch":0,"Ticket":"2654","Fare":7.2292,"Cabin":"F E57","Embarked":"C"},{"PassengerId":1214,"Pclass":2,"Name":"Nesson, Mr. Israel","Sex":"male","Age":26,"SibSp":0,"Parch":0,"Ticket":"244368","Fare":13,"Cabin":"F2","Embarked":"S"},{"PassengerId":1215,"Pclass":1,"Name":"Rowe, Mr. Alfred G","Sex":"male","Age":33,"SibSp":0,"Parch":0,"Ticket":"113790","Fare":26.55,"Cabin":"","Embarked":"S"},{"PassengerId":1216,"Pclass":1,"Name":"Kreuchen, Miss. Emilie","Sex":"female","Age":39,"SibSp":0,"Parch":0,"Ticket":"24160","Fare":211.3375,"Cabin":"","Embarked":"S"},{"PassengerId":1217,"Pclass":3,"Name":"Assam, Mr. Ali","Sex":"male","Age":23,"SibSp":0,"Parch":0,"Ticket":"SOTON/O.Q. 3101309","Fare":7.05,"Cabin":"","Embarked":"S"},{"PassengerId":1218,"Pclass":2,"Name":"Becker, Miss. Ruth Elizabeth","Sex":"female","Age":12,"SibSp":2,"Parch":1,"Ticket":"230136","Fare":39,"Cabin":"F4","Embarked":"S"},{"PassengerId":1219,"Pclass":1,"Name":"Rosenshine, Mr. George (Mr George Thorne\")\"","Sex":"male","Age":46,"SibSp":0,"Parch":0,"Ticket":"PC 17585","Fare":79.2,"Cabin":"","Embarked":"C"},{"PassengerId":1220,"Pclass":2,"Name":"Clarke, Mr. Charles Valentine","Sex":"male","Age":29,"SibSp":1,"Parch":0,"Ticket":"2003","Fare":26,"Cabin":"","Embarked":"S"},{"PassengerId":1221,"Pclass":2,"Name":"Enander, Mr. Ingvar","Sex":"male","Age":21,"SibSp":0,"Parch":0,"Ticket":"236854","Fare":13,"Cabin":"","Embarked":"S"},{"PassengerId":1222,"Pclass":2,"Name":"Davies, Mrs. John Morgan (Elizabeth Agnes Mary White) ","Sex":"female","Age":48,"SibSp":0,"Parch":2,"Ticket":"C.A. 33112","Fare":36.75,"Cabin":"","Embarked":"S"},{"PassengerId":1223,"Pclass":1,"Name":"Dulles, Mr. William Crothers","Sex":"male","Age":39,"SibSp":0,"Parch":0,"Ticket":"PC 17580","Fare":29.7,"Cabin":"A18","Embarked":"C"},{"PassengerId":1224,"Pclass":3,"Name":"Thomas, Mr. Tannous","Sex":"male","Age":null,"SibSp":0,"Parch":0,"Ticket":"2684","Fare":7.225,"Cabin":"","Embarked":"C"},{"PassengerId":1225,"Pclass":3,"Name":"Nakid, Mrs. Said (Waika Mary\" Mowad)\"","Sex":"female","Age":19,"SibSp":1,"Parch":1,"Ticket":"2653","Fare":15.7417,"Cabin":"","Embarked":"C"},{"PassengerId":1226,"Pclass":3,"Name":"Cor, Mr. Ivan","Sex":"male","Age":27,"SibSp":0,"Parch":0,"Ticket":"349229","Fare":7.8958,"Cabin":"","Embarked":"S"},{"PassengerId":1227,"Pclass":1,"Name":"Maguire, Mr. John Edward","Sex":"male","Age":30,"SibSp":0,"Parch":0,"Ticket":"110469","Fare":26,"Cabin":"C106","Embarked":"S"},{"PassengerId":1228,"Pclass":2,"Name":"de Brito, Mr. Jose Joaquim","Sex":"male","Age":32,"SibSp":0,"Parch":0,"Ticket":"244360","Fare":13,"Cabin":"","Embarked":"S"},{"PassengerId":1229,"Pclass":3,"Name":"Elias, Mr. Joseph","Sex":"male","Age":39,"SibSp":0,"Parch":2,"Ticket":"2675","Fare":7.2292,"Cabin":"","Embarked":"C"},{"PassengerId":1230,"Pclass":2,"Name":"Denbury, Mr. Herbert","Sex":"male","Age":25,"SibSp":0,"Parch":0,"Ticket":"C.A. 31029","Fare":31.5,"Cabin":"","Embarked":"S"},{"PassengerId":1231,"Pclass":3,"Name":"Betros, Master. Seman","Sex":"male","Age":null,"SibSp":0,"Parch":0,"Ticket":"2622","Fare":7.2292,"Cabin":"","Embarked":"C"},{"PassengerId":1232,"Pclass":2,"Name":"Fillbrook, Mr. Joseph Charles","Sex":"male","Age":18,"SibSp":0,"Parch":0,"Ticket":"C.A. 15185","Fare":10.5,"Cabin":"","Embarked":"S"},{"PassengerId":1233,"Pclass":3,"Name":"Lundstrom, Mr. Thure Edvin","Sex":"male","Age":32,"SibSp":0,"Parch":0,"Ticket":"350403","Fare":7.5792,"Cabin":"","Embarked":"S"},{"PassengerId":1234,"Pclass":3,"Name":"Sage, Mr. John George","Sex":"male","Age":null,"SibSp":1,"Parch":9,"Ticket":"CA. 2343","Fare":69.55,"Cabin":"","Embarked":"S"},{"PassengerId":1235,"Pclass":1,"Name":"Cardeza, Mrs. James Warburton Martinez (Charlotte Wardle Drake)","Sex":"female","Age":58,"SibSp":0,"Parch":1,"Ticket":"PC 17755","Fare":512.3292,"Cabin":"B51 B53 B55","Embarked":"C"},{"PassengerId":1236,"Pclass":3,"Name":"van Billiard, Master. James William","Sex":"male","Age":null,"SibSp":1,"Parch":1,"Ticket":"A/5. 851","Fare":14.5,"Cabin":"","Embarked":"S"},{"PassengerId":1237,"Pclass":3,"Name":"Abelseth, Miss. Karen Marie","Sex":"female","Age":16,"SibSp":0,"Parch":0,"Ticket":"348125","Fare":7.65,"Cabin":"","Embarked":"S"},{"PassengerId":1238,"Pclass":2,"Name":"Botsford, Mr. William Hull","Sex":"male","Age":26,"SibSp":0,"Parch":0,"Ticket":"237670","Fare":13,"Cabin":"","Embarked":"S"},{"PassengerId":1239,"Pclass":3,"Name":"Whabee, Mrs. George Joseph (Shawneene Abi-Saab)","Sex":"female","Age":38,"SibSp":0,"Parch":0,"Ticket":"2688","Fare":7.2292,"Cabin":"","Embarked":"C"},{"PassengerId":1240,"Pclass":2,"Name":"Giles, Mr. Ralph","Sex":"male","Age":24,"SibSp":0,"Parch":0,"Ticket":"248726","Fare":13.5,"Cabin":"","Embarked":"S"},{"PassengerId":1241,"Pclass":2,"Name":"Walcroft, Miss. Nellie","Sex":"female","Age":31,"SibSp":0,"Parch":0,"Ticket":"F.C.C. 13528","Fare":21,"Cabin":"","Embarked":"S"},{"PassengerId":1242,"Pclass":1,"Name":"Greenfield, Mrs. Leo David (Blanche Strouse)","Sex":"female","Age":45,"SibSp":0,"Parch":1,"Ticket":"PC 17759","Fare":63.3583,"Cabin":"D10 D12","Embarked":"C"},{"PassengerId":1243,"Pclass":2,"Name":"Stokes, Mr. Philip Joseph","Sex":"male","Age":25,"SibSp":0,"Parch":0,"Ticket":"F.C.C. 13540","Fare":10.5,"Cabin":"","Embarked":"S"},{"PassengerId":1244,"Pclass":2,"Name":"Dibden, Mr. William","Sex":"male","Age":18,"SibSp":0,"Parch":0,"Ticket":"S.O.C. 14879","Fare":73.5,"Cabin":"","Embarked":"S"},{"PassengerId":1245,"Pclass":2,"Name":"Herman, Mr. Samuel","Sex":"male","Age":49,"SibSp":1,"Parch":2,"Ticket":"220845","Fare":65,"Cabin":"","Embarked":"S"},{"PassengerId":1246,"Pclass":3,"Name":"Dean, Miss. Elizabeth Gladys Millvina\"\"","Sex":"female","Age":0.17,"SibSp":1,"Parch":2,"Ticket":"C.A. 2315","Fare":20.575,"Cabin":"","Embarked":"S"},{"PassengerId":1247,"Pclass":1,"Name":"Julian, Mr. Henry Forbes","Sex":"male","Age":50,"SibSp":0,"Parch":0,"Ticket":"113044","Fare":26,"Cabin":"E60","Embarked":"S"},{"PassengerId":1248,"Pclass":1,"Name":"Brown, Mrs. John Murray (Caroline Lane Lamson)","Sex":"female","Age":59,"SibSp":2,"Parch":0,"Ticket":"11769","Fare":51.4792,"Cabin":"C101","Embarked":"S"},{"PassengerId":1249,"Pclass":3,"Name":"Lockyer, Mr. Edward","Sex":"male","Age":null,"SibSp":0,"Parch":0,"Ticket":"1222","Fare":7.8792,"Cabin":"","Embarked":"S"},{"PassengerId":1250,"Pclass":3,"Name":"O'Keefe, Mr. Patrick","Sex":"male","Age":null,"SibSp":0,"Parch":0,"Ticket":"368402","Fare":7.75,"Cabin":"","Embarked":"Q"},{"PassengerId":1251,"Pclass":3,"Name":"Lindell, Mrs. Edvard Bengtsson (Elin Gerda Persson)","Sex":"female","Age":30,"SibSp":1,"Parch":0,"Ticket":"349910","Fare":15.55,"Cabin":"","Embarked":"S"},{"PassengerId":1252,"Pclass":3,"Name":"Sage, Master. William Henry","Sex":"male","Age":14.5,"SibSp":8,"Parch":2,"Ticket":"CA. 2343","Fare":69.55,"Cabin":"","Embarked":"S"},{"PassengerId":1253,"Pclass":2,"Name":"Mallet, Mrs. Albert (Antoinette Magnin)","Sex":"female","Age":24,"SibSp":1,"Parch":1,"Ticket":"S.C./PARIS 2079","Fare":37.0042,"Cabin":"","Embarked":"C"},{"PassengerId":1254,"Pclass":2,"Name":"Ware, Mrs. John James (Florence Louise Long)","Sex":"female","Age":31,"SibSp":0,"Parch":0,"Ticket":"CA 31352","Fare":21,"Cabin":"","Embarked":"S"},{"PassengerId":1255,"Pclass":3,"Name":"Strilic, Mr. Ivan","Sex":"male","Age":27,"SibSp":0,"Parch":0,"Ticket":"315083","Fare":8.6625,"Cabin":"","Embarked":"S"},{"PassengerId":1256,"Pclass":1,"Name":"Harder, Mrs. George Achilles (Dorothy Annan)","Sex":"female","Age":25,"SibSp":1,"Parch":0,"Ticket":"11765","Fare":55.4417,"Cabin":"E50","Embarked":"C"},{"PassengerId":1257,"Pclass":3,"Name":"Sage, Mrs. John (Annie Bullen)","Sex":"female","Age":null,"SibSp":1,"Parch":9,"Ticket":"CA. 2343","Fare":69.55,"Cabin":"","Embarked":"S"},{"PassengerId":1258,"Pclass":3,"Name":"Caram, Mr. Joseph","Sex":"male","Age":null,"SibSp":1,"Parch":0,"Ticket":"2689","Fare":14.4583,"Cabin":"","Embarked":"C"},{"PassengerId":1259,"Pclass":3,"Name":"Riihivouri, Miss. Susanna Juhantytar Sanni\"\"","Sex":"female","Age":22,"SibSp":0,"Parch":0,"Ticket":"3101295","Fare":39.6875,"Cabin":"","Embarked":"S"},{"PassengerId":1260,"Pclass":1,"Name":"Gibson, Mrs. Leonard (Pauline C Boeson)","Sex":"female","Age":45,"SibSp":0,"Parch":1,"Ticket":"112378","Fare":59.4,"Cabin":"","Embarked":"C"},{"PassengerId":1261,"Pclass":2,"Name":"Pallas y Castello, Mr. Emilio","Sex":"male","Age":29,"SibSp":0,"Parch":0,"Ticket":"SC/PARIS 2147","Fare":13.8583,"Cabin":"","Embarked":"C"},{"PassengerId":1262,"Pclass":2,"Name":"Giles, Mr. Edgar","Sex":"male","Age":21,"SibSp":1,"Parch":0,"Ticket":"28133","Fare":11.5,"Cabin":"","Embarked":"S"},{"PassengerId":1263,"Pclass":1,"Name":"Wilson, Miss. Helen Alice","Sex":"female","Age":31,"SibSp":0,"Parch":0,"Ticket":"16966","Fare":134.5,"Cabin":"E39 E41","Embarked":"C"},{"PassengerId":1264,"Pclass":1,"Name":"Ismay, Mr. Joseph Bruce","Sex":"male","Age":49,"SibSp":0,"Parch":0,"Ticket":"112058","Fare":0,"Cabin":"B52 B54 B56","Embarked":"S"},{"PassengerId":1265,"Pclass":2,"Name":"Harbeck, Mr. William H","Sex":"male","Age":44,"SibSp":0,"Parch":0,"Ticket":"248746","Fare":13,"Cabin":"","Embarked":"S"},{"PassengerId":1266,"Pclass":1,"Name":"Dodge, Mrs. Washington (Ruth Vidaver)","Sex":"female","Age":54,"SibSp":1,"Parch":1,"Ticket":"33638","Fare":81.8583,"Cabin":"A34","Embarked":"S"},{"PassengerId":1267,"Pclass":1,"Name":"Bowen, Miss. Grace Scott","Sex":"female","Age":45,"SibSp":0,"Parch":0,"Ticket":"PC 17608","Fare":262.375,"Cabin":"","Embarked":"C"},{"PassengerId":1268,"Pclass":3,"Name":"Kink, Miss. Maria","Sex":"female","Age":22,"SibSp":2,"Parch":0,"Ticket":"315152","Fare":8.6625,"Cabin":"","Embarked":"S"},{"PassengerId":1269,"Pclass":2,"Name":"Cotterill, Mr. Henry Harry\"\"","Sex":"male","Age":21,"SibSp":0,"Parch":0,"Ticket":"29107","Fare":11.5,"Cabin":"","Embarked":"S"},{"PassengerId":1270,"Pclass":1,"Name":"Hipkins, Mr. William Edward","Sex":"male","Age":55,"SibSp":0,"Parch":0,"Ticket":"680","Fare":50,"Cabin":"C39","Embarked":"S"},{"PassengerId":1271,"Pclass":3,"Name":"Asplund, Master. Carl Edgar","Sex":"male","Age":5,"SibSp":4,"Parch":2,"Ticket":"347077","Fare":31.3875,"Cabin":"","Embarked":"S"},{"PassengerId":1272,"Pclass":3,"Name":"O'Connor, Mr. Patrick","Sex":"male","Age":null,"SibSp":0,"Parch":0,"Ticket":"366713","Fare":7.75,"Cabin":"","Embarked":"Q"},{"PassengerId":1273,"Pclass":3,"Name":"Foley, Mr. Joseph","Sex":"male","Age":26,"SibSp":0,"Parch":0,"Ticket":"330910","Fare":7.8792,"Cabin":"","Embarked":"Q"},{"PassengerId":1274,"Pclass":3,"Name":"Risien, Mrs. Samuel (Emma)","Sex":"female","Age":null,"SibSp":0,"Parch":0,"Ticket":"364498","Fare":14.5,"Cabin":"","Embarked":"S"},{"PassengerId":1275,"Pclass":3,"Name":"McNamee, Mrs. Neal (Eileen O'Leary)","Sex":"female","Age":19,"SibSp":1,"Parch":0,"Ticket":"376566","Fare":16.1,"Cabin":"","Embarked":"S"},{"PassengerId":1276,"Pclass":2,"Name":"Wheeler, Mr. Edwin Frederick\"\"","Sex":"male","Age":null,"SibSp":0,"Parch":0,"Ticket":"SC/PARIS 2159","Fare":12.875,"Cabin":"","Embarked":"S"},{"PassengerId":1277,"Pclass":2,"Name":"Herman, Miss. Kate","Sex":"female","Age":24,"SibSp":1,"Parch":2,"Ticket":"220845","Fare":65,"Cabin":"","Embarked":"S"},{"PassengerId":1278,"Pclass":3,"Name":"Aronsson, Mr. Ernst Axel Algot","Sex":"male","Age":24,"SibSp":0,"Parch":0,"Ticket":"349911","Fare":7.775,"Cabin":"","Embarked":"S"},{"PassengerId":1279,"Pclass":2,"Name":"Ashby, Mr. John","Sex":"male","Age":57,"SibSp":0,"Parch":0,"Ticket":"244346","Fare":13,"Cabin":"","Embarked":"S"},{"PassengerId":1280,"Pclass":3,"Name":"Canavan, Mr. Patrick","Sex":"male","Age":21,"SibSp":0,"Parch":0,"Ticket":"364858","Fare":7.75,"Cabin":"","Embarked":"Q"},{"PassengerId":1281,"Pclass":3,"Name":"Palsson, Master. Paul Folke","Sex":"male","Age":6,"SibSp":3,"Parch":1,"Ticket":"349909","Fare":21.075,"Cabin":"","Embarked":"S"},{"PassengerId":1282,"Pclass":1,"Name":"Payne, Mr. Vivian Ponsonby","Sex":"male","Age":23,"SibSp":0,"Parch":0,"Ticket":"12749","Fare":93.5,"Cabin":"B24","Embarked":"S"},{"PassengerId":1283,"Pclass":1,"Name":"Lines, Mrs. Ernest H (Elizabeth Lindsey James)","Sex":"female","Age":51,"SibSp":0,"Parch":1,"Ticket":"PC 17592","Fare":39.4,"Cabin":"D28","Embarked":"S"},{"PassengerId":1284,"Pclass":3,"Name":"Abbott, Master. Eugene Joseph","Sex":"male","Age":13,"SibSp":0,"Parch":2,"Ticket":"C.A. 2673","Fare":20.25,"Cabin":"","Embarked":"S"},{"PassengerId":1285,"Pclass":2,"Name":"Gilbert, Mr. William","Sex":"male","Age":47,"SibSp":0,"Parch":0,"Ticket":"C.A. 30769","Fare":10.5,"Cabin":"","Embarked":"S"},{"PassengerId":1286,"Pclass":3,"Name":"Kink-Heilmann, Mr. Anton","Sex":"male","Age":29,"SibSp":3,"Parch":1,"Ticket":"315153","Fare":22.025,"Cabin":"","Embarked":"S"},{"PassengerId":1287,"Pclass":1,"Name":"Smith, Mrs. Lucien Philip (Mary Eloise Hughes)","Sex":"female","Age":18,"SibSp":1,"Parch":0,"Ticket":"13695","Fare":60,"Cabin":"C31","Embarked":"S"},{"PassengerId":1288,"Pclass":3,"Name":"Colbert, Mr. Patrick","Sex":"male","Age":24,"SibSp":0,"Parch":0,"Ticket":"371109","Fare":7.25,"Cabin":"","Embarked":"Q"},{"PassengerId":1289,"Pclass":1,"Name":"Frolicher-Stehli, Mrs. Maxmillian (Margaretha Emerentia Stehli)","Sex":"female","Age":48,"SibSp":1,"Parch":1,"Ticket":"13567","Fare":79.2,"Cabin":"B41","Embarked":"C"},{"PassengerId":1290,"Pclass":3,"Name":"Larsson-Rondberg, Mr. Edvard A","Sex":"male","Age":22,"SibSp":0,"Parch":0,"Ticket":"347065","Fare":7.775,"Cabin":"","Embarked":"S"},{"PassengerId":1291,"Pclass":3,"Name":"Conlon, Mr. Thomas Henry","Sex":"male","Age":31,"SibSp":0,"Parch":0,"Ticket":"21332","Fare":7.7333,"Cabin":"","Embarked":"Q"},{"PassengerId":1292,"Pclass":1,"Name":"Bonnell, Miss. Caroline","Sex":"female","Age":30,"SibSp":0,"Parch":0,"Ticket":"36928","Fare":164.8667,"Cabin":"C7","Embarked":"S"},{"PassengerId":1293,"Pclass":2,"Name":"Gale, Mr. Harry","Sex":"male","Age":38,"SibSp":1,"Parch":0,"Ticket":"28664","Fare":21,"Cabin":"","Embarked":"S"},{"PassengerId":1294,"Pclass":1,"Name":"Gibson, Miss. Dorothy Winifred","Sex":"female","Age":22,"SibSp":0,"Parch":1,"Ticket":"112378","Fare":59.4,"Cabin":"","Embarked":"C"},{"PassengerId":1295,"Pclass":1,"Name":"Carrau, Mr. Jose Pedro","Sex":"male","Age":17,"SibSp":0,"Parch":0,"Ticket":"113059","Fare":47.1,"Cabin":"","Embarked":"S"},{"PassengerId":1296,"Pclass":1,"Name":"Frauenthal, Mr. Isaac Gerald","Sex":"male","Age":43,"SibSp":1,"Parch":0,"Ticket":"17765","Fare":27.7208,"Cabin":"D40","Embarked":"C"},{"PassengerId":1297,"Pclass":2,"Name":"Nourney, Mr. Alfred (Baron von Drachstedt\")\"","Sex":"male","Age":20,"SibSp":0,"Parch":0,"Ticket":"SC/PARIS 2166","Fare":13.8625,"Cabin":"D38","Embarked":"C"},{"PassengerId":1298,"Pclass":2,"Name":"Ware, Mr. William Jeffery","Sex":"male","Age":23,"SibSp":1,"Parch":0,"Ticket":"28666","Fare":10.5,"Cabin":"","Embarked":"S"},{"PassengerId":1299,"Pclass":1,"Name":"Widener, Mr. George Dunton","Sex":"male","Age":50,"SibSp":1,"Parch":1,"Ticket":"113503","Fare":211.5,"Cabin":"C80","Embarked":"C"},{"PassengerId":1300,"Pclass":3,"Name":"Riordan, Miss. Johanna Hannah\"\"","Sex":"female","Age":null,"SibSp":0,"Parch":0,"Ticket":"334915","Fare":7.7208,"Cabin":"","Embarked":"Q"},{"PassengerId":1301,"Pclass":3,"Name":"Peacock, Miss. Treasteall","Sex":"female","Age":3,"SibSp":1,"Parch":1,"Ticket":"SOTON/O.Q. 3101315","Fare":13.775,"Cabin":"","Embarked":"S"},{"PassengerId":1302,"Pclass":3,"Name":"Naughton, Miss. Hannah","Sex":"female","Age":null,"SibSp":0,"Parch":0,"Ticket":"365237","Fare":7.75,"Cabin":"","Embarked":"Q"},{"PassengerId":1303,"Pclass":1,"Name":"Minahan, Mrs. William Edward (Lillian E Thorpe)","Sex":"female","Age":37,"SibSp":1,"Parch":0,"Ticket":"19928","Fare":90,"Cabin":"C78","Embarked":"Q"},{"PassengerId":1304,"Pclass":3,"Name":"Henriksson, Miss. Jenny Lovisa","Sex":"female","Age":28,"SibSp":0,"Parch":0,"Ticket":"347086","Fare":7.775,"Cabin":"","Embarked":"S"},{"PassengerId":1305,"Pclass":3,"Name":"Spector, Mr. Woolf","Sex":"male","Age":null,"SibSp":0,"Parch":0,"Ticket":"A.5. 3236","Fare":8.05,"Cabin":"","Embarked":"S"},{"PassengerId":1306,"Pclass":1,"Name":"Oliva y Ocana, Dona. Fermina","Sex":"female","Age":39,"SibSp":0,"Parch":0,"Ticket":"PC 17758","Fare":108.9,"Cabin":"C105","Embarked":"C"},{"PassengerId":1307,"Pclass":3,"Name":"Saether, Mr. Simon Sivertsen","Sex":"male","Age":38.5,"SibSp":0,"Parch":0,"Ticket":"SOTON/O.Q. 3101262","Fare":7.25,"Cabin":"","Embarked":"S"},{"PassengerId":1308,"Pclass":3,"Name":"Ware, Mr. Frederick","Sex":"male","Age":null,"SibSp":0,"Parch":0,"Ticket":"359309","Fare":8.05,"Cabin":"","Embarked":"S"},{"PassengerId":1309,"Pclass":3,"Name":"Peter, Master. Michael J","Sex":"male","Age":null,"SibSp":1,"Parch":1,"Ticket":"2668","Fare":22.3583,"Cabin":"","Embarked":"C"}];

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

module.exports = "<highcharts-chart\n   [Highcharts] = \"highcharts\"\n   [options] = \"chartOptions\"\n   style = \"width: 80%; height: 400px; display: block;\"\n   (click)=\"sendSexToParent($event)\">\n</highcharts-chart>\n"

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
                text: 'Titanic Data'
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
        if (event.point) {
            this.selectedVale.emit(event.point.name);
        }
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
        this.url = 'http://localhost:3000/';
    }
    GetDataService.prototype.putData = function (jsonData) {
        return this.http.post(this.url + 'postData', jsonData);
    };
    GetDataService.prototype.getColumnName = function () {
        return this.http.get(this.url + 'getColumnName');
    };
    GetDataService.prototype.getData = function (pageNumber, pageSize) {
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        header = header.append('pageNo', pageNumber);
        header = header.append('size', pageSize);
        return this.http.get(this.url + 'getData', { headers: header });
    };
    GetDataService.prototype.getMaleCount = function () {
        return this.http.get(this.url + 'getMaleCount');
    };
    GetDataService.prototype.getFemaleCount = function () {
        return this.http.get(this.url + 'getFemaleCount');
    };
    GetDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
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

module.exports = __webpack_require__(/*! /Users/Brijesh/Desktop/code-challange/angular-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map