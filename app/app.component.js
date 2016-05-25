"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angulartics2_google_tag_manager_1 = require('angulartics2/src/providers/angulartics2-google-tag-manager');
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var angulartics2_1 = require('angulartics2');
var route1_1 = require('./components/route1');
var route2_1 = require('./components/route2');
var angulartics2_2 = require('angulartics2');
var AppComponent = (function () {
    function AppComponent(angulartics2, angulartics2GoogleTagManager) {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            providers: [angulartics2_google_tag_manager_1.Angulartics2GoogleTagManager],
            templateUrl: './app/app.component.html',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, angulartics2_2.Angulartics2On]
        }),
        router_deprecated_1.RouteConfig([
            { path: '/route1', name: 'Route1', component: route1_1.Route1 },
            { path: '/route2', name: 'Route2', component: route2_1.Route2 },
        ]), 
        __metadata('design:paramtypes', [angulartics2_1.Angulartics2, angulartics2_google_tag_manager_1.Angulartics2GoogleTagManager])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map