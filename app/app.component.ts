import {Angulartics2GoogleAnalytics} from 'angulartics2/src/providers/angulartics2-google-analytics';
import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import {Angulartics2} from 'angulartics2';
import { Route1 } from './components/route1';
import { Route2 } from './components/route2';
import {Angulartics2On} from 'angulartics2';


@Component({
  selector: 'my-app',
  providers: [Angulartics2GoogleAnalytics],
  templateUrl: './app/app.component.html',
  directives: [ROUTER_DIRECTIVES, Angulartics2On]
})

@RouteConfig([
  {path: '/route1', name: 'Route1', component: Route1},
  {path: '/route2', name: 'Route2', component: Route2},
])


export class AppComponent { 
    constructor(angulartics2: Angulartics2, angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) {}
}