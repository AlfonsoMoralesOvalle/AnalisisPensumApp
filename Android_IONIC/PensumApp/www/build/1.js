webpackJsonp([1],{

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgregarCursoPageModule", function() { return AgregarCursoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agregar_curso__ = __webpack_require__(288);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AgregarCursoPageModule = /** @class */ (function () {
    function AgregarCursoPageModule() {
    }
    AgregarCursoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__agregar_curso__["a" /* AgregarCursoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__agregar_curso__["a" /* AgregarCursoPage */]),
            ],
        })
    ], AgregarCursoPageModule);
    return AgregarCursoPageModule;
}());

//# sourceMappingURL=agregar-curso.module.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgregarCursoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the AgregarCursoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AgregarCursoPage = /** @class */ (function () {
    function AgregarCursoPage(navCtrl, navParams, view) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
    }
    AgregarCursoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AgregarCursoPage');
    };
    //SE VA A ENCARGAR DE CERRAR EL MODAL
    AgregarCursoPage.prototype.cerrar = function () {
        this.view.dismiss();
    };
    AgregarCursoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-agregar-curso',template:/*ion-inline-start:"C:\Users\Milton Navarro\Documents\proyecto super nuevo\AnalisisPensumApp\Android_IONIC\PensumApp\src\pages\agregar-curso\agregar-curso.html"*/'<!--\n\n  Generated template for the AgregarCursoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Agregar Curso\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="cerrar()"><ion-icon name="close"></ion-icon></button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-card>\n\n    <ion-card-header>\n\n        <h1>Escoje tu Curso:</h1>\n\n    </ion-card-header>\n\n    <ion-list>\n\n        <ion-item>\n\n            <ion-label>Curso</ion-label>\n\n            <ion-select [(ngModel)]="curso">\n\n              <ion-option value="Compiladores 2">Compiladores 2</ion-option>\n\n              <ion-option value="Analisis 1">Analisis y Diseno 1</ion-option>\n\n              <ion-option value="Redes 1">Redes 1</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label>Horario</ion-label>\n\n            <ion-select [(ngModel)]="hora">\n\n              <ion-option value="1">Lunes - Viernes 7:00 </ion-option>\n\n              <ion-option value="2">Sabado 12:00</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label>Seccion</ion-label>\n\n            <ion-select [(ngModel)]="hora">\n\n              <ion-option value="1">A</ion-option>\n\n              <ion-option value="2">B</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n        <ion-item>\n\n          <button ion-button full> Agregar a Horario</button>\n\n        </ion-item>\n\n    </ion-list>\n\n  </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Milton Navarro\Documents\proyecto super nuevo\AnalisisPensumApp\Android_IONIC\PensumApp\src\pages\agregar-curso\agregar-curso.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], AgregarCursoPage);
    return AgregarCursoPage;
}());

//# sourceMappingURL=agregar-curso.js.map

/***/ })

});
//# sourceMappingURL=1.js.map