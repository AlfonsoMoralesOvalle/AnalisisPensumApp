webpackJsonp([5],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogInPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(79);
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
 * Generated class for the LogInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LogInPage = /** @class */ (function () {
    function LogInPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LogInPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LogInPage');
    };
    //FUNCION PARA INGRESAR (AUN SIN AUTENTICACION)
    LogInPage.prototype.Ingresar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    LogInPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-log-in',template:/*ion-inline-start:"C:\Users\Milton Navarro\Documents\proyecto pensum\AnalisisPensumApp\Android_IONIC\PensumApp\src\pages\log-in\log-in.html"*/'<!--\n\n  Generated template for the LogInPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="lblue">\n\n    <ion-title>Pensum App USAC</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <div text-center>\n\n    <!--INPUT DE IMAGEN https://drive.google.com/file/d/1SfS5_qjO4PiCquwXo880zNJY0dlkpMZ0/view?usp=sharing -->\n\n    <ion-img width="200px" height="230px" src="http://docs.google.com/uc?id=1WQJg8Alo_iXM4knxGKL9OwZql5nAIdAY"></ion-img>\n\n  </div>\n\n\n\n  <ion-list inset>\n\n\n\n    <ion-item>\n\n      <ion-label>Usuario</ion-label>\n\n      <ion-input type="text"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <ion-label>Password</ion-label>\n\n        <ion-input type="password"></ion-input>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n\n\n  <div>\n\n      <button full ion-button block (click)="Ingresar()">Sign In</button>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Milton Navarro\Documents\proyecto pensum\AnalisisPensumApp\Android_IONIC\PensumApp\src\pages\log-in\log-in.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], LogInPage);
    return LogInPage;
}());

//# sourceMappingURL=log-in.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgresoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ejemplo_ejemplo__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_servicios_servicios__ = __webpack_require__(46);
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
 * Generated class for the ProgresoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProgresoPage = /** @class */ (function () {
    function ProgresoPage(navCtrl, navParams, ej, loadingCtrl, toastCtrl, servicio) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ej = ej;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.servicio = servicio;
        this.semestre = [];
        this.data = [];
    }
    ProgresoPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ProgresoPage');
        var loader = this.loadingCtrl.create({
            content: "Cargando...",
        });
        loader.present();
        setTimeout(function () {
            loader.dismiss();
            _this.actualizaProgreso();
            _this.cargaElPensumSemstre();
        }, 3000);
        //this.cargarCursos();
    };
    //ENCARGADO DE LA ACTUALIZACION DEL PROGRESO
    ProgresoPage.prototype.actualizaProgreso = function () {
        var _this = this;
        this.servicio.getResumenProgreso().subscribe(function (data) { _this.data = data; });
        console.log(this.data);
    };
    ProgresoPage.prototype.cargarCursos = function () {
        this.cursos = this.ej.getCursosQuePuedoSeguir();
    };
    ProgresoPage.prototype.refrescar = function (refresher) {
        var _this = this;
        setTimeout(function () {
            _this.cargarCursos();
            _this.actualizaProgreso();
            refresher.complete();
        }, 1500);
    };
    ProgresoPage.prototype.agregarInteresado = function (idcurso) {
        this.ej.agregarInteresado(idcurso);
    };
    ProgresoPage.prototype.quitarInteresado = function (idcurso) {
        this.ej.quitarDeInteresados(idcurso);
    };
    ProgresoPage.prototype.existe = function (idcurso) {
        return this.ej.existeInteresado(idcurso);
    };
    ProgresoPage.prototype.presentToast = function (mensaje) {
        var toast = this.toastCtrl.create({
            message: mensaje,
            duration: 2000
        });
        toast.present();
    };
    ProgresoPage.prototype.cargaElPensumSemstre = function () {
        var _this = this;
        for (var i = 1; i < 11; i++) {
            this.servicio.getPensum(i).subscribe(function (data) { _this.semestre.push(data); });
        }
        console.log("hola");
        console.log(this.semestre);
        console.log("hola2");
    };
    ProgresoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-progreso',template:/*ion-inline-start:"C:\Users\Milton Navarro\Documents\proyecto pensum\AnalisisPensumApp\Android_IONIC\PensumApp\src\pages\progreso\progreso.html"*/'<!--\n\n  Generated template for the ProgresoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar hideBackButton color="lblue">\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>\n\n        <ion-icon name="bicycle"></ion-icon>\n\n        Progreso de Pensum\n\n      </ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-refresher (ionRefresh)="refrescar($event)">\n\n      <ion-refresher-content></ion-refresher-content>\n\n  </ion-refresher>\n\n  <ion-list no-border >\n\n\n\n    <ion-list-header>\n\n        Mi Progreso\n\n    </ion-list-header>\n\n    \n\n    <ion-item>\n\n      <div text-center>\n\n        <!-- progress-circle porcentaje donde porcentaje debe ser un numero entero -->\n\n        <div class="progress-circle p{{data.porcentaje}}">\n\n          <span>{{data.porcentaje}}%</span>\n\n          <div class="left-half-clipper">\n\n            <div class="first50-bar"></div>\n\n            <div class="value-bar"></div>\n\n          </div>\n\n        </div>\n\n       </div>\n\n        <h2>Sigue asi llevas el {{data.porcentaje}} % de</h2>\n\n        <h2> Ingenieria en ciencias y sistemas</h2>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      Creditos\n\n      <ion-icon name=\'md-card\' item-left></ion-icon>\n\n      <ion-badge item-right>{{data.numCreditos}}</ion-badge>\n\n    </ion-item>\n\n    \n\n    <ion-item>\n\n        Cursos Aprobados\n\n        <ion-icon name=\'ios-bookmark\' item-left></ion-icon>\n\n        <ion-badge  color="secondary" item-right>{{data.numAprobados}}</ion-badge>\n\n    </ion-item>\n\n    \n\n</ion-list>\n\n\n\n<ion-list-header color="dark">\n\n  Mi Pensum\n\n</ion-list-header>  \n\n\n\n<ion-slides style="width:100%; height:50vh">\n\n<div *ngFor="let sem of semestre; let i = index">\n\n<ion-slide>\n\n  <ion-list>\n\n      <ion-scroll style="width:100%; height:60vh" scrollY="true">\n\n          <ion-item></ion-item>\n\n          <ion-list-header color="primary">\n\n                {{i+1}} Semestre\n\n          </ion-list-header>\n\n          <div *ngFor="let curso of sem">\n\n          <ion-item >\n\n            <ion-thumbnail item-start >\n\n                <ion-badge class = "detcurso2" >Codigo: {{curso.idCurso}}</ion-badge><br/><br/>\n\n                <ion-badge class = "detcurso">Creditos: {{curso.creditos}}</ion-badge>\n\n            </ion-thumbnail>\n\n            <ion-thumbnail item-left >\n\n            <div *ngIf="curso.asignado"> \n\n                <h2>{{curso.Nombre}}</h2>\n\n                <ion-badge  color="secondary" >Estado: Aprobado</ion-badge>\n\n            </div>\n\n            <div div *ngIf="!curso.asignado"> \n\n                <h2>{{curso.Nombre}}</h2>\n\n                <ion-badge  color="primary" >Estado: inactivo</ion-badge>\n\n            </div>\n\n            </ion-thumbnail>\n\n            <ion-thumbnail item-right>\n\n                <h2>PostRequisito:</h2>\n\n                <ion-badge class = "req" >{{curso.posrequisito}}</ion-badge>\n\n            </ion-thumbnail>\n\n          </ion-item>\n\n          </div>\n\n      </ion-scroll>\n\n  </ion-list>\n\n</ion-slide>\n\n</div>  \n\n    \n\n</ion-slides>\n\n\n\n\n\n\n\n<ion-list>\n\n    <ion-item></ion-item>\n\n    <ion-list-header color="dark">\n\n        !Cursos que puedo seguir!\n\n    </ion-list-header>\n\n    <!--\n\n    <div *ngFor="let c of cursos">\n\n      <ion-item>\n\n        <ion-thumbnail item-start>\n\n          <img src="assets/imgs/cursos.png">\n\n        </ion-thumbnail>\n\n        <h2>{{c.Nombre}}</h2>\n\n        <p>Codigo: {{c.idCurso}}</p>\n\n        <div *ngIf="existe(c.idCurso)">\n\n          <button ion-button clear item-end color="danger" (click)="quitarInteresado(c.idCurso)">Quitar de Interesados</button>\n\n        </div>\n\n        <div *ngIf="!existe(c.idCurso)">\n\n          <button ion-button clear item-end (click)="agregarInteresado(c.idCurso)">Me Interesa Seguir</button>\n\n        </div>\n\n      </ion-item>\n\n    </div>\n\n\n\n  -->\n\n\n\n</ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Milton Navarro\Documents\proyecto pensum\AnalisisPensumApp\Android_IONIC\PensumApp\src\pages\progreso\progreso.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_ejemplo_ejemplo__["a" /* EjemploProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__providers_servicios_servicios__["a" /* ServiciosProvider */]])
    ], ProgresoPage);
    return ProgresoPage;
}());

//# sourceMappingURL=progreso.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerPensumPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_servicios_servicios__ = __webpack_require__(46);
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
 * Generated class for the VerPensumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VerPensumPage = /** @class */ (function () {
    function VerPensumPage(navCtrl, navParams, servicio, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.servicio = servicio;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.semes = 1;
        this.semestre = [
            {
                "numCreditos": 0,
                "numAprobados": 0,
                "porcentaje": 0
            }
        ];
    }
    VerPensumPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VerPensumPage');
        //this.recargar(500);
        this.cargaElPensumSemstre(this.semes);
    };
    VerPensumPage.prototype.cargaElPensumSemstre = function (idSemestre) {
        var _this = this;
        this.recargar(950);
        this.servicio.getPensum(idSemestre).subscribe(function (data) { _this.semestre = data; });
        console.log(this.semestre);
    };
    VerPensumPage.prototype.recargar = function (tiempo) {
        var loading = this.loadingCtrl.create({
            content: 'Espera...'
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
            console.log("finalizado!");
        }, tiempo);
    };
    VerPensumPage.prototype.marcar = function (idCurso, idSemestre) {
        var _this = this;
        this.recargar(300);
        this.servicio.marcarAprobado(idSemestre, idCurso).subscribe(function (data) { _this.presentToast(2000, data); }, function (error) { _this.presentToast(2000, "Error, no se pudo completar transaccion!"); });
        this.cargaElPensumSemstre(idSemestre);
    };
    VerPensumPage.prototype.desmarcar = function (idCurso, idSemestre) {
        var _this = this;
        this.recargar(300);
        this.servicio.desmacarAprobado(idSemestre, idCurso).subscribe(function (data) { _this.presentToast(2000, data); }, function (error) { _this.presentToast(2000, "Error, no se pudo completar transaccion!"); });
        this.cargaElPensumSemstre(idSemestre);
    };
    VerPensumPage.prototype.presentToast = function (tiempo, mensaje) {
        var toast = this.toastCtrl.create({
            message: mensaje,
            duration: tiempo
        });
        toast.present();
    };
    VerPensumPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ver-pensum',template:/*ion-inline-start:"C:\Users\Milton Navarro\Documents\proyecto pensum\AnalisisPensumApp\Android_IONIC\PensumApp\src\pages\ver-pensum\ver-pensum.html"*/'<!--\n\n  Generated template for the VerPensumPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar hideBackButton color="lblue">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      <ion-icon name="eye"></ion-icon>\n\n      Visualizar el Pensum\n\n    </ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n   <!--PARTE DE LA SECCION DE LA CABECERA-->\n\n    <ion-segment [(ngModel)]="semes">\n\n        <ion-segment-button (click)="cargaElPensumSemstre(1)" value="1">\n\n            1\n\n        </ion-segment-button>\n\n        <ion-segment-button (click)="cargaElPensumSemstre(2)" value="2">\n\n            2\n\n        </ion-segment-button>\n\n        <ion-segment-button (click)="cargaElPensumSemstre(3)" value="3">\n\n            3\n\n        </ion-segment-button>\n\n        <ion-segment-button (click)="cargaElPensumSemstre(4)" value="4">\n\n            4\n\n        </ion-segment-button>\n\n        <ion-segment-button (click)="cargaElPensumSemstre(5)" value="5">\n\n            5\n\n        </ion-segment-button>\n\n        <ion-segment-button (click)="cargaElPensumSemstre(6)" value="6">\n\n            6\n\n        </ion-segment-button>\n\n        <ion-segment-button (click)="cargaElPensumSemstre(7)" value="7">\n\n            7\n\n        </ion-segment-button>\n\n        <ion-segment-button (click)="cargaElPensumSemstre(8)" value="8">\n\n            8\n\n        </ion-segment-button>\n\n        <ion-segment-button (click)="cargaElPensumSemstre(9)" value="9">\n\n            9\n\n        </ion-segment-button>\n\n        <ion-segment-button (click)="cargaElPensumSemstre(10)" value="10">\n\n            10\n\n        </ion-segment-button>\n\n    </ion-segment>\n\n\n\n    <!--SE VA A DESPLEGAR LA INFORMACION DE LOS SEMESTRES-->\n\n    <div [ngSwitch]="semes">\n\n      <!--SEMESTRE 1-->\n\n      <div *ngSwitchCase="\'1\'">\n\n          <ion-list>\n\n          <ion-list-header color="dark">\n\n            Primer Semestre\n\n          </ion-list-header>\n\n          <div *ngFor="let c of semestre">\n\n            <ion-card>\n\n              <ion-card-header>\n\n                <h1>{{c.Nombre}}</h1>\n\n              </ion-card-header>\n\n              <ion-card-content>\n\n                <p>Codigo: {{c.idCurso}}</p>\n\n                <br>\n\n                <p>Creditos: <ion-badge item-left color="secondary">{{c.creditos}}</ion-badge></p>\n\n                <br>\n\n                <p>Postrequisito: {{c.posrequisito}}</p>\n\n                <div *ngIf="c.asignado">\n\n                  <button  full ion-button color="secondary" (click)="desmarcar(c.idCurso, 1)">Quitar de Aprobados</button>\n\n                </div>\n\n                <div *ngIf="!c.asignado">\n\n                    <button  full ion-button color="danger" (click)="marcar(c.idCurso, 1)">Marcar Como Aprobado</button>\n\n                </div>\n\n              </ion-card-content>\n\n            </ion-card>\n\n          </div>\n\n          </ion-list>\n\n      </div>\n\n      <!--SEMESTRE 2-->\n\n      <div *ngSwitchCase="\'2\'">\n\n          <ion-list>\n\n            <ion-list-header color="dark">\n\n              Segundo Semestre\n\n            </ion-list-header>\n\n            <div *ngFor="let c of semestre">\n\n              <ion-card>\n\n                <ion-card-header>\n\n                  <h1>{{c.Nombre}}</h1>\n\n                </ion-card-header>\n\n                <ion-card-content>\n\n                  <p>Codigo: {{c.idCurso}}</p>\n\n                  <br>\n\n                  <p>Creditos: <ion-badge item-left color="secondary">{{c.creditos}}</ion-badge></p>\n\n                  <br>\n\n                  <p>Postrequisito: {{c.posrequisito}}</p>\n\n                  <div *ngIf="c.asignado">\n\n                    <button  full ion-button color="secondary" (click)="desmarcar(c.idCurso, 2)">Quitar de Aprobados</button>\n\n                  </div>\n\n                  <div *ngIf="!c.asignado">\n\n                      <button  full ion-button color="danger" (click)="marcar(c.idCurso, 2)">Marcar Como Aprobado</button>\n\n                  </div>\n\n                </ion-card-content>\n\n              </ion-card>\n\n            </div>\n\n          </ion-list>\n\n        </div>\n\n      <!--SEMESTRE 3-->\n\n      <div *ngSwitchCase="\'3\'">\n\n          <ion-list>\n\n              <ion-list-header color="dark">\n\n                Tercer Semestre\n\n              </ion-list-header>\n\n              <div *ngFor="let c of semestre">\n\n                <ion-card>\n\n                  <ion-card-header>\n\n                    <h1>{{c.Nombre}}</h1>\n\n                  </ion-card-header>\n\n                  <ion-card-content>\n\n                    <p>Codigo: {{c.idCurso}}</p>\n\n                    <br>\n\n                    <p>Creditos: <ion-badge item-left color="secondary">{{c.creditos}}</ion-badge></p>\n\n                    <br>\n\n                    <p>Postrequisito: {{c.posrequisito}}</p>\n\n                    <div *ngIf="c.asignado">\n\n                      <button  full ion-button color="secondary" (click)="desmarcar(c.idCurso, 3)">Quitar de Aprobados</button>\n\n                    </div>\n\n                    <div *ngIf="!c.asignado">\n\n                        <button  full ion-button color="danger" (click)="marcar(c.idCurso, 3)">Marcar Como Aprobado</button>\n\n                    </div>\n\n                  </ion-card-content>\n\n                </ion-card>\n\n              </div>\n\n            </ion-list>\n\n      </div>\n\n      <!--SEMESTRE 4-->\n\n      <div *ngSwitchCase="\'4\'">\n\n          <ion-list>\n\n              <ion-list-header color="dark">\n\n                Cuarto Semestre\n\n              </ion-list-header>\n\n              <div *ngFor="let c of semestre">\n\n                <ion-card>\n\n                  <ion-card-header>\n\n                    <h1>{{c.Nombre}}</h1>\n\n                  </ion-card-header>\n\n                  <ion-card-content>\n\n                    <p>Codigo: {{c.idCurso}}</p>\n\n                    <br>\n\n                    <p>Creditos: <ion-badge item-left color="secondary">{{c.creditos}}</ion-badge></p>\n\n                    <br>\n\n                    <p>Postrequisito: {{c.posrequisito}}</p>\n\n                    <div *ngIf="c.asignado">\n\n                      <button  full ion-button color="secondary" (click)="desmarcar(c.idCurso, 4)">Quitar de Aprobados</button>\n\n                    </div>\n\n                    <div *ngIf="!c.asignado">\n\n                        <button  full ion-button color="danger" (click)="marcar(c.idCurso, 4)">Marcar Como Aprobado</button>\n\n                    </div>\n\n                  </ion-card-content>\n\n                </ion-card>\n\n              </div>\n\n            </ion-list>\n\n      </div>\n\n      <!--SEMESTRE 5-->\n\n      <div *ngSwitchCase="\'5\'">\n\n          <ion-list>\n\n              <ion-list-header color="dark">\n\n                Quinto Semestre\n\n              </ion-list-header>\n\n              <div *ngFor="let c of semestre">\n\n                <ion-card>\n\n                  <ion-card-header>\n\n                    <h1>{{c.Nombre}}</h1>\n\n                  </ion-card-header>\n\n                  <ion-card-content>\n\n                    <p>Codigo: {{c.idCurso}}</p>\n\n                    <br>\n\n                    <p>Creditos: <ion-badge item-left color="secondary">{{c.creditos}}</ion-badge></p>\n\n                    <br>\n\n                    <p>Postrequisito: {{c.posrequisito}}</p>\n\n                    <div *ngIf="c.asignado">\n\n                      <button  full ion-button color="secondary" (click)="desmarcar(c.idCurso, 5)">Quitar de Aprobados</button>\n\n                    </div>\n\n                    <div *ngIf="!c.asignado">\n\n                        <button  full ion-button color="danger" (click)="marcar(c.idCurso, 5)">Marcar Como Aprobado</button>\n\n                    </div>\n\n                  </ion-card-content>\n\n                </ion-card>\n\n              </div>\n\n            </ion-list>\n\n      </div>\n\n      <!--SEMESTRE 6-->\n\n      <div *ngSwitchCase="\'6\'">\n\n          <ion-list>\n\n              <ion-list-header color="dark">\n\n                Sexto Semestre\n\n              </ion-list-header>\n\n              <div *ngFor="let c of semestre">\n\n                <ion-card>\n\n                  <ion-card-header>\n\n                    <h1>{{c.Nombre}}</h1>\n\n                  </ion-card-header>\n\n                  <ion-card-content>\n\n                    <p>Codigo: {{c.idCurso}}</p>\n\n                    <br>\n\n                    <p>Creditos: <ion-badge item-left color="secondary">{{c.creditos}}</ion-badge></p>\n\n                    <br>\n\n                    <p>Postrequisito: {{c.posrequisito}}</p>\n\n                    <div *ngIf="c.asignado">\n\n                      <button  full ion-button color="secondary" (click)="desmarcar(c.idCurso, 6)">Quitar de Aprobados</button>\n\n                    </div>\n\n                    <div *ngIf="!c.asignado">\n\n                        <button  full ion-button color="danger" (click)="marcar(c.idCurso, 6)">Marcar Como Aprobado</button>\n\n                    </div>\n\n                  </ion-card-content>\n\n                </ion-card>\n\n              </div>\n\n            </ion-list>\n\n      </div>\n\n      <!--SEMESTRE 7-->\n\n      <div *ngSwitchCase="\'7\'">\n\n          <ion-list>\n\n              <ion-list-header color="dark">\n\n                Septimo Semestre\n\n              </ion-list-header>\n\n              <div *ngFor="let c of semestre">\n\n                <ion-card>\n\n                  <ion-card-header>\n\n                    <h1>{{c.Nombre}}</h1>\n\n                  </ion-card-header>\n\n                  <ion-card-content>\n\n                    <p>Codigo: {{c.idCurso}}</p>\n\n                    <br>\n\n                    <p>Creditos: <ion-badge item-left color="secondary">{{c.creditos}}</ion-badge></p>\n\n                    <br>\n\n                    <p>Postrequisito: {{c.posrequisito}}</p>\n\n                    <div *ngIf="c.asignado">\n\n                      <button  full ion-button color="secondary" (click)="desmarcar(c.idCurso, 7)">Quitar de Aprobados</button>\n\n                    </div>\n\n                    <div *ngIf="!c.asignado">\n\n                        <button  full ion-button color="danger" (click)="marcar(c.idCurso, 7)">Marcar Como Aprobado</button>\n\n                    </div>\n\n                  </ion-card-content>\n\n                </ion-card>\n\n              </div>\n\n            </ion-list>\n\n      </div>\n\n      <!--SEMESTRE 8-->\n\n      <div *ngSwitchCase="\'8\'">\n\n          <ion-list>\n\n              <ion-list-header color="dark">\n\n                Octavo Semestre\n\n              </ion-list-header>\n\n              <div *ngFor="let c of semestre">\n\n                <ion-card>\n\n                  <ion-card-header>\n\n                    <h1>{{c.Nombre}}</h1>\n\n                  </ion-card-header>\n\n                  <ion-card-content>\n\n                    <p>Codigo: {{c.idCurso}}</p>\n\n                    <br>\n\n                    <p>Creditos: <ion-badge item-left color="secondary">{{c.creditos}}</ion-badge></p>\n\n                    <br>\n\n                    <p>Postrequisito: {{c.posrequisito}}</p>\n\n                    <div *ngIf="c.asignado">\n\n                      <button  full ion-button color="secondary" (click)="desmarcar(c.idCurso, 8)">Quitar de Aprobados</button>\n\n                    </div>\n\n                    <div *ngIf="!c.asignado">\n\n                        <button  full ion-button color="danger" (click)="marcar(c.idCurso, 8)">Marcar Como Aprobado</button>\n\n                    </div>\n\n                  </ion-card-content>\n\n                </ion-card>\n\n              </div>\n\n            </ion-list>\n\n      </div>\n\n      <!--SEMESTRE 9-->\n\n      <div *ngSwitchCase="\'9\'">\n\n          <ion-list>\n\n              <ion-list-header color="dark">\n\n                Noveno Semestre\n\n              </ion-list-header>\n\n              <div *ngFor="let c of semestre">\n\n                <ion-card>\n\n                  <ion-card-header>\n\n                    <h1>{{c.Nombre}}</h1>\n\n                  </ion-card-header>\n\n                  <ion-card-content>\n\n                    <p>Codigo: {{c.idCurso}}</p>\n\n                    <br>\n\n                    <p>Creditos: <ion-badge item-left color="secondary">{{c.creditos}}</ion-badge></p>\n\n                    <br>\n\n                    <p>Postrequisito: {{c.posrequisito}}</p>\n\n                    <div *ngIf="c.asignado">\n\n                      <button  full ion-button color="secondary" (click)="desmarcar(c.idCurso, 9)">Quitar de Aprobados</button>\n\n                    </div>\n\n                    <div *ngIf="!c.asignado">\n\n                        <button  full ion-button color="danger" (click)="marcar(c.idCurso, 9)">Marcar Como Aprobado</button>\n\n                    </div>\n\n                  </ion-card-content>\n\n                </ion-card>\n\n              </div>\n\n            </ion-list>\n\n      </div>\n\n      <!--SEMESTRE 10-->\n\n      <div *ngSwitchCase="\'10\'">\n\n          <ion-list>\n\n              <ion-list-header color="dark">\n\n                Decimo Semestre\n\n              </ion-list-header>\n\n              <div *ngFor="let c of semestre">\n\n                <ion-card>\n\n                  <ion-card-header>\n\n                    <h1>{{c.Nombre}}</h1>\n\n                  </ion-card-header>\n\n                  <ion-card-content>\n\n                    <p>Codigo: {{c.idCurso}}</p>\n\n                    <br>\n\n                    <p>Creditos: <ion-badge item-left color="secondary">{{c.creditos}}</ion-badge></p>\n\n                    <br>\n\n                    <p>Postrequisito: {{c.posrequisito}}</p>\n\n                    <div *ngIf="c.asignado">\n\n                      <button  full ion-button color="secondary" (click)="desmarcar(c.idCurso, 10)">Quitar de Aprobados</button>\n\n                    </div>\n\n                    <div *ngIf="!c.asignado">\n\n                        <button  full ion-button color="danger" (click)="marcar(c.idCurso, 10)">Marcar Como Aprobado</button>\n\n                    </div>\n\n                  </ion-card-content>\n\n                </ion-card>\n\n              </div>\n\n            </ion-list>\n\n      </div>\n\n    </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Milton Navarro\Documents\proyecto pensum\AnalisisPensumApp\Android_IONIC\PensumApp\src\pages\ver-pensum\ver-pensum.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_servicios_servicios__["a" /* ServiciosProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], VerPensumPage);
    return VerPensumPage;
}());

//# sourceMappingURL=ver-pensum.js.map

/***/ }),

/***/ 118:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/agregar-curso/agregar-curso.module": [
		283,
		1
	],
	"../pages/log-in/log-in.module": [
		284,
		4
	],
	"../pages/pensum/pensum.module": [
		285,
		0
	],
	"../pages/progreso/progreso.module": [
		286,
		3
	],
	"../pages/ver-pensum/ver-pensum.module": [
		287,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 159;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_log_in_log_in__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_progreso_progreso__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_ver_pensum_ver_pensum__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_servicios_servicios__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_user_service_user_service__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_ejemplo_ejemplo__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_http__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










//import { AgregarCursoPage } from "../pages/agregar-curso/agregar-curso";






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_log_in_log_in__["a" /* LogInPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_progreso_progreso__["a" /* ProgresoPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_ver_pensum_ver_pensum__["a" /* VerPensumPage */]
                //AgregarCursoPage
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/agregar-curso/agregar-curso.module#AgregarCursoPageModule', name: 'AgregarCursoPage', segment: 'agregar-curso', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/log-in/log-in.module#LogInPageModule', name: 'LogInPage', segment: 'log-in', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pensum/pensum.module#PensumPageModule', name: 'PensumPage', segment: 'pensum', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/progreso/progreso.module#ProgresoPageModule', name: 'ProgresoPage', segment: 'progreso', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ver-pensum/ver-pensum.module#VerPensumPageModule', name: 'VerPensumPage', segment: 'ver-pensum', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_http__["b" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_log_in_log_in__["a" /* LogInPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_progreso_progreso__["a" /* ProgresoPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_ver_pensum_ver_pensum__["a" /* VerPensumPage */]
                //AgregarCursoPage
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_servicios_servicios__["a" /* ServiciosProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_user_service_user_service__["a" /* UserServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_ejemplo_ejemplo__["a" /* EjemploProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_log_in_log_in__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_progreso_progreso__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_ver_pensum_ver_pensum__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        //rootPage: any = HomePage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_log_in_log_in__["a" /* LogInPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Ver Mi Horario', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            //{ title: 'List', component: ListPage }
            { title: 'Ver Mi Progreso', component: __WEBPACK_IMPORTED_MODULE_6__pages_progreso_progreso__["a" /* ProgresoPage */] },
            { title: 'Log Out', component: __WEBPACK_IMPORTED_MODULE_5__pages_log_in_log_in__["a" /* LogInPage */] },
            { title: 'Ver Pensum', component: __WEBPACK_IMPORTED_MODULE_7__pages_ver_pensum_ver_pensum__["a" /* VerPensumPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        if (page == 'Log Out') {
            this.nav.popToRoot();
        }
        else {
            this.nav.setRoot(page.component);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Milton Navarro\Documents\proyecto pensum\AnalisisPensumApp\Android_IONIC\PensumApp\src\app\app.html"*/'<ion-menu [content]="content" persistent="true">\n\n  <ion-header>\n\n    <ion-toolbar color="lblue">\n\n      <ion-title>\n\n        <ion-icon name="apps"></ion-icon>\n\n        Menu Principal\n\n      </ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        <ion-icon name="arrow-forward"></ion-icon>\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Milton Navarro\Documents\proyecto pensum\AnalisisPensumApp\Android_IONIC\PensumApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
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


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\Milton Navarro\Documents\proyecto pensum\AnalisisPensumApp\Android_IONIC\PensumApp\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n\n      {{item.title}}\n\n      <div class="item-note" item-end>\n\n        {{item.note}}\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n  <div *ngIf="selectedItem" padding>\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Milton Navarro\Documents\proyecto pensum\AnalisisPensumApp\Android_IONIC\PensumApp\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UserServiceProvider = /** @class */ (function () {
    function UserServiceProvider(http) {
        this.http = http;
        console.log('Hello UserServiceProvider Provider');
    }
    UserServiceProvider.prototype.getRandomUser = function () {
        return this.http.get('https://randomuser.me/api/?results=25');
    };
    UserServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], UserServiceProvider);
    return UserServiceProvider;
}());

//# sourceMappingURL=user-service.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiciosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { HttpClientModule } from '@angular/common/http';
//import { HTTP } from '@ionic-native/http';
/*
  Generated class for the ServiciosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ServiciosProvider = /** @class */ (function () {
    function ServiciosProvider(helper) {
        this.helper = helper;
        this.dominio = "https://vast-waters-26850.herokuapp.com";
        console.log('Hello ServiciosProvider Provider');
    }
    //FUNCION ENCARGADA DE PODER TRAER EL PENSUM NECESARIO
    ServiciosProvider.prototype.getPensum = function (idSemestre) {
        var url = this.dominio + "/api/get_obtenerCursosPensum";
        var postData = new FormData();
        postData.append('carnet', '201503476');
        postData.append('idCarrera', '09');
        postData.append('idSemestre', idSemestre);
        return this.helper.post(url, postData).map(function (res) { return res.json(); });
    };
    //MARCA EL EL CURSO COMO ARPOBADO
    ServiciosProvider.prototype.marcarAprobado = function (idSemestre, idCurso) {
        var url = this.dominio + "/api/pensum_asignarCursosAprobadosPensum";
        var postData = new FormData();
        postData.append('carnet', '201503476');
        postData.append('idCarrera', '09');
        postData.append('idCurso', idCurso);
        postData.append('idSemestre', idSemestre);
        return this.helper.post(url, postData).map(function (res) { return res.json(); });
    };
    //DESMARCAR UN CURSO COMO APROBADO
    ServiciosProvider.prototype.desmacarAprobado = function (idSemestre, idCurso) {
        var url = this.dominio + "/api/pensum_desasignarCursosAprobadosPensum";
        var postData = new FormData();
        postData.append('carnet', '201503476');
        postData.append('idCarrera', '09');
        postData.append('idCurso', idCurso);
        postData.append('idSemestre', idSemestre);
        return this.helper.post(url, postData).map(function (res) { return res.json(); });
    };
    ServiciosProvider.prototype.getResumenProgreso = function () {
        var url = this.dominio + "/api/obtenerProgresoDeLaCarrera";
        var postData = new FormData();
        postData.append('carnet', '201503476');
        postData.append('idCarrera', '09');
        return this.helper.post(url, postData).map(function (res) { return res.json(); });
    };
    ServiciosProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ServiciosProvider);
    return ServiciosProvider;
}());

//# sourceMappingURL=servicios.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_servicios_servicios__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_ejemplo_ejemplo__ = __webpack_require__(80);
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
    function HomePage(navCtrl, modal, proveedor, ej) {
        this.navCtrl = navCtrl;
        this.modal = modal;
        this.proveedor = proveedor;
        this.ej = ej;
    }
    //ABRE EL MODAL PARA PODER AGREGAR UN CURSO NUEVO
    HomePage.prototype.addCourse = function () {
        var nueva = this.modal.create('AgregarCursoPage');
        nueva.present();
    };
    HomePage.prototype.ionViewDidLoad = function () {
        //AUN NO CARGO NADA
    };
    HomePage.prototype.cargarDatosDeDia = function (idDia) {
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Milton Navarro\Documents\proyecto pensum\AnalisisPensumApp\Android_IONIC\PensumApp\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton color="lblue">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n        <ion-icon name="calendar"></ion-icon>\n\n        Mi Horario\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-fab bottom right>\n\n        <button ion-fab (click)="addCourse()" color="primary">\n\n            <ion-icon name="add-circle"></ion-icon>\n\n        </button>\n\n    </ion-fab>\n\n\n\n    <!--\n\n        AQUI EMPIEZA LA NUEVA INTERFAZ\n\n    -->\n\n    <ion-segment [(ngModel)]="days">\n\n        <ion-segment-button value="lun">\n\n            Lun\n\n        </ion-segment-button>\n\n        <ion-segment-button value="mar">\n\n            Mar\n\n        </ion-segment-button>\n\n        <ion-segment-button value="mie">\n\n            Mierc\n\n        </ion-segment-button>\n\n        <ion-segment-button value="juv">\n\n            Jue\n\n        </ion-segment-button>\n\n        <ion-segment-button value="vie">\n\n            Vier\n\n        </ion-segment-button>\n\n        <ion-segment-button value="sab">\n\n            Sab\n\n        </ion-segment-button>\n\n    </ion-segment>\n\n\n\n    <div [ngSwitch]="days">\n\n        <!--MARTES-->\n\n        <div *ngSwitchCase="\'lun\'">\n\n            \n\n        </div>\n\n        <!--VIERNES-->\n\n        <div *ngSwitchCase="\'vie\'">\n\n           \n\n        </div>\n\n\n\n        <!--JUEVES-->\n\n\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Milton Navarro\Documents\proyecto pensum\AnalisisPensumApp\Android_IONIC\PensumApp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_servicios_servicios__["a" /* ServiciosProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_ejemplo_ejemplo__["a" /* EjemploProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EjemploProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the EjemploProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var EjemploProvider = /** @class */ (function () {
    function EjemploProvider(http) {
        this.http = http;
        this.interesados = [];
        console.log('Hello EjemploProvider Provider');
    }
    //POST DATA
    EjemploProvider.prototype.envioPorPost = function () {
        /* var url = "https://vast-waters-26850.herokuapp.com/api/post_obtenerCursosQuePuedeLlevar";
         let postData = new FormData();
         postData.append('carne','201503476');
         postData.append('idCarrera','09');
         this.data = this.http.post(url, postData);
         this.data.subscribe(data =>{
           console.log(data);
         });*/
        /*var url = "https://vast-waters-26850.herokuapp.com/api/obtenerCursosQuePuedeLlevar";
        this.data = this.http.get(url);
        this.data.subscribe(
          (data)=>{this.data = data; console.log(data);},
          (error)=>{console.log("error");}
        );*/
    };
    //OBTENIENDO LOS CURSOS QUE PUEDO SEGUR PARA LA VISTA DE QUE PUEDO SEGUIR
    EjemploProvider.prototype.getCursosQuePuedoSeguir = function () {
        var _this = this;
        var url = "https://vast-waters-26850.herokuapp.com/api/obtenerCursosQuePuedeLlevar";
        this.http.get(url).subscribe(function (data) {
            _this.datos = data;
        });
        return this.datos;
    };
    //PARA PODER LLEVAR EL CONTROL DE LOS CURSOS QUE YA DECIDI SEGUIR
    EjemploProvider.prototype.agregarInteresado = function (idCurso) {
        var bandera = false;
        this.interesados.forEach(function (value) {
            if (value.idCurso == idCurso) {
                bandera = true;
            }
        });
        if (!bandera) {
            this.interesados.push({ "idCurso": idCurso });
        }
        console.log(JSON.stringify(this.interesados));
    };
    EjemploProvider.prototype.existeInteresado = function (idCurso) {
        var bandera = false;
        this.interesados.forEach(function (value) {
            if (value.idCurso == idCurso) {
                bandera = true;
            }
        });
        return bandera;
    };
    EjemploProvider.prototype.quitarDeInteresados = function (idCurso) {
        var index = 0;
        var aux = 0;
        this.interesados.forEach(function (value) {
            if (value.idCurso == idCurso) {
                index = aux;
            }
            aux++;
        });
        this.interesados.splice(index, 1);
    };
    EjemploProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], EjemploProvider);
    return EjemploProvider;
}());

//# sourceMappingURL=ejemplo.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map