import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Monformulaire } from 'src/app/modeles/monformulaire';

@Component({
  selector: 'app-c13',
  templateUrl: './c13.component.html',
  styleUrls: ['./c13.component.css']
})
export class C13Component implements OnInit {

  formulaire = new Monformulaire('', '', false);
  monFormulaire = new FormGroup({
    nom: new FormControl(''),
    couleur: new FormControl(''),
    majeur: new FormControl('')
  });

  auClic(donnees: any) {
    console.log(donnees);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
