"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var router_deprecated_1 = require('@angular/router-deprecated');
var angulartics2_1 = require('angulartics2');
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var app_component_1 = require('./app.component');
var Angulartics2Deprecated = (function (_super) {
    __extends(Angulartics2Deprecated, _super);
    function Angulartics2Deprecated(location, router) {
        _super.call(this, location);
        console.log('injectable is working');
        this.trackRouter(location, router);
    }
    Angulartics2Deprecated.prototype.trackRouter = function (location, router) {
        var _this = this;
        router.subscribe(function (value) {
            console.log('this is working');
            if (!_this.settings.developerMode) {
                var url = location.path();
                if (_this.settings.pageTracking.autoTrackVirtualPages && !_this.matchesExcludedRouteChild(url)) {
                    _this.pageTrack.next({
                        path: _this.settings.pageTracking.basePath.length ? _this.settings.pageTracking.basePath + url : location.prepareExternalUrl(url),
                        location: location
                    });
                }
            }
        });
    };
    Angulartics2Deprecated.prototype.matchesExcludedRouteChild = function (url) {
        for (var _i = 0, _a = this.settings.pageTracking.excludedRoutes; _i < _a.length; _i++) {
            var excludedRoute = _a[_i];
            if ((excludedRoute instanceof RegExp && excludedRoute.test(url)) || url.indexOf(excludedRoute) > -1) {
                return true;
            }
        }
        return false;
    };
    Angulartics2Deprecated = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [common_1.Location, router_deprecated_1.Router])
    ], Angulartics2Deprecated);
    return Angulartics2Deprecated;
}(angulartics2_1.Angulartics2));
exports.Angulartics2Deprecated = Angulartics2Deprecated;
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [router_deprecated_1.ROUTER_PROVIDERS, angulartics2_1.Angulartics2, core_1.provide(angulartics2_1.Angulartics2, { useClass: Angulartics2Deprecated })]);
//# sourceMappingURL=main.js.map