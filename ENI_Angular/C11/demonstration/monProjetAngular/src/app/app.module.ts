import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { MpcComponent } from './composants/mpc/mpc.component';
import { C09Component } from './composants/c09/c09.component';
import { C10Component } from './composants/c10/c10.component';

import { registerLocaleData } from '@angular/common';
import localeFR from '@angular/common/locales/fr';
import { C11FilsComponent } from './composants/c11-fils/c11-fils.component';
import { C11PereComponent } from './composants/c11-pere/c11-pere.component';
registerLocaleData(localeFR);

@NgModule({
  declarations: [
    AppComponent,
    MpcComponent,
    C09Component,
    C10Component,
    C11FilsComponent,
    C11PereComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
