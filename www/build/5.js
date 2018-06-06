webpackJsonp([5],{

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticePageModule", function() { return NoticePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notice__ = __webpack_require__(411);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NoticePageModule = /** @class */ (function () {
    function NoticePageModule() {
    }
    NoticePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__notice__["a" /* NoticePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__notice__["a" /* NoticePage */]),
            ],
        })
    ], NoticePageModule);
    return NoticePageModule;
}());

//# sourceMappingURL=notice.module.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticePage; });
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



var NoticePage = /** @class */ (function () {
    function NoticePage(navCtrl, viewCtrl, afDB) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.afDB = afDB;
        this.afDB.list('/NOTICE', function (ref) { return ref.orderByChild('name'); }).valueChanges().subscribe(function (Items) {
            _this.information = Items;
        });
    }
    NoticePage.prototype.toggleSection = function (i) {
        this.information[i].open = !this.information[i].open;
    };
    NoticePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notice',template:/*ion-inline-start:"C:\Users\Owner\Desktop\capstone\last\test\src\pages\notice\notice.html"*/'<ion-header no-border class="header">\n\n    <ion-navbar>\n\n      <!-- LEFT BUTTON -->\n\n      <ion-buttons left></ion-buttons>\n\n      <!-- TITLE -->\n\n      <ion-title>NOTICE</ion-title>  \n\n      <ion-buttons end>\n\n        <button ion-button (click)="viewCtrl.dismiss()"></button>\n\n      </ion-buttons>\n\n    </ion-navbar> \n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content>\n\n    <ion-list class="accordion-list">\n\n      <!-- First Level -->\n\n      <ion-list-header *ngFor="let item of information; let i = index" no-lines no-padding>\n\n        <!-- Toggle Button -->\n\n        <button ion-item (click)="toggleSection(i)" detail-none [ngClass]="{\'section-active\': item.open, \'section\': !item.open}">\n\n          {{ item.TITLE }}\n\n        </button>\n\n    \n\n        <ion-list *ngIf="item.open" no-lines>\n\n          <!-- Second Level -->\n\n            <!-- Direct Add Button as Fallback -->\n\n            <ion-item *ngIf="item.open" ion-item detail-none class="child-item" text-wrap>\n\n              <p text-lowercase>{{ item.CONTENT }}</p>\n\n              <p>{{ item.DATE }}</p>\n\n            </ion-item>\n\n  \n\n        </ion-list>\n\n  \n\n      </ion-list-header>\n\n    </ion-list>\n\n  </ion-content>'/*ion-inline-end:"C:\Users\Owner\Desktop\capstone\last\test\src\pages\notice\notice.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], NoticePage);
    return NoticePage;
}());

//# sourceMappingURL=notice.js.map

/***/ })

});
//# sourceMappingURL=5.js.map