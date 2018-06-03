webpackJsonp([14],{

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsPageModule", function() { return CardsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cards__ = __webpack_require__(402);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CardsPageModule = /** @class */ (function () {
    function CardsPageModule() {
    }
    CardsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__cards__["a" /* CardsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__cards__["a" /* CardsPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__cards__["a" /* CardsPage */]
            ]
        })
    ], CardsPageModule);
    return CardsPageModule;
}());

//# sourceMappingURL=cards.module.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(123);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardsPage = /** @class */ (function () {
    function CardsPage(navCtrl, modalCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.opts = {
            showBackdrop: true,
            enableBackdropDismiss: true,
            cssClass: 'mini-modal'
        };
        this.serialNumber = navParams.data;
        console.log("setting serial : ", this.serialNumber);
    }
    CardsPage.prototype.setPlant = function () {
        var searchPalntModal = this.modalCtrl.create('SearchPage', { serialNumber: this.serialNumber }, this.opts);
        searchPalntModal.present();
    };
    CardsPage.prototype.showNotice = function () {
        var noticeModal = this.modalCtrl.create('NoticePage', {}, this.opts);
        noticeModal.present();
    };
    CardsPage.prototype.customerService = function () {
        window.location.href = "mailto:wangting5@naver.com";
    };
    CardsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cards',template:/*ion-inline-start:"C:\Users\Owner\Desktop\capstone\last\test\src\pages\cards\cards.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Settings</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-card>\n    <ion-card-content no-padding>\n      <ion-item>\n        <h1>Set Plant</h1>\n        <button ion-button clear icon-left item-end (click)="setPlant()">\n          <ion-icon name=\'arrow-forward\' large></ion-icon>\n        </button>\n      </ion-item>\n\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button color="secondary" clear small icon-start>\n          <ion-icon name=\'flower\' item-right></ion-icon>\n          flowers\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card>\n\n      <ion-card-content no-padding>\n        <ion-item>\n          <h1>Engines</h1>\n          <button ion-button clear icon-left item-end (click)="setPlant()">\n            <ion-icon name=\'arrow-forward\' large></ion-icon>\n          </button>\n        </ion-item>\n  \n      </ion-card-content>\n  \n      <ion-row>\n        <ion-col>\n          <button ion-button color="danger" clear small icon-start>\n            <ion-icon name=\'cog\' item-right></ion-icon>\n            Engines\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n\n  <ion-card>\n    <!-- <ion-item>\n        <ion-avatar item-start>\n          <img [src]="item.user.avatar">\n        </ion-avatar>\n        <h2>{{item.user.name}}</h2>\n        <p>{{item.date}}</p>\n      </ion-item>\n  \n      <img [src]="item.image"> -->\n    <ion-card-content no-padding>\n      <ion-item>\n        <h2>Notice</h2>\n        <button ion-button clear icon-left item-end (click)="showNotice()">\n          <ion-icon name=\'arrow-forward\' large></ion-icon>\n        </button>\n      </ion-item>\n\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <!-- <ion-item>\n          <ion-avatar item-start>\n            <img [src]="item.user.avatar">\n          </ion-avatar>\n          <h2>{{item.user.name}}</h2>\n          <p>{{item.date}}</p>\n        </ion-item>\n    \n        <img [src]="item.image"> -->\n    <ion-card-content no-padding>\n        <ion-item>\n            <h2>Customer Service</h2>\n            <button ion-button clear icon-left item-end (click)="customerService()">\n              <ion-icon name=\'arrow-forward\' large></ion-icon>\n            </button>\n          </ion-item>\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"C:\Users\Owner\Desktop\capstone\last\test\src\pages\cards\cards.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], CardsPage);
    return CardsPage;
}());

//# sourceMappingURL=cards.js.map

/***/ })

});
//# sourceMappingURL=14.js.map