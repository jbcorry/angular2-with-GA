import { bootstrap }    from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS, Router } from '@angular/router-deprecated';
import {Angulartics2} from 'angulartics2';
import { Injectable, provide } from '@angular/core';
import {Location} from '@angular/common';

import { AppComponent }     from './app.component';

@Injectable()
export class Angulartics2Deprecated extends Angulartics2 {
  constructor(location: Location, router: Router) {
    super(location);
    console.log('injectable is working');
    this.trackRouter(location, router);
  }

  trackRouter(location: Location, router: Router) {
    router.subscribe((value: any) => {
        console.log('this is working');
      if (!this.settings.developerMode) {
        var url = location.path();
        if (this.settings.pageTracking.autoTrackVirtualPages && !this.matchesExcludedRouteChild(url)) {
          this.pageTrack.next({
            path: this.settings.pageTracking.basePath.length ? this.settings.pageTracking.basePath + url : location.prepareExternalUrl(url),
            location: location
          });
        }
      }
    })
  }

  private matchesExcludedRouteChild(url: string): boolean {
    for (let excludedRoute of this.settings.pageTracking.excludedRoutes) {
      if ((excludedRoute instanceof RegExp && excludedRoute.test(url)) || url.indexOf(excludedRoute) > -1) {
        return true;
      }
    }
    return false;
  }
}



bootstrap(AppComponent, [ROUTER_PROVIDERS, Angulartics2,provide(Angulartics2, {useClass: Angulartics2Deprecated})]);