webpackJsonp([12],{

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(404);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]
            ]
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(252);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, afDB, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.afDB = afDB;
        this.navParams = navParams;
        this.flag = true;
        this.temperatureFlag = true;
        this.humidityFlag = true;
        this.iluuminanceFlag = true;
        this.serialNumber = navParams.data;
        console.log("Home serial : ", this.serialNumber);
        this.userRef = "userFarm/" + this.serialNumber;
        this.afDB.object(this.userRef + "/humidity").snapshotChanges().subscribe(function (item) {
            _this.humidity = item.payload.val().sensorvalue;
            _this.humidityState = item.payload.val().status;
            if (item.payload.val().status == 'bad') {
                _this.flag = false;
                _this.humidityFlag = false;
            }
        });
        this.afDB.object(this.userRef + "/illuminance").snapshotChanges().subscribe(function (item) {
            _this.illuminance = item.payload.val().sensorvalue;
            _this.illuminanceState = item.payload.val().status;
            if (item.payload.val().status == 'bad') {
                _this.flag = false;
                _this.iluuminanceFlag = false;
            }
        });
        this.afDB.object(this.userRef + "/temperature").snapshotChanges().subscribe(function (item) {
            _this.temperature = item.payload.val().sensorvalue.toFixed(2);
            _this.temperatureState = item.payload.val().status;
            if (item.payload.val().status == 'bad') {
                _this.flag = false;
                _this.temperatureFlag = false;
            }
        });
    }
    HomePage.prototype.openTemperaturePage = function () {
        this.navCtrl.push('HumidityPage', { segment: 'color-fill', serialNumber: this.serialNumber });
    };
    HomePage.prototype.openHumidityPage = function () {
        this.navCtrl.push('HumidityPage', { segment: 'sunny', serialNumber: this.serialNumber });
    };
    HomePage.prototype.openIlluminationPage = function () {
        this.navCtrl.push('HumidityPage', { segment: 'thermometer', serialNumber: this.serialNumber });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Owner\Desktop\capstone\last\test\src\pages\home\home.html"*/'<ion-header>\n\n    <ion-navbar color ="primary">\n\n        <ion-title>Home</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <img *ngIf ="flag == false" src="assets/img/sad.png">\n\n    <img *ngIf ="flag == true" src="assets/img/sad.png">\n\n    <ion-buttons>\n\n        <button ion-button color="secondary" (click) = "openTemperaturePage()">Temperature</button>\n\n        <button *ngIf = "temperatureFlag == true" ion-button color="primary" (click) = "openTemperaturePage()"><p>{{temperatureState}}</p><p> (</p><p>{{temperature}}</p><p> ℃)</p></button>\n\n        <button *ngIf = "temperatureFlag == false" ion-button color="danger" (click) = "openTemperaturePage()"><p>{{temperatureState}}</p><p> (</p><p>{{temperature}}</p><p> ℃)</p></button>\n\n        \n\n    </ion-buttons>\n\n    <ion-buttons>\n\n        <button ion-button color="secondary" (click) = "openHumidityPage()">Humidity</button>\n\n        <button *ngIf = "humidityFlag == true" ion-button color="primary" (click) = "openHumidityPage()"><p>{{humidityState}}</p><p> (</p><p>{{humidity}}</p><p>%)</p></button>\n\n        <button *ngIf = "humidityFlag == false" ion-button color="danger" (click) = "openHumidityPage()"><p>{{humidityState}}</p><p> (</p><p>{{humidity}}</p><p>%)</p></button>\n\n    </ion-buttons>\n\n    <ion-buttons>\n\n        <button ion-button color="secondary" (click) = "openIlluminationPage()">Illuminiation</button>\n\n        <button *ngIf = "iluuminanceFlag == true" ion-button color="primary" (click) = "openIlluminationPage()"><p>{{illuminanceState}}</p><p> (</p><p>{{illuminance}}</p><p>)</p></button>\n\n        <button *ngIf = "iluuminanceFlag == false" ion-button color="danger" (click) = "openIlluminationPage()"><p>{{illuminanceState}}</p><p> (</p><p>{{illuminance}}</p><p>)</p></button>\n\n    </ion-buttons>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Owner\Desktop\capstone\last\test\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _c || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=12.js.map