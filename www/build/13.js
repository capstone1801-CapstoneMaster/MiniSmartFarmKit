webpackJsonp([13],{

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentPageModule", function() { return ContentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__content__ = __webpack_require__(403);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ContentPageModule = /** @class */ (function () {
    function ContentPageModule() {
    }
    ContentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__content__["a" /* ContentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__content__["a" /* ContentPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__content__["a" /* ContentPage */]
            ]
        })
    ], ContentPageModule);
    return ContentPageModule;
}());

//# sourceMappingURL=content.module.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentPage; });
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


var ContentPage = /** @class */ (function () {
    function ContentPage(navCtrl, modalCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.opts = {
            showBackdrop: true,
            enableBackdropDismiss: true,
            cssClass: 'mini-modal'
        };
    }
    ContentPage.prototype.openChatRandom = function () {
        var chatRandomModal = this.modalCtrl.create('ChatRandomPage', {}, this.opts);
        chatRandomModal.present();
    };
    ContentPage.prototype.openChatShake = function () {
        var chatShakeModal = this.modalCtrl.create('ChatShakePage', {}, this.opts);
        chatShakeModal.present();
    };
    ContentPage.prototype.openChatLocation = function () {
        var chatLocationModal = this.modalCtrl.create('ChatLocationPage', {}, this.opts);
        chatLocationModal.present();
    };
    ContentPage.prototype.openChatList = function () {
        // this.afDB.list('/chat').update(this.user.uid, {
        //   lastUpdate: firebase.database['ServerValue'].TIMESTAMP,
        //   username: this.user.displayName,
        //   profileImg: this.user.photoURL,
        //   inTalk: false
        // }).then((success)=> {
        //   this.navCtrl.push('ChatListPage',{user: this.user});
        // })
    };
    ContentPage.prototype.presentPrompt = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '인사말',
            subTitle: '대화방 인사말을 적어주세요. 대화방 목록에 노출됩니다.',
            inputs: [
                {
                    name: 'chatRommIntro',
                    placeholder: '대화방 소개',
                    type: 'text'
                }
            ],
            buttons: [
                {
                    text: '대화하기',
                    handler: function (data) {
                        console.log(data);
                        _this.openChatList();
                    }
                },
                {
                    text: '취소',
                    role: 'cancel'
                }
            ]
        });
        alert.present();
    };
    ContentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-content',template:/*ion-inline-start:"C:\Users\Owner\Desktop\capstone\last\test\src\pages\content\content.html"*/'<ion-header no-border>\n  <ion-navbar color="x-mint">\n    <ion-title text-center>일대일대화</ion-title>\n  </ion-navbar> \n</ion-header>\n\n<ion-content no-padding>\n  <div class="x-chatmenu-explain"><ion-icon name="flaticon-exclamation"></ion-icon>&nbsp;아래의 메뉴를 선택하여 대화방에 입장합니다.</div>\n  <ion-grid no-padding class="x-chatmenu">\n    <ion-row class="x-chatmenu-icon" text-center><ion-col col-12><ion-icon name="flaticon-user-4"></ion-icon></ion-col></ion-row>\n\n    <ion-row class="x-chatmenu-title" text-center><ion-col col-12>선택대화</ion-col></ion-row>\n    <ion-row class="x-chatmenu-subtitle" text-center><ion-col col-12>현재 접속중인 사용자를 선택하여 대화하기</ion-col></ion-row>\n    <ion-row text-center><ion-col col-12><button ion-button class="x-chatmenu-button" (click)="presentPrompt()">입장하기</button></ion-col></ion-row>\n\n  </ion-grid>\n  <ion-grid no-padding class="x-chatmenu">\n    <ion-row class="x-chatmenu-icon" text-center><ion-col col-12><ion-icon name="flaticon-technology-1"></ion-icon></ion-col></ion-row>\n    <ion-row class="x-chatmenu-title" text-center><ion-col col-12>모션검색</ion-col></ion-row>\n    <ion-row class="x-chatmenu-subtitle" text-center><ion-col col-12>같은 모션을 취하고 있는 접속자와 대화하기</ion-col></ion-row>\n    <ion-row text-center><ion-col col-12><button ion-button class="x-chatmenu-button" (click)="openChatShake()">입장하기</button></ion-col></ion-row>\n  </ion-grid>\n  <ion-grid no-padding class="x-chatmenu">\n    <ion-row class="x-chatmenu-icon" text-center><ion-col col-12><ion-icon name="flaticon-network"></ion-icon></ion-col></ion-row>\n    <ion-row class="x-chatmenu-title" text-center><ion-col col-12>위치검색</ion-col></ion-row>\n    <ion-row class="x-chatmenu-subtitle" text-center><ion-col col-12>가장 가까이 있는 접속자와 대화하기</ion-col></ion-row>\n    <ion-row text-center><ion-col col-12><button ion-button class="x-chatmenu-button" (click)="openChatLocation()">입장하기</button></ion-col></ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"C:\Users\Owner\Desktop\capstone\last\test\src\pages\content\content.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ContentPage);
    return ContentPage;
}());

//# sourceMappingURL=content.js.map

/***/ })

});
//# sourceMappingURL=13.js.map