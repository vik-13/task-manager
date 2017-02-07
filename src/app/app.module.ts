import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {AccountModule} from "./components/account/account.module";
import {ZonesModule} from "./zones/zones.module";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app.routes";
import {DashboardModule} from "./components/dashboard/dashboard.module";
import {AuthProviders, AuthMethods, AngularFireModule} from "angularfire2";
import {MaterialModule} from "@angular/material";
import {BoardModule} from "./components/board/board.module";
import {SharedModule} from "./shared/shared.module";

const firebaseConfig = {
  apiKey: "AIzaSyDQsmDS_Z101-OTaYM-FHISOL5spr0jTWY",
  authDomain: "task-manager-83cb1.firebaseapp.com",
  databaseURL: "https://task-manager-83cb1.firebaseio.com",
  storageBucket: "task-manager-83cb1.appspot.com",
  messagingSenderId: "634472794189"
};

const firebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    RouterModule.forRoot(appRoutes),
    MaterialModule.forRoot(),

    AccountModule,
    DashboardModule,
    BoardModule,
    ZonesModule,

    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
