import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class C12Service {

  bon = false;

  tennis(): string {
    this.bon = !this.bon;
      return (this.bon?'ace':'out'); // Ternaire pour faire classe
  }

  constructor() {   }
}

