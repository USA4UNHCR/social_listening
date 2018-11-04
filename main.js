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

/***/ "./src/app/_modules/app-material.module.ts":
/*!*************************************************!*\
  !*** ./src/app/_modules/app-material.module.ts ***!
  \*************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/_modules/app-routing.module.ts":
/*!************************************************!*\
  !*** ./src/app/_modules/app-routing.module.ts ***!
  \************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _social_social_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../social/social.component */ "./src/app/social/social.component.ts");
/* harmony import */ var _water_water_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../water/water.component */ "./src/app/water/water.component.ts");
/* harmony import */ var _social_twitter_social_twitter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../social-twitter/social-twitter.component */ "./src/app/social-twitter/social-twitter.component.ts");
/* harmony import */ var _social_news_social_news_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../social-news/social-news.component */ "./src/app/social-news/social-news.component.ts");
/* harmony import */ var _social_landing_social_landing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../social-landing/social-landing.component */ "./src/app/social-landing/social-landing.component.ts");
/* harmony import */ var _social_all_social_all_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../social-all/social-all.component */ "./src/app/social-all/social-all.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: 'social-listening',
        component: _social_social_component__WEBPACK_IMPORTED_MODULE_2__["SocialComponent"],
        children: [
            {
                path: '',
                component: _social_landing_social_landing_component__WEBPACK_IMPORTED_MODULE_6__["SocialLandingComponent"]
            },
            {
                path: 'twitter',
                component: _social_twitter_social_twitter_component__WEBPACK_IMPORTED_MODULE_4__["SocialTwitterComponent"]
            },
            {
                path: 'news',
                component: _social_news_social_news_component__WEBPACK_IMPORTED_MODULE_5__["SocialNewsComponent"]
            },
            {
                path: 'all',
                component: _social_all_social_all_component__WEBPACK_IMPORTED_MODULE_7__["SocialAllComponent"]
            }
        ]
    },
    {
        path: 'water-accessing',
        component: _water_water_component__WEBPACK_IMPORTED_MODULE_3__["WaterComponent"]
    },
    {
        path: '**',
        redirectTo: 'social-listening'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modules_app_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_modules/app-material.module */ "./src/app/_modules/app-material.module.ts");
/* harmony import */ var _modules_app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_modules/app-routing.module */ "./src/app/_modules/app-routing.module.ts");
/* harmony import */ var angular_tag_cloud_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-tag-cloud-module */ "./node_modules/angular-tag-cloud-module/fesm5/angular-tag-cloud-module.js");
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app/app.component */ "./src/app/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _social_social_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./social/social.component */ "./src/app/social/social.component.ts");
/* harmony import */ var _water_water_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./water/water.component */ "./src/app/water/water.component.ts");
/* harmony import */ var _social_twitter_social_twitter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./social-twitter/social-twitter.component */ "./src/app/social-twitter/social-twitter.component.ts");
/* harmony import */ var _social_news_social_news_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./social-news/social-news.component */ "./src/app/social-news/social-news.component.ts");
/* harmony import */ var _social_landing_social_landing_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./social-landing/social-landing.component */ "./src/app/social-landing/social-landing.component.ts");
/* harmony import */ var _social_all_social_all_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./social-all/social-all.component */ "./src/app/social-all/social-all.component.ts");
/* harmony import */ var _social_maps_social_maps_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./social-maps/social-maps.component */ "./src/app/social-maps/social-maps.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _social_twitter_country_tweet_social_twitter_country_tweet_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./social-twitter-country-tweet/social-twitter-country-tweet.component */ "./src/app/social-twitter-country-tweet/social-twitter-country-tweet.component.ts");
/* harmony import */ var _social_twitter_wordcloud_social_twitter_wordcloud_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./social-twitter-wordcloud/social-twitter-wordcloud.component */ "./src/app/social-twitter-wordcloud/social-twitter-wordcloud.component.ts");
/* harmony import */ var _social_twitter_countries_tweet_social_twitter_countries_tweet_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./social-twitter-countries-tweet/social-twitter-countries-tweet.component */ "./src/app/social-twitter-countries-tweet/social-twitter-countries-tweet.component.ts");
/* harmony import */ var _social_news_breitbart_wordcloud_social_news_breitbart_wordcloud_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./social-news-breitbart-wordcloud/social-news-breitbart-wordcloud.component */ "./src/app/social-news-breitbart-wordcloud/social-news-breitbart-wordcloud.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// MODULES



// COMPONENTS














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _social_social_component__WEBPACK_IMPORTED_MODULE_7__["SocialComponent"],
                _water_water_component__WEBPACK_IMPORTED_MODULE_8__["WaterComponent"],
                _social_twitter_social_twitter_component__WEBPACK_IMPORTED_MODULE_9__["SocialTwitterComponent"],
                _social_news_social_news_component__WEBPACK_IMPORTED_MODULE_10__["SocialNewsComponent"],
                _social_landing_social_landing_component__WEBPACK_IMPORTED_MODULE_11__["SocialLandingComponent"],
                _social_all_social_all_component__WEBPACK_IMPORTED_MODULE_12__["SocialAllComponent"],
                _social_maps_social_maps_component__WEBPACK_IMPORTED_MODULE_13__["SocialMapsComponent"],
                // SocialComboDualAxesComponent,
                _social_twitter_country_tweet_social_twitter_country_tweet_component__WEBPACK_IMPORTED_MODULE_15__["SocialTwitterCountryTweetComponent"],
                _social_twitter_wordcloud_social_twitter_wordcloud_component__WEBPACK_IMPORTED_MODULE_16__["SocialTwitterWordcloudComponent"],
                _social_twitter_countries_tweet_social_twitter_countries_tweet_component__WEBPACK_IMPORTED_MODULE_17__["SocialTwitterCountriesTweetComponent"],
                _social_news_breitbart_wordcloud_social_news_breitbart_wordcloud_component__WEBPACK_IMPORTED_MODULE_18__["SocialNewsBreitbartWordcloudComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _modules_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _modules_app_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
                // ChartModule,
                // HighchartsChartModule,
                _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                angular_tag_cloud_module__WEBPACK_IMPORTED_MODULE_4__["TagCloudModule"]
            ],
            providers: [
            // { provide: HIGHCHARTS_MODULES, useFactory: () => [highmaps] }
            ],
            bootstrap: [_app_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app/app.component.html":
/*!****************************************!*\
  !*** ./src/app/app/app.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Header -->\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">\n    <img src=\"assets/UNHCR-logo.png\" height=\"30\" alt=\"\">\n  </a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <!-- Navigation -->\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n\n      <!-- Social lisenting -->\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/\" routerLinkActive=\"active\">Social Listening <span class=\"sr-only\">(current)</span></a>\n      </li>\n\n      <!-- Water Accessing -->\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/water-accessing\">Water Accessing</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<!-- Router -->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app/app.component.sass":
/*!****************************************!*\
  !*** ./src/app/app/app.component.sass ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC9hcHAuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/app/app.component.ts":
/*!**************************************!*\
  !*** ./src/app/app/app.component.ts ***!
  \**************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-app',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.sass */ "./src/app/app/app.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/social-all/social-all.component.html":
/*!******************************************************!*\
  !*** ./src/app/social-all/social-all.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-social-all\">\n\n</div>\n"

/***/ }),

/***/ "./src/app/social-all/social-all.component.sass":
/*!******************************************************!*\
  !*** ./src/app/social-all/social-all.component.sass ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-social-all {\n  background-color: #ff6b6b;\n  background: linear-gradient(to right, #00aced 50%, #ff6b6b 50%);\n  width: 100%;\n  height: calc(100vh - 58px);\n  position: relative; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXhpYW5nY2hlbi9HaXRodWIvc29jaWFsX2xpc3RlbmluZy93ZWJhcHAvc3JjL2FwcC9zb2NpYWwtYWxsL3NvY2lhbC1hbGwuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBeUI7RUFDekIsZ0VBQStEO0VBQy9ELFlBQVc7RUFDWCwyQkFBMEI7RUFDMUIsbUJBQWtCLEVBQUciLCJmaWxlIjoic3JjL2FwcC9zb2NpYWwtYWxsL3NvY2lhbC1hbGwuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLXNvY2lhbC1hbGwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2YjZiO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMGFjZWQgNTAlLCAjZmY2YjZiIDUwJSk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1OHB4KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/social-all/social-all.component.ts":
/*!****************************************************!*\
  !*** ./src/app/social-all/social-all.component.ts ***!
  \****************************************************/
/*! exports provided: SocialAllComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialAllComponent", function() { return SocialAllComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SocialAllComponent = /** @class */ (function () {
    function SocialAllComponent() {
    }
    SocialAllComponent.prototype.ngOnInit = function () {
    };
    SocialAllComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-social-all',
            template: __webpack_require__(/*! ./social-all.component.html */ "./src/app/social-all/social-all.component.html"),
            styles: [__webpack_require__(/*! ./social-all.component.sass */ "./src/app/social-all/social-all.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], SocialAllComponent);
    return SocialAllComponent;
}());



/***/ }),

/***/ "./src/app/social-landing/social-landing.component.html":
/*!**************************************************************!*\
  !*** ./src/app/social-landing/social-landing.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-social-landing\" [ngStyle]=\"{'background-image': 'url(' + 'assets/social-listening-background.jpg'+ ')'}\">\n\n  <!-- Twitter -->\n  <section class=\"app-social-card-twitter\" routerLink=\"/social-listening/twitter\">\n    <mat-card>\n      <i class=\"fa fa-twitter\" aria-hidden=\"true\"></i>\n    </mat-card>\n    <p>Twitter</p>\n  </section>\n\n  <!-- News -->\n  <section class=\"app-social-card-news\" routerLink=\"/social-listening/news\">\n    <mat-card>\n      <i class=\"fa fa-newspaper-o\" aria-hidden=\"true\"></i>\n    </mat-card>\n    <p>News</p>\n  </section>\n\n</div>\n"

/***/ }),

/***/ "./src/app/social-landing/social-landing.component.sass":
/*!**************************************************************!*\
  !*** ./src/app/social-landing/social-landing.component.sass ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-social-landing {\n  width: 100%;\n  height: calc(100vh - 58px);\n  background-size: contain;\n  background-position: center center;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n  .app-social-landing .app-social-card-twitter, .app-social-landing .app-social-card-news {\n    cursor: pointer; }\n  .app-social-landing .app-social-card-twitter > .mat-card, .app-social-landing .app-social-card-news > .mat-card {\n      width: 130px;\n      height: 130px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      font-size: 48px; }\n  .app-social-landing .app-social-card-twitter > p, .app-social-landing .app-social-card-news > p {\n      width: 100%;\n      text-align: center;\n      height: 0;\n      overflow: hidden; }\n  .app-social-landing .app-social-card-twitter:hover > .mat-card, .app-social-landing .app-social-card-news:hover > .mat-card {\n      -webkit-transform: scale(1.1);\n              transform: scale(1.1);\n      transition: all 0.15s ease-in-out; }\n  .app-social-landing .app-social-card-twitter:hover > p, .app-social-landing .app-social-card-news:hover > p {\n      margin-top: 15px;\n      height: 30px;\n      transition: all 0.3s ease-in-out;\n      font-size: 20px;\n      font-weight: 300; }\n  .app-social-landing .app-social-card-twitter {\n    margin-right: 50px; }\n  .app-social-landing .app-social-card-twitter .mat-card {\n      background-color: #00aced;\n      color: white; }\n  .app-social-landing .app-social-card-news .mat-card {\n    background-color: #ff6b6b;\n    color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXhpYW5nY2hlbi9HaXRodWIvc29jaWFsX2xpc3RlbmluZy93ZWJhcHAvc3JjL2FwcC9zb2NpYWwtbGFuZGluZy9zb2NpYWwtbGFuZGluZy5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVc7RUFDWCwyQkFBMEI7RUFDMUIseUJBQXdCO0VBQ3hCLG1DQUFrQztFQUNsQyxjQUFhO0VBQ2Isd0JBQXVCO0VBQ3ZCLG9CQUFtQixFQWtDSTtFQXpDekI7SUFTSSxnQkFBZSxFQXNCWTtFQS9CL0I7TUFXTSxhQUFZO01BQ1osY0FBYTtNQUNiLGNBQWE7TUFDYix3QkFBdUI7TUFDdkIsb0JBQW1CO01BQ25CLGdCQUFlLEVBQUc7RUFoQnhCO01Ba0JNLFlBQVc7TUFDWCxtQkFBa0I7TUFDbEIsVUFBUztNQUNULGlCQUFnQixFQUFHO0VBckJ6QjtNQXdCUSw4QkFBcUI7Y0FBckIsc0JBQXFCO01BQ3JCLGtDQUFpQyxFQUFHO0VBekI1QztNQTJCUSxpQkFBZ0I7TUFDaEIsYUFBWTtNQUNaLGlDQUFnQztNQUNoQyxnQkFBZTtNQUNmLGlCQUFnQixFQUFHO0VBL0IzQjtJQWtDSSxtQkFBa0IsRUFHQztFQXJDdkI7TUFvQ00sMEJBQXlCO01BQ3pCLGFBQVksRUFBRztFQXJDckI7SUF3Q00sMEJBQXlCO0lBQ3pCLGFBQVksRUFBRyIsImZpbGUiOiJzcmMvYXBwL3NvY2lhbC1sYW5kaW5nL3NvY2lhbC1sYW5kaW5nLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1zb2NpYWwtbGFuZGluZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1OHB4KTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLmFwcC1zb2NpYWwtY2FyZC10d2l0dGVyLCAuYXBwLXNvY2lhbC1jYXJkLW5ld3Mge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICA+IC5tYXQtY2FyZCB7XG4gICAgICB3aWR0aDogMTMwcHg7XG4gICAgICBoZWlnaHQ6IDEzMHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogNDhweDsgfVxuICAgID4gcCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGhlaWdodDogMDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47IH1cbiAgICAmOmhvdmVyIHtcbiAgICAgID4gLm1hdC1jYXJkIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZS1pbi1vdXQ7IH1cbiAgICAgID4gcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDsgfSB9IH1cblxuICAuYXBwLXNvY2lhbC1jYXJkLXR3aXR0ZXIge1xuICAgIG1hcmdpbi1yaWdodDogNTBweDtcbiAgICAubWF0LWNhcmQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYWNlZDtcbiAgICAgIGNvbG9yOiB3aGl0ZTsgfSB9XG4gIC5hcHAtc29jaWFsLWNhcmQtbmV3cyB7XG4gICAgLm1hdC1jYXJkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjZiNmI7XG4gICAgICBjb2xvcjogd2hpdGU7IH0gfSB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/social-landing/social-landing.component.ts":
/*!************************************************************!*\
  !*** ./src/app/social-landing/social-landing.component.ts ***!
  \************************************************************/
/*! exports provided: SocialLandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialLandingComponent", function() { return SocialLandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SocialLandingComponent = /** @class */ (function () {
    function SocialLandingComponent() {
    }
    SocialLandingComponent.prototype.ngOnInit = function () {
    };
    SocialLandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-social-landing',
            template: __webpack_require__(/*! ./social-landing.component.html */ "./src/app/social-landing/social-landing.component.html"),
            styles: [__webpack_require__(/*! ./social-landing.component.sass */ "./src/app/social-landing/social-landing.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], SocialLandingComponent);
    return SocialLandingComponent;
}());



/***/ }),

/***/ "./src/app/social-maps/social-maps.component.html":
/*!********************************************************!*\
  !*** ./src/app/social-maps/social-maps.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"app-social-maps-container\"></div>\n"

/***/ }),

/***/ "./src/app/social-maps/social-maps.component.sass":
/*!********************************************************!*\
  !*** ./src/app/social-maps/social-maps.component.sass ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#app-social-maps-container {\n  height: calc(100vh - 208px); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXhpYW5nY2hlbi9HaXRodWIvc29jaWFsX2xpc3RlbmluZy93ZWJhcHAvc3JjL2FwcC9zb2NpYWwtbWFwcy9zb2NpYWwtbWFwcy5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRCQUEyQixFQUFHIiwiZmlsZSI6InNyYy9hcHAvc29jaWFsLW1hcHMvc29jaWFsLW1hcHMuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYXBwLXNvY2lhbC1tYXBzLWNvbnRhaW5lciB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDIwOHB4KTsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/social-maps/social-maps.component.ts":
/*!******************************************************!*\
  !*** ./src/app/social-maps/social-maps.component.ts ***!
  \******************************************************/
/*! exports provided: SocialMapsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialMapsComponent", function() { return SocialMapsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SocialMapsComponent = /** @class */ (function () {
    function SocialMapsComponent(_http) {
        this._http = _http;
        this.DATA = [
            ['eu', 43.91],
            ['oc', 34.91],
            ['af', 52.31],
            ['as', 40.75],
            ['na', 41.60],
            ['sa', 41.6]
        ];
    }
    SocialMapsComponent.prototype.ngOnInit = function () { };
    SocialMapsComponent.prototype.ngAfterViewInit = function () {
        this.initMap();
    };
    SocialMapsComponent.prototype.initMap = function () {
        Highcharts.mapChart('app-social-maps-container', {
            chart: {
                map: 'custom/world-continents'
            },
            title: {
                text: 'Percent of Positive Sentiments group by continents'
            },
            subtitle: {
                text: 'Data parsed by Katherine'
            },
            mapNavigation: {
                enabled: true,
                buttonOptions: {
                    verticalAlign: 'bottom'
                }
            },
            colorAxis: {
                min: 30
            },
            series: [
                {
                    data: this.DATA,
                    name: 'Percentage',
                    states: {
                        hover: {
                            color: '#BADA55'
                        }
                    },
                    dataLabels: {
                        enabled: true,
                        format: '{point.name} ({point.value}%)'
                    }
                }
            ]
        });
    };
    SocialMapsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-social-maps',
            template: __webpack_require__(/*! ./social-maps.component.html */ "./src/app/social-maps/social-maps.component.html"),
            styles: [__webpack_require__(/*! ./social-maps.component.sass */ "./src/app/social-maps/social-maps.component.sass")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SocialMapsComponent);
    return SocialMapsComponent;
}());



/***/ }),

/***/ "./src/app/social-news-breitbart-wordcloud/social-news-breitbart-wordcloud.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/social-news-breitbart-wordcloud/social-news-breitbart-wordcloud.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"app-social-news-breitbart-wordcloud\"></div>\n"

/***/ }),

/***/ "./src/app/social-news-breitbart-wordcloud/social-news-breitbart-wordcloud.component.sass":
/*!************************************************************************************************!*\
  !*** ./src/app/social-news-breitbart-wordcloud/social-news-breitbart-wordcloud.component.sass ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvY2lhbC1uZXdzLWJyZWl0YmFydC13b3JkY2xvdWQvc29jaWFsLW5ld3MtYnJlaXRiYXJ0LXdvcmRjbG91ZC5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/social-news-breitbart-wordcloud/social-news-breitbart-wordcloud.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/social-news-breitbart-wordcloud/social-news-breitbart-wordcloud.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: SocialNewsBreitbartWordcloudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialNewsBreitbartWordcloudComponent", function() { return SocialNewsBreitbartWordcloudComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SocialNewsBreitbartWordcloudComponent = /** @class */ (function () {
    function SocialNewsBreitbartWordcloudComponent(_http) {
        this._http = _http;
    }
    SocialNewsBreitbartWordcloudComponent.prototype.ngOnInit = function () {
        this.initChart();
    };
    SocialNewsBreitbartWordcloudComponent.prototype.initChart = function () {
        this._http.get('assets/world-cloud.json').subscribe(function (res) {
            var data = [];
            for (var key in res) {
                if (res.hasOwnProperty(key)) {
                    data.push({
                        name: key,
                        weight: res[key]
                    });
                }
            }
            Highcharts.chart('app-social-twitter-wordcloud', {
                series: [
                    {
                        type: 'wordcloud',
                        data: data,
                        name: 'Occurrences'
                    }
                ],
                title: {
                    text: 'Wordcloud'
                }
            });
        });
    };
    SocialNewsBreitbartWordcloudComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-social-news-breitbart-wordcloud',
            template: __webpack_require__(/*! ./social-news-breitbart-wordcloud.component.html */ "./src/app/social-news-breitbart-wordcloud/social-news-breitbart-wordcloud.component.html"),
            styles: [__webpack_require__(/*! ./social-news-breitbart-wordcloud.component.sass */ "./src/app/social-news-breitbart-wordcloud/social-news-breitbart-wordcloud.component.sass")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SocialNewsBreitbartWordcloudComponent);
    return SocialNewsBreitbartWordcloudComponent;
}());



/***/ }),

/***/ "./src/app/social-news/social-news.component.html":
/*!********************************************************!*\
  !*** ./src/app/social-news/social-news.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-social-news\">\n  <i class=\"fa fa-newspaper-o background-logo\" aria-hidden=\"true\"></i>\n  <mat-card class=\"main-content\">\n\n    <!-- Actions -->\n    <section class=\"app-social-news-actions\">\n      <button mat-raised-button color=\"primary\" routerLink=\"/\">\n        <i class=\"fa fa-home mr-1\" aria-hidden=\"true\"></i>\n        Back to home\n      </button>\n      <button mat-raised-button color=\"primary\" (click)=\"changeView()\" *ngIf=\"view\">\n        <i class=\"fa fa-newspaper-o mr-1\" aria-hidden=\"true\"></i>\n        Back to news\n      </button>\n    </section>\n\n    <!-- Views -->\n    <section class=\"app-social-news-views\">\n      <ng-container [ngSwitch]=\"view\">\n\n        <app-social-news-breitbart-wordcloud\n          *ngSwitchCase=\"'news-breitbart-wordcloud'\"\n        ></app-social-news-breitbart-wordcloud>\n\n        <!-- <app-social-news-countries-tweet *ngSwitchCase=\"'news-country-tweet'\"></app-social-news-countries-tweet> -->\n\n\n        <!-- Go to view -->\n        <div class=\"app-social-news-views-nav\" *ngSwitchDefault>\n\n          <!-- Word Cloud -->\n          <mat-card (click)=\"changeView('news-breitbart-wordcloud')\" class=\"app-social-news-go-views\">\n            Word Cloud\n          </mat-card>\n        </div>\n      </ng-container>\n    </section>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/social-news/social-news.component.sass":
/*!********************************************************!*\
  !*** ./src/app/social-news/social-news.component.sass ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes logo-right-slide-in {\n  from {\n    right: -10px; }\n  to {\n    right: 30px; } }\n\n@keyframes logo-right-slide-in {\n  from {\n    right: -10px; }\n  to {\n    right: 30px; } }\n\n@-webkit-keyframes content-left-slide-in {\n  from {\n    left: -100px; }\n  to {\n    left: 30px; } }\n\n@keyframes content-left-slide-in {\n  from {\n    left: -100px; }\n  to {\n    left: 30px; } }\n\n.app-social-news {\n  background-color: #ff6b6b;\n  width: 100%;\n  height: calc(100vh - 58px);\n  position: relative; }\n\n.app-social-news .background-logo {\n    position: absolute;\n    font-size: 100px;\n    color: white;\n    right: 30px;\n    top: 20px;\n    -webkit-animation: logo-right-slide-in 0.8s ease-in-out;\n            animation: logo-right-slide-in 0.8s ease-in-out; }\n\n.app-social-news .main-content {\n    position: absolute;\n    left: 30px;\n    bottom: 30px;\n    height: calc(100vh - 160px);\n    width: calc(100vw - 200px);\n    -webkit-animation: content-left-slide-in 0.8s ease-in-out;\n            animation: content-left-slide-in 0.8s ease-in-out;\n    overfloww: scroll;\n    display: flex;\n    justify-content: space-between; }\n\n.app-social-news .main-content .app-social-news-actions {\n      width: 180px;\n      display: flex;\n      flex-direction: column;\n      padding-right: 16px;\n      border-right: 1px solid #efecec; }\n\n.app-social-news .main-content .app-social-news-actions > button {\n        margin-bottom: 10px; }\n\n.app-social-news .main-content .app-social-news-views {\n      width: calc(100% - 200px); }\n\n.app-social-news .main-content .app-social-news-views .app-social-news-views-nav {\n        height: 100%;\n        display: flex;\n        justify-content: space-around;\n        align-items: center; }\n\n.app-social-news .main-content .app-social-news-views .app-social-news-views-nav .app-social-news-go-views {\n          width: 200px;\n          height: 150px;\n          cursor: pointer;\n          display: flex;\n          align-items: center;\n          text-align: center;\n          justify-content: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXhpYW5nY2hlbi9HaXRodWIvc29jaWFsX2xpc3RlbmluZy93ZWJhcHAvc3JjL2FwcC9zb2NpYWwtbmV3cy9zb2NpYWwtbmV3cy5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UsYUFBWSxFQUFBO0VBQ2Q7SUFDRSxZQUFXLEVBQUEsRUFBQTs7QUFKZjtFQUNFO0lBQ0UsYUFBWSxFQUFBO0VBQ2Q7SUFDRSxZQUFXLEVBQUEsRUFBQTs7QUFFZjtFQUNFO0lBQ0UsYUFBWSxFQUFBO0VBQ2Q7SUFDRSxXQUFVLEVBQUEsRUFBQTs7QUFKZDtFQUNFO0lBQ0UsYUFBWSxFQUFBO0VBQ2Q7SUFDRSxXQUFVLEVBQUEsRUFBQTs7QUFFZDtFQUNFLDBCQUF5QjtFQUN6QixZQUFXO0VBQ1gsMkJBQTBCO0VBQzFCLG1CQUFrQixFQXdDd0I7O0FBNUM1QztJQU1JLG1CQUFrQjtJQUNsQixpQkFBZ0I7SUFDaEIsYUFBWTtJQUNaLFlBQVc7SUFDWCxVQUFTO0lBQ1Qsd0RBQStDO1lBQS9DLGdEQUErQyxFQUFHOztBQVh0RDtJQWFJLG1CQUFrQjtJQUNsQixXQUFVO0lBQ1YsYUFBWTtJQUNaLDRCQUEyQjtJQUMzQiwyQkFBMEI7SUFDMUIsMERBQWlEO1lBQWpELGtEQUFpRDtJQUNqRCxrQkFBaUI7SUFDakIsY0FBYTtJQUNiLCtCQUE4QixFQXVCUTs7QUE1QzFDO01BdUJNLGFBQVk7TUFDWixjQUFhO01BQ2IsdUJBQXNCO01BQ3RCLG9CQUFtQjtNQUNuQixnQ0FBK0IsRUFFTDs7QUE3QmhDO1FBNkJRLG9CQUFtQixFQUFHOztBQTdCOUI7TUErQk0sMEJBQXlCLEVBYVM7O0FBNUN4QztRQWlDUSxhQUFZO1FBQ1osY0FBYTtRQUNiLDhCQUE2QjtRQUM3QixvQkFBbUIsRUFRVzs7QUE1Q3RDO1VBc0NVLGFBQVk7VUFDWixjQUFhO1VBQ2IsZ0JBQWU7VUFDZixjQUFhO1VBQ2Isb0JBQW1CO1VBQ25CLG1CQUFrQjtVQUNsQix3QkFBdUIsRUFBRyIsImZpbGUiOiJzcmMvYXBwL3NvY2lhbC1uZXdzL3NvY2lhbC1uZXdzLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGtleWZyYW1lcyBsb2dvLXJpZ2h0LXNsaWRlLWluIHtcbiAgZnJvbSB7XG4gICAgcmlnaHQ6IC0xMHB4OyB9XG4gIHRvIHtcbiAgICByaWdodDogMzBweDsgfSB9XG5cbkBrZXlmcmFtZXMgY29udGVudC1sZWZ0LXNsaWRlLWluIHtcbiAgZnJvbSB7XG4gICAgbGVmdDogLTEwMHB4OyB9XG4gIHRvIHtcbiAgICBsZWZ0OiAzMHB4OyB9IH1cblxuLmFwcC1zb2NpYWwtbmV3cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjZiNmI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1OHB4KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAuYmFja2dyb3VuZC1sb2dvIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZm9udC1zaXplOiAxMDBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcmlnaHQ6IDMwcHg7XG4gICAgdG9wOiAyMHB4O1xuICAgIGFuaW1hdGlvbjogbG9nby1yaWdodC1zbGlkZS1pbiAwLjhzIGVhc2UtaW4tb3V0OyB9XG4gIC5tYWluLWNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAzMHB4O1xuICAgIGJvdHRvbTogMzBweDtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNjBweCk7XG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAyMDBweCk7XG4gICAgYW5pbWF0aW9uOiBjb250ZW50LWxlZnQtc2xpZGUtaW4gMC44cyBlYXNlLWluLW91dDtcbiAgICBvdmVyZmxvd3c6IHNjcm9sbDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAuYXBwLXNvY2lhbC1uZXdzLWFjdGlvbnMge1xuICAgICAgd2lkdGg6IDE4MHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VmZWNlYztcbiAgICAgID4gYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDsgfSB9XG4gICAgLmFwcC1zb2NpYWwtbmV3cy12aWV3cyB7XG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjAwcHgpO1xuICAgICAgLmFwcC1zb2NpYWwtbmV3cy12aWV3cy1uYXYge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAuYXBwLXNvY2lhbC1uZXdzLWdvLXZpZXdzIHtcbiAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfSB9IH0gfSB9XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/social-news/social-news.component.ts":
/*!******************************************************!*\
  !*** ./src/app/social-news/social-news.component.ts ***!
  \******************************************************/
/*! exports provided: SocialNewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialNewsComponent", function() { return SocialNewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SocialNewsComponent = /** @class */ (function () {
    function SocialNewsComponent() {
    }
    SocialNewsComponent.prototype.ngOnInit = function () { };
    SocialNewsComponent.prototype.changeView = function (view) {
        this.view = view;
    };
    SocialNewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-social-news',
            template: __webpack_require__(/*! ./social-news.component.html */ "./src/app/social-news/social-news.component.html"),
            styles: [__webpack_require__(/*! ./social-news.component.sass */ "./src/app/social-news/social-news.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], SocialNewsComponent);
    return SocialNewsComponent;
}());



/***/ }),

/***/ "./src/app/social-twitter-countries-tweet/social-twitter-countries-tweet.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/social-twitter-countries-tweet/social-twitter-countries-tweet.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"app-social-twitter-countries-tweet\"></div>\n"

/***/ }),

/***/ "./src/app/social-twitter-countries-tweet/social-twitter-countries-tweet.component.sass":
/*!**********************************************************************************************!*\
  !*** ./src/app/social-twitter-countries-tweet/social-twitter-countries-tweet.component.sass ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#app-social-twitter-countries-tweet {\n  height: calc(100vh - 208px); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXhpYW5nY2hlbi9HaXRodWIvc29jaWFsX2xpc3RlbmluZy93ZWJhcHAvc3JjL2FwcC9zb2NpYWwtdHdpdHRlci1jb3VudHJpZXMtdHdlZXQvc29jaWFsLXR3aXR0ZXItY291bnRyaWVzLXR3ZWV0LmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQTJCLEVBQUciLCJmaWxlIjoic3JjL2FwcC9zb2NpYWwtdHdpdHRlci1jb3VudHJpZXMtdHdlZXQvc29jaWFsLXR3aXR0ZXItY291bnRyaWVzLXR3ZWV0LmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiI2FwcC1zb2NpYWwtdHdpdHRlci1jb3VudHJpZXMtdHdlZXQge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyMDhweCk7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/social-twitter-countries-tweet/social-twitter-countries-tweet.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/social-twitter-countries-tweet/social-twitter-countries-tweet.component.ts ***!
  \********************************************************************************************/
/*! exports provided: SocialTwitterCountriesTweetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialTwitterCountriesTweetComponent", function() { return SocialTwitterCountriesTweetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SocialTwitterCountriesTweetComponent = /** @class */ (function () {
    function SocialTwitterCountriesTweetComponent(_http) {
        this._http = _http;
    }
    SocialTwitterCountriesTweetComponent.prototype.ngOnInit = function () {
        this.initCharts();
    };
    SocialTwitterCountriesTweetComponent.prototype.initCharts = function () {
        var _this = this;
        this._http.get('assets/countries_tweets.json').subscribe(function (res) {
            console.log();
            var data = res.map(function (country) {
                return {
                    name: country['Place.Country'],
                    code: country['Place.Country Code'],
                    value: country['Number of Records'] + country['Retweet Count'],
                    tweet: country['Number of Records'],
                    retweet: country['Retweet Count'],
                    ratio: (country['SUM([Retweet Count])/SUM([Number of Records])'] * 100).toFixed(2)
                };
            });
            data = data.filter(function (d) { return d.value > 0; });
            _this._http
                .get('https://cdn.rawgit.com/highcharts/highcharts/680f5d50a47e90f53d814b53f80ce1850b9060c0/samples/data/world-population-density.json')
                .subscribe(function (sample) {
                var nameMap = new Map();
                var codeMap = new Map();
                sample.forEach(function (s) {
                    nameMap.set(s.name.toLowerCase(), s.code3);
                    codeMap.set(s.code.toLowerCase(), s.code3);
                });
                data.forEach(function (d) {
                    d.code3 = nameMap.get(d.name.toLowerCase());
                    if (!d.code3) {
                        d.code3 = codeMap.get(d.code.toLowerCase());
                    }
                });
                console.log(data);
                _this.renderCharts(data);
            });
        });
    };
    SocialTwitterCountriesTweetComponent.prototype.renderCharts = function (data) {
        Highcharts.mapChart('app-social-twitter-countries-tweet', {
            chart: {
                map: 'custom/world'
            },
            title: {
                text: 'Number of tweets in each countries'
            },
            legend: {
                title: {
                    text: 'Number of tweets',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                    }
                }
            },
            mapNavigation: {
                enabled: true,
                buttonOptions: {
                    verticalAlign: 'bottom'
                }
            },
            tooltip: {
                backgroundColor: 'none',
                borderWidth: 0,
                shadow: false,
                useHTML: true,
                padding: 0,
                pointFormat: '<span class="f32"><span class="flag {point.properties.hc-key}">' +
                    '</span></span> {point.name}<br>' +
                    '<span style="font-size:30px">{point.value} tweets</span><br>' +
                    '<span style="font-size:20px">{point.tweet} original tweets</span><br>' +
                    '<span style="font-size:20px">{point.retweet} retweets</span><br>' +
                    '<span style="font-size:14px">Retweets/original retweets ratio: {point.ratio}%</span><br>',
                positioner: function () {
                    return { x: 0, y: 550 };
                }
            },
            colorAxis: {
                min: 1,
                max: 1000,
                type: 'logarithmic'
            },
            series: [
                {
                    data: data,
                    joinBy: ['iso-a3', 'code3'],
                    name: 'Tweets',
                    states: {
                        hover: {
                            color: '#a4edba'
                        }
                    },
                    dataLabels: {
                        enabled: true,
                        format: '{point.name} ({point.value} tweets)'
                    }
                }
            ]
        });
    };
    SocialTwitterCountriesTweetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-social-twitter-countries-tweet',
            template: __webpack_require__(/*! ./social-twitter-countries-tweet.component.html */ "./src/app/social-twitter-countries-tweet/social-twitter-countries-tweet.component.html"),
            styles: [__webpack_require__(/*! ./social-twitter-countries-tweet.component.sass */ "./src/app/social-twitter-countries-tweet/social-twitter-countries-tweet.component.sass")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SocialTwitterCountriesTweetComponent);
    return SocialTwitterCountriesTweetComponent;
}());



/***/ }),

/***/ "./src/app/social-twitter-country-tweet/social-twitter-country-tweet.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/social-twitter-country-tweet/social-twitter-country-tweet.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-social-twitter-country-tweet\">\n  <div class='tableauPlaceholder' id='viz1541277817841' style='position: relative'><noscript><a href='#'><img alt=' '\n          src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Ha&#47;HackABetterWorld&#47;Dashboard1&#47;1_rss.png'\n          style='border: none' /></a></noscript><object class='tableauViz' style='display:none;'>\n      <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />\n      <param name='embed_code_version' value='3' />\n      <param name='site_root' value='' />\n      <param name='name' value='HackABetterWorld&#47;Dashboard1' />\n      <param name='tabs' value='no' />\n      <param name='toolbar' value='yes' />\n      <param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Ha&#47;HackABetterWorld&#47;Dashboard1&#47;1.png' />\n      <param name='animate_transition' value='yes' />\n      <param name='display_static_image' value='yes' />\n      <param name='display_spinner' value='yes' />\n      <param name='display_overlay' value='yes' />\n      <param name='display_count' value='yes' />\n      <param name='filter' value='publish=yes' /></object></div>\n</div>\n"

/***/ }),

/***/ "./src/app/social-twitter-country-tweet/social-twitter-country-tweet.component.sass":
/*!******************************************************************************************!*\
  !*** ./src/app/social-twitter-country-tweet/social-twitter-country-tweet.component.sass ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvY2lhbC10d2l0dGVyLWNvdW50cnktdHdlZXQvc29jaWFsLXR3aXR0ZXItY291bnRyeS10d2VldC5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/social-twitter-country-tweet/social-twitter-country-tweet.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/social-twitter-country-tweet/social-twitter-country-tweet.component.ts ***!
  \****************************************************************************************/
/*! exports provided: SocialTwitterCountryTweetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialTwitterCountryTweetComponent", function() { return SocialTwitterCountryTweetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SocialTwitterCountryTweetComponent = /** @class */ (function () {
    function SocialTwitterCountryTweetComponent(_http) {
        this._http = _http;
    }
    SocialTwitterCountryTweetComponent.prototype.ngOnInit = function () { };
    SocialTwitterCountryTweetComponent.prototype.ngAfterViewInit = function () {
        this.tableau();
    };
    SocialTwitterCountryTweetComponent.prototype.tableau = function () {
        var divElement = document.getElementById('viz1541277817841');
        var vizElement = divElement.getElementsByTagName('object')[0];
        vizElement.style.minWidth = '100%';
        vizElement.style.maxWidth = '100%';
        vizElement.style.minHeight = 'calc(100vh - 208px)';
        vizElement.style.maxHeight = 'calc(100vh - 208px)'; // divElement.offsetWidth * 0.75 + 'px';
        var scriptElement = document.createElement('script');
        scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
        vizElement.parentNode.insertBefore(scriptElement, vizElement);
    };
    SocialTwitterCountryTweetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-social-twitter-country-tweet',
            template: __webpack_require__(/*! ./social-twitter-country-tweet.component.html */ "./src/app/social-twitter-country-tweet/social-twitter-country-tweet.component.html"),
            styles: [__webpack_require__(/*! ./social-twitter-country-tweet.component.sass */ "./src/app/social-twitter-country-tweet/social-twitter-country-tweet.component.sass")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SocialTwitterCountryTweetComponent);
    return SocialTwitterCountryTweetComponent;
}());



/***/ }),

/***/ "./src/app/social-twitter-wordcloud/social-twitter-wordcloud.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/social-twitter-wordcloud/social-twitter-wordcloud.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"app-social-twitter-wordcloud\"></div>\n"

/***/ }),

/***/ "./src/app/social-twitter-wordcloud/social-twitter-wordcloud.component.sass":
/*!**********************************************************************************!*\
  !*** ./src/app/social-twitter-wordcloud/social-twitter-wordcloud.component.sass ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#app-social-twitter-wordcloud {\n  height: calc(100vh - 208px); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXhpYW5nY2hlbi9HaXRodWIvc29jaWFsX2xpc3RlbmluZy93ZWJhcHAvc3JjL2FwcC9zb2NpYWwtdHdpdHRlci13b3JkY2xvdWQvc29jaWFsLXR3aXR0ZXItd29yZGNsb3VkLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQTJCLEVBQUciLCJmaWxlIjoic3JjL2FwcC9zb2NpYWwtdHdpdHRlci13b3JkY2xvdWQvc29jaWFsLXR3aXR0ZXItd29yZGNsb3VkLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiI2FwcC1zb2NpYWwtdHdpdHRlci13b3JkY2xvdWQge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyMDhweCk7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/social-twitter-wordcloud/social-twitter-wordcloud.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/social-twitter-wordcloud/social-twitter-wordcloud.component.ts ***!
  \********************************************************************************/
/*! exports provided: SocialTwitterWordcloudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialTwitterWordcloudComponent", function() { return SocialTwitterWordcloudComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SocialTwitterWordcloudComponent = /** @class */ (function () {
    function SocialTwitterWordcloudComponent(_http) {
        this._http = _http;
    }
    SocialTwitterWordcloudComponent.prototype.ngOnInit = function () {
        this.initChart();
    };
    SocialTwitterWordcloudComponent.prototype.initChart = function () {
        this._http.get('assets/world-cloud.json').subscribe(function (res) {
            var lines = res.text.split(/[,\. ]+/g);
            var data = Highcharts.reduce(lines, function (arr, word) {
                var obj = Highcharts.find(arr, function (o) { return o.name === word; });
                if (obj) {
                    obj.count += 1;
                    obj.weight += 1;
                }
                else {
                    obj = {
                        name: word,
                        count: 1,
                        weight: 1
                    };
                    arr.push(obj);
                }
                return arr;
            }, []);
            data = data.filter(function (d) { return d.count > 50; });
            data = data.sort(function (a, b) {
                if (a.count > b.count) {
                    return 1;
                }
                else if (a.count < b.count) {
                    return -1;
                }
                else {
                    return 0;
                }
            });
            var weight = 1;
            var offset = 1;
            data.forEach(function (d) {
                weight += offset;
                offset++;
                d.weight = weight;
            });
            Highcharts.chart('app-social-twitter-wordcloud', {
                series: [
                    {
                        type: 'wordcloud',
                        data: data,
                        name: 'weight',
                    }
                ],
                title: {
                    text: 'Wordcloud'
                }
            });
        });
    };
    SocialTwitterWordcloudComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-social-twitter-wordcloud',
            template: __webpack_require__(/*! ./social-twitter-wordcloud.component.html */ "./src/app/social-twitter-wordcloud/social-twitter-wordcloud.component.html"),
            styles: [__webpack_require__(/*! ./social-twitter-wordcloud.component.sass */ "./src/app/social-twitter-wordcloud/social-twitter-wordcloud.component.sass")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SocialTwitterWordcloudComponent);
    return SocialTwitterWordcloudComponent;
}());



/***/ }),

/***/ "./src/app/social-twitter/social-twitter.component.html":
/*!**************************************************************!*\
  !*** ./src/app/social-twitter/social-twitter.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-social-twitter\">\n  <i class=\"fa fa-twitter background-logo\" aria-hidden=\"true\"></i>\n  <mat-card class=\"main-content\">\n\n    <!-- Actions -->\n    <section class=\"app-social-twitter-actions\">\n      <button mat-raised-button color=\"primary\" routerLink=\"/\">\n        <i class=\"fa fa-home mr-1\" aria-hidden=\"true\"></i>\n        Back to home\n      </button>\n      <button mat-raised-button color=\"primary\" (click)=\"changeView()\" *ngIf=\"view\">\n        <i class=\"fa fa-twitter mr-1\" aria-hidden=\"true\"></i>\n        Back to twitter\n      </button>\n    </section>\n\n    <!-- Views -->\n    <section class=\"app-social-twitter-views\">\n      <ng-container [ngSwitch]=\"view\">\n\n        <!-- Country vs. # of tweets (With Ratio of Retweet/ tweet) view -->\n        <!-- <app-social-twitter-country-tweet\n          *ngSwitchCase=\"'twitter-country-tweet'\"\n        ></app-social-twitter-country-tweet> -->\n        <app-social-twitter-countries-tweet\n          *ngSwitchCase=\"'twitter-country-tweet'\"\n        ></app-social-twitter-countries-tweet>\n\n        <app-social-maps\n          *ngSwitchCase=\"'percent-by-continents'\"\n        ></app-social-maps>\n\n        <app-social-twitter-wordcloud\n          *ngSwitchCase=\"'twitter-wordcloud'\"\n        ></app-social-twitter-wordcloud>\n\n        <!-- Go to view -->\n        <div class=\"app-social-twitter-views-nav\" *ngSwitchDefault>\n\n          <!-- Country vs. # of tweets (With Ratio of Retweet/ tweet) -->\n          <mat-card (click)=\"changeView('twitter-country-tweet')\" class=\"app-social-twitter-go-views\">\n            Country vs. # of tweets (With Ratio of Retweet/ tweet)\n          </mat-card>\n\n          <!-- Percent of Positive Sentiments group by continents -->\n          <mat-card (click)=\"changeView('percent-by-continents')\" class=\"app-social-twitter-go-views\">\n            Percent of Positive Sentiments group by continents\n          </mat-card>\n\n          <!-- Word Cloud -->\n          <mat-card (click)=\"changeView('twitter-wordcloud')\" class=\"app-social-twitter-go-views\">\n            Word Cloud\n          </mat-card>\n        </div>\n      </ng-container>\n    </section>\n\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/social-twitter/social-twitter.component.sass":
/*!**************************************************************!*\
  !*** ./src/app/social-twitter/social-twitter.component.sass ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes logo-left-slide-in {\n  from {\n    left: -10px; }\n  to {\n    left: 40px; } }\n\n@keyframes logo-left-slide-in {\n  from {\n    left: -10px; }\n  to {\n    left: 40px; } }\n\n@-webkit-keyframes content-right-slide-in {\n  from {\n    right: -100px; }\n  to {\n    right: 30px; } }\n\n@keyframes content-right-slide-in {\n  from {\n    right: -100px; }\n  to {\n    right: 30px; } }\n\n.app-social-twitter {\n  background-color: #00aced;\n  width: 100%;\n  height: calc(100vh - 58px);\n  position: relative; }\n\n.app-social-twitter .background-logo {\n    position: absolute;\n    font-size: 100px;\n    color: white;\n    left: 40px;\n    top: 20px;\n    -webkit-animation: logo-left-slide-in 0.8s ease-in-out;\n            animation: logo-left-slide-in 0.8s ease-in-out; }\n\n.app-social-twitter .main-content {\n    position: absolute;\n    right: 30px;\n    bottom: 30px;\n    height: calc(100vh - 160px);\n    width: calc(100vw - 200px);\n    -webkit-animation: content-right-slide-in 0.8s ease-in-out;\n            animation: content-right-slide-in 0.8s ease-in-out;\n    overfloww: scroll;\n    display: flex;\n    justify-content: space-between; }\n\n.app-social-twitter .main-content .app-social-twitter-actions {\n      width: 180px;\n      display: flex;\n      flex-direction: column;\n      padding-right: 16px;\n      border-right: 1px solid #efecec; }\n\n.app-social-twitter .main-content .app-social-twitter-actions > button {\n        margin-bottom: 10px; }\n\n.app-social-twitter .main-content .app-social-twitter-views {\n      width: calc(100% - 200px); }\n\n.app-social-twitter .main-content .app-social-twitter-views .app-social-twitter-views-nav {\n        height: 100%;\n        display: flex;\n        justify-content: space-around;\n        align-items: center; }\n\n.app-social-twitter .main-content .app-social-twitter-views .app-social-twitter-views-nav .app-social-twitter-go-views {\n          width: 200px;\n          height: 150px;\n          cursor: pointer;\n          display: flex;\n          align-items: center;\n          text-align: center;\n          justify-content: center; }\n\n.app-social-twitter .main-content .tableauPlaceholder:last-of-type {\n      display: none !important; }\n\n.app-social-twitter .main-content .tableauPlaceholder {\n      height: 600px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXhpYW5nY2hlbi9HaXRodWIvc29jaWFsX2xpc3RlbmluZy93ZWJhcHAvc3JjL2FwcC9zb2NpYWwtdHdpdHRlci9zb2NpYWwtdHdpdHRlci5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UsWUFBVyxFQUFBO0VBQ2I7SUFDRSxXQUFVLEVBQUEsRUFBQTs7QUFKZDtFQUNFO0lBQ0UsWUFBVyxFQUFBO0VBQ2I7SUFDRSxXQUFVLEVBQUEsRUFBQTs7QUFFZDtFQUNFO0lBQ0UsY0FBYSxFQUFBO0VBQ2Y7SUFDRSxZQUFXLEVBQUEsRUFBQTs7QUFKZjtFQUNFO0lBQ0UsY0FBYSxFQUFBO0VBQ2Y7SUFDRSxZQUFXLEVBQUEsRUFBQTs7QUFFZjtFQUNFLDBCQUF5QjtFQUN6QixZQUFXO0VBQ1gsMkJBQTBCO0VBQzFCLG1CQUFrQixFQTRDaUI7O0FBaERyQztJQU1JLG1CQUFrQjtJQUNsQixpQkFBZ0I7SUFDaEIsYUFBWTtJQUNaLFdBQVU7SUFDVixVQUFTO0lBQ1QsdURBQThDO1lBQTlDLCtDQUE4QyxFQUFHOztBQVhyRDtJQWFJLG1CQUFrQjtJQUNsQixZQUFXO0lBQ1gsYUFBWTtJQUNaLDRCQUEyQjtJQUMzQiwyQkFBMEI7SUFDMUIsMkRBQWtEO1lBQWxELG1EQUFrRDtJQUNsRCxrQkFBaUI7SUFDakIsY0FBYTtJQUNiLCtCQUE4QixFQTJCQzs7QUFoRG5DO01BdUJNLGFBQVk7TUFDWixjQUFhO01BQ2IsdUJBQXNCO01BQ3RCLG9CQUFtQjtNQUNuQixnQ0FBK0IsRUFFTDs7QUE3QmhDO1FBNkJRLG9CQUFtQixFQUFHOztBQTdCOUI7TUErQk0sMEJBQXlCLEVBYVM7O0FBNUN4QztRQWlDUSxhQUFZO1FBQ1osY0FBYTtRQUNiLDhCQUE2QjtRQUM3QixvQkFBbUIsRUFRVzs7QUE1Q3RDO1VBc0NVLGFBQVk7VUFDWixjQUFhO1VBQ2IsZ0JBQWU7VUFDZixjQUFhO1VBQ2Isb0JBQW1CO1VBQ25CLG1CQUFrQjtVQUNsQix3QkFBdUIsRUFBRzs7QUE1Q3BDO01BOENNLHlCQUF3QixFQUFHOztBQTlDakM7TUFnRE0seUJBQXdCLEVBQUciLCJmaWxlIjoic3JjL2FwcC9zb2NpYWwtdHdpdHRlci9zb2NpYWwtdHdpdHRlci5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIkBrZXlmcmFtZXMgbG9nby1sZWZ0LXNsaWRlLWluIHtcbiAgZnJvbSB7XG4gICAgbGVmdDogLTEwcHg7IH1cbiAgdG8ge1xuICAgIGxlZnQ6IDQwcHg7IH0gfVxuXG5Aa2V5ZnJhbWVzIGNvbnRlbnQtcmlnaHQtc2xpZGUtaW4ge1xuICBmcm9tIHtcbiAgICByaWdodDogLTEwMHB4OyB9XG4gIHRvIHtcbiAgICByaWdodDogMzBweDsgfSB9XG5cbi5hcHAtc29jaWFsLXR3aXR0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhY2VkO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNThweCk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLmJhY2tncm91bmQtbG9nbyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGZvbnQtc2l6ZTogMTAwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGxlZnQ6IDQwcHg7XG4gICAgdG9wOiAyMHB4O1xuICAgIGFuaW1hdGlvbjogbG9nby1sZWZ0LXNsaWRlLWluIDAuOHMgZWFzZS1pbi1vdXQ7IH1cbiAgLm1haW4tY29udGVudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAzMHB4O1xuICAgIGJvdHRvbTogMzBweDtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNjBweCk7XG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAyMDBweCk7XG4gICAgYW5pbWF0aW9uOiBjb250ZW50LXJpZ2h0LXNsaWRlLWluIDAuOHMgZWFzZS1pbi1vdXQ7XG4gICAgb3ZlcmZsb3d3OiBzY3JvbGw7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgLmFwcC1zb2NpYWwtdHdpdHRlci1hY3Rpb25zIHtcbiAgICAgIHdpZHRoOiAxODBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlZmVjZWM7XG4gICAgICA+IGJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7IH0gfVxuICAgIC5hcHAtc29jaWFsLXR3aXR0ZXItdmlld3Mge1xuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwMHB4KTtcbiAgICAgIC5hcHAtc29jaWFsLXR3aXR0ZXItdmlld3MtbmF2IHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgLmFwcC1zb2NpYWwtdHdpdHRlci1nby12aWV3cyB7XG4gICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH0gfSB9XG4gICAgLnRhYmxlYXVQbGFjZWhvbGRlcjpsYXN0LW9mLXR5cGUge1xuICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XG4gICAgLnRhYmxlYXVQbGFjZWhvbGRlciB7XG4gICAgICBoZWlnaHQ6IDYwMHB4ICFpbXBvcnRhbnQ7IH0gfSB9XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/social-twitter/social-twitter.component.ts":
/*!************************************************************!*\
  !*** ./src/app/social-twitter/social-twitter.component.ts ***!
  \************************************************************/
/*! exports provided: SocialTwitterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialTwitterComponent", function() { return SocialTwitterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SocialTwitterComponent = /** @class */ (function () {
    function SocialTwitterComponent() {
    }
    SocialTwitterComponent.prototype.ngOnInit = function () { };
    SocialTwitterComponent.prototype.changeView = function (view) {
        this.view = view;
    };
    SocialTwitterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-social-twitter',
            template: __webpack_require__(/*! ./social-twitter.component.html */ "./src/app/social-twitter/social-twitter.component.html"),
            styles: [__webpack_require__(/*! ./social-twitter.component.sass */ "./src/app/social-twitter/social-twitter.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], SocialTwitterComponent);
    return SocialTwitterComponent;
}());



/***/ }),

/***/ "./src/app/social/social.component.html":
/*!**********************************************!*\
  !*** ./src/app/social/social.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/social/social.component.sass":
/*!**********************************************!*\
  !*** ./src/app/social/social.component.sass ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvY2lhbC9zb2NpYWwuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/social/social.component.ts":
/*!********************************************!*\
  !*** ./src/app/social/social.component.ts ***!
  \********************************************/
/*! exports provided: SocialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialComponent", function() { return SocialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SocialComponent = /** @class */ (function () {
    function SocialComponent() {
    }
    SocialComponent.prototype.ngOnInit = function () {
    };
    SocialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-social',
            template: __webpack_require__(/*! ./social.component.html */ "./src/app/social/social.component.html"),
            styles: [__webpack_require__(/*! ./social.component.sass */ "./src/app/social/social.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], SocialComponent);
    return SocialComponent;
}());



/***/ }),

/***/ "./src/app/water/water.component.html":
/*!********************************************!*\
  !*** ./src/app/water/water.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  water works!\n</p>\n"

/***/ }),

/***/ "./src/app/water/water.component.sass":
/*!********************************************!*\
  !*** ./src/app/water/water.component.sass ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dhdGVyL3dhdGVyLmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "./src/app/water/water.component.ts":
/*!******************************************!*\
  !*** ./src/app/water/water.component.ts ***!
  \******************************************/
/*! exports provided: WaterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaterComponent", function() { return WaterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WaterComponent = /** @class */ (function () {
    function WaterComponent() {
    }
    WaterComponent.prototype.ngOnInit = function () {
    };
    WaterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-water',
            template: __webpack_require__(/*! ./water.component.html */ "./src/app/water/water.component.html"),
            styles: [__webpack_require__(/*! ./water.component.sass */ "./src/app/water/water.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], WaterComponent);
    return WaterComponent;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/yuxiangchen/Github/social_listening/webapp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map