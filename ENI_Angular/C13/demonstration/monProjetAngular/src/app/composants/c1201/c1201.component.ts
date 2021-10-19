import { Component, OnInit } from '@angular/core';
import { C12Service } from 'src/app/services/c12.service';
import { CrudService } from 'src/app/services/crud.service';
import { C1202Component } from '../c1202/c1202.component';

@Component({
  selector: 'app-c1201',
  templateUrl: './c1201.component.html',
  styleUrls: ['./c1201.component.css'],
  providers: [C1202Component],
})
export class C1201Component implements OnInit {

  message = '';

  constructor(private unService: C12Service, private crud: CrudService) { }

  ngOnInit(): void {
  }

  cliqueSurLeBouton() {
    this.message = this.unService.tennis();
  }

  citations = [];

  affiche() {
    this.citations = this.crud.getCitations();
  }

  supprime(index) {
    this.citations = this.crud.deleteCitation(index);
  }

}
