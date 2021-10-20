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
import { C1201Component } from './composants/c1201/c1201.component';
import { C1202Component } from './composants/c1202/c1202.component';
import { C13Component } from './composants/c13/c13.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { C14Component } from './composants/c14/c14.component';
registerLocaleData(localeFR);

@NgModule({
  declarations: [
    AppComponent,
    MpcComponent,
    C09Component,
    C10Component,
    C11FilsComponent,
    C11PereComponent,
    C1201Component,
    C1202Component,
    C13Component,
    C14Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
