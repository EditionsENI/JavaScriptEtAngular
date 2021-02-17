import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { MpcComponent } from './composants/mpc/mpc.component';
import { C09Component } from './composants/c09/c09.component';
import { C10Component } from './composants/c10/c10.component';

import { registerLocaleData } from '@angular/common';
import localeFR from '@angular/common/locales/fr';
registerLocaleData(localeFR);

@NgModule({
  declarations: [
    AppComponent,
    MpcComponent,
    C09Component,
    C10Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
