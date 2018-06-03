webpackJsonp([11],{

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HumidityPageModule", function() { return HumidityPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__humidity__ = __webpack_require__(405);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HumidityPageModule = /** @class */ (function () {
    function HumidityPageModule() {
    }
    HumidityPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__humidity__["a" /* HumidityPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__humidity__["a" /* HumidityPage */]),
            ],
        })
    ], HumidityPageModule);
    return HumidityPageModule;
}());

//# sourceMappingURL=humidity.module.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HumidityPage; });
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



/**
 * Generated class for the HumidityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HumidityPage = /** @class */ (function () {
    function HumidityPage(navCtrl, navParams, alertCtrl, afDB) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.afDB = afDB;
        if (navParams.get('segment')) {
            this.icons = navParams.get('segment');
            this.serialNumber = navParams.data.serialNumber;
            console.log(this.serialNumber);
        }
        else {
            this.icons = "color-fill";
            this.serialNumber = navParams.data;
            console.log(this.serialNumber);
        }
        this.userRef = "userFarm/" + this.serialNumber;
        this.afDB.object(this.userRef + "/humidity").snapshotChanges().subscribe(function (item) {
            _this.humidity = item.payload.val().sensorvalue;
            _this.humidityState = item.payload.val().status;
        });
        this.afDB.object(this.userRef + "/illuminance").snapshotChanges().subscribe(function (item) {
            _this.illuminance = item.payload.val().sensorvalue;
            _this.illuminanceState = item.payload.val().status;
        });
        this.afDB.object(this.userRef + "/temperature").snapshotChanges().subscribe(function (item) {
            _this.temperature = item.payload.val().sensorvalue.toFixed(2);
            _this.temperatureState = item.payload.val().status;
        });
    }
    HumidityPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HumidityPage');
    };
    HumidityPage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'No engines',
            subTitle: 'The module is not attached.',
            buttons: ['Dismiss']
        });
        alert.present();
    };
    HumidityPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-humidity',template:/*ion-inline-start:"C:\Users\Owner\Desktop\capstone\last\test\src\pages\humidity\humidity.html"*/'\n<ion-header>\n  <ion-toolbar>\n    <ion-segment [(ngModel)]="icons" color="secondary">\n      <ion-segment-button value="color-fill">\n        <ion-icon name="color-fill"></ion-icon>\n      </ion-segment-button>\n      <ion-segment-button value="sunny">\n        <ion-icon name="sunny"></ion-icon>\n      </ion-segment-button>\n      <ion-segment-button value="thermometer">\n        <ion-icon name="thermometer"></ion-icon>\n      </ion-segment-button>\n\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <div [ngSwitch]="icons">\n    <ion-list *ngSwitchCase="\'color-fill\'">\n      <img src="assets/img/humidity.png">\n      <h3>Humidity : <span>{{humidityState}}</span><span> (</span><span>{{humidity}}</span><span>%)</span></h3>\n      <button ion-button (click)="presentAlert()">water</button>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'sunny\'">\n      <img src="assets/img/sun.png">\n      <h3>illumination : <span>{{illuminanceState}}</span><span> (</span><span>{{illuminance}}</span><span>)</span></h3>\n      <button ion-button (click)="presentAlert()">light</button>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'thermometer\'">\n      <img src="assets/img/thermometer.png">\n      <h3>temperature : <span>{{temperatureState}}</span><span> (</span><span>{{temperature}}</span><span> ℃)</span></h3>\n      <button ion-button (click)="presentAlert()">heat</button>\n    </ion-list>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\Owner\Desktop\capstone\last\test\src\pages\humidity\humidity.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _d || Object])
    ], HumidityPage);
    return HumidityPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=humidity.js.map

/***/ })

});
//# sourceMappingURL=11.js.map