import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GaugeModule } from 'angular-gauge';
import { NgxGaugeModule } from 'ngx-gauge';
import { HttpClientModule } from '@angular/common/http';
import { OdbComponent } from './odb/odb.component';
import { FormsModule } from '@angular/forms';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
//import { environment } from 'src/environments/environment.prod';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    OdbComponent
  ],
  imports: [
    BrowserModule,
    GaugeModule.forRoot(),
    NgxGaugeModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
