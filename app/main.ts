import { bootstrap }    from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
import {Angulartics2} from 'angulartics2';

import { AppComponent }     from './app.component';

bootstrap(AppComponent, [ROUTER_PROVIDERS, Angulartics2]);