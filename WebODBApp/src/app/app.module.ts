import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GaugeModule } from 'angular-gauge';
import { NgxGaugeModule } from 'ngx-gauge';
import { HttpClientModule } from '@angular/common/http';
import { OdbComponent } from './odb/odb.component';
import { FormsModule } from '@angular/forms';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
