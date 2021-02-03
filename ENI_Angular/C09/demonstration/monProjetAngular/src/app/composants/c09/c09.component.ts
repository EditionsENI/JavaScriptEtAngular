import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c09',
  templateUrl: './c09.component.html',
  styleUrls: ['./c09.component.css']
})
export class C09Component implements OnInit {

  maVariableAafficher = 'Une variable à afficher';
  uneChaineDeCaractere = 'Une variable à afficher';
  unChiffre = 8008;
  unobjet = {
    nom: 'Wayne', prenom: 'Bruce', ville: 'Gotham City'
  };

  texteDuBouton = 'Pas cliqué';
  nbreDeClic = 0;

  sportifs = ['Laurence Cousin', 'Bruce Lee', 'Roger Gracie', 'Ryu'];

  maClasse = 'alert-primary';

  constructor() { }

  ngOnInit(): void {
  }

  unClic() {
    console.log("Cliqué");
    this.nbreDeClic++;
    this.texteDuBouton = 'Cliqué ' + this.nbreDeClic + ' fois';
  }

  changeDeClasse() {
    if (this.maClasse === 'alert-success') {
      this.maClasse = 'alert-danger';
    } else {
      this.maClasse = 'alert-success';
    }
  }

}
