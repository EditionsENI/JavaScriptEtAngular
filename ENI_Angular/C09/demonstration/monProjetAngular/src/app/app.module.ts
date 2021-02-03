import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MpcComponent } from './composants/mpc/mpc.component';
import { C09Component } from './composants/c09/c09.component';

@NgModule({
  declarations: [
    AppComponent,
    MpcComponent,
    C09Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
