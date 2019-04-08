import { BrowserModule } from '@angular/platform-browser';

import { Component, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GaugeModule } from 'angular-gauge';
import { NgxGaugeModule } from 'ngx-gauge';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GaugeModule.forRoot(),
    NgxGaugeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
