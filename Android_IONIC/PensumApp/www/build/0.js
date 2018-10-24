webpackJsonp([0],{

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VNoticiaPageModule", function() { return VNoticiaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__v_noticia__ = __webpack_require__(296);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VNoticiaPageModule = /** @class */ (function () {
    function VNoticiaPageModule() {
    }
    VNoticiaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__v_noticia__["a" /* VNoticiaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__v_noticia__["a" /* VNoticiaPage */]),
            ],
        })
    ], VNoticiaPageModule);
    return VNoticiaPageModule;
}());

//# sourceMappingURL=v-noticia.module.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VNoticiaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
 * Generated class for the VNoticiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VNoticiaPage = /** @class */ (function () {
    function VNoticiaPage(navCtrl, view, navParams) {
        this.navCtrl = navCtrl;
        this.view = view;
        this.navParams = navParams;
    }
    VNoticiaPage.prototype.ionViewWillLoad = function () {
        console.log('ionViewDidLoad VNoticiaPage');
        this.datos = this.navParams.get('data');
        console.log(this.datos);
    };
    VNoticiaPage.prototype.cerrar = function () {
        this.view.dismiss();
    };
    VNoticiaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-v-noticia',template:/*ion-inline-start:"C:\Users\ricar\Documents\Universidad\Segundo_S_2018\Analisis_y_Diseno_1\Repo_Proyecto\AnalisisPensumApp\Android_IONIC\PensumApp\src\pages\v-noticia\v-noticia.html"*/'<!--\n  Generated template for the VNoticiaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar hideBackButton color="lblue">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>\n        <ion-icon name="alarm"></ion-icon>\n        {{datos.title}}\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n  <div text-center>\n    <h3>{{datos.text}}</h3>\n    <p>\n      Fecha de publicacion: {{datos.date}} \n    </p>\n    <p>\n      Hora de publicacion: {{datos.hour}}\n    </p>\n    <p>\n      <button full ion-button (click)="cerrar()">Cerrar</button>\n    </p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\ricar\Documents\Universidad\Segundo_S_2018\Analisis_y_Diseno_1\Repo_Proyecto\AnalisisPensumApp\Android_IONIC\PensumApp\src\pages\v-noticia\v-noticia.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], VNoticiaPage);
    return VNoticiaPage;
}());

//# sourceMappingURL=v-noticia.js.map

/***/ })

});
//# sourceMappingURL=0.js.map