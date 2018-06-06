webpackJsonp([9],{

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailPageModule", function() { return ItemDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__item_detail__ = __webpack_require__(407);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ItemDetailPageModule = /** @class */ (function () {
    function ItemDetailPageModule() {
    }
    ItemDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__item_detail__["a" /* ItemDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__item_detail__["a" /* ItemDetailPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__item_detail__["a" /* ItemDetailPage */]
            ]
        })
    ], ItemDetailPageModule);
    return ItemDetailPageModule;
}());

//# sourceMappingURL=item-detail.module.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailPage; });
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



var ItemDetailPage = /** @class */ (function () {
    function ItemDetailPage(navCtrl, navParams, afDB) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.afDB = afDB;
        this.date = new Date();
        this.itemName = navParams.data.item;
        this.serialNumber = navParams.data.serialNumber;
        this.userRef = "userFarm/" + this.serialNumber;
        console.log(this.itemName);
        console.log(this.userRef);
        this.afDB.list('Plants', function (ref) { return ref.orderByChild('Name').equalTo(_this.itemName); }).valueChanges().subscribe(function (Items) {
            _this.item = Items;
            console.log(_this.item);
        });
        // this.afDB.list('Plants', ref => ref.orderByChild('Name').equalTo(this.itemName)).snapshotChanges().take(1).subscribe(items => {
        //   items.forEach(item => {
        //       if(item.payload.val().Name != this.itemName) this.plantKey = item.payload.val().plantKey;
        //   })
        // });
        for (var i = 0; i < 5; i++) {
            this.afDB.object('Plants/' + i).snapshotChanges().take(1).subscribe(function (item) {
                if (item.payload.val().Name == _this.itemName)
                    _this.plantKey = item.payload.val().plantKey;
            });
        }
        this.afDB.object(this.userRef).snapshotChanges().take(1).subscribe(function (item2) {
            _this.numberOfPlants = item2.payload.val().numberOfPlants;
        });
    }
    ItemDetailPage.prototype.setPlant = function () {
        // TODO : 누르면 DB의 numberOfPlants ++ 시킨다.
        this.afDB.list("/userFarm").update(this.serialNumber, { numberOfPlants: this.numberOfPlants + 1 });
        // Plants의 자식노드에 해당 식물 plantKey값 넣어서 만들어줘야해
        console.log(this.plantKey);
        this.afDB.list(this.userRef + "/Plants/").update(this.plantKey, { date: this.date });
    };
    ItemDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-item-detail',template:/*ion-inline-start:"C:\Users\Owner\Desktop\capstone\last\test\src\pages\item-detail\item-detail.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Detail</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div padding *ngFor="let item of item">\n    <h2>{{item.Name}}</h2>\n    <p>{{item.description}}</p>\n  </div>\n\n  <div>\n    <button ion-button color="primary" block (click)="setPlant()">Set as \'My Plant\'</button>\n  </div>\n  \n</ion-content>'/*ion-inline-end:"C:\Users\Owner\Desktop\capstone\last\test\src\pages\item-detail\item-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ItemDetailPage);
    return ItemDetailPage;
}());

//# sourceMappingURL=item-detail.js.map

/***/ })

});
//# sourceMappingURL=9.js.map