import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Monformulaire } from 'src/app/modeles/monformulaire';

@Component({
  selector: 'app-c14',
  templateUrl: './c14.component.html',
  styleUrls: ['./c14.component.css']
})
export class C14Component implements OnInit {

  nom = new FormControl('', [Validators.required,
  this.monValidateur]);
  couleur = new FormControl('', Validators.required);
  majeur = new FormControl('', Validators.required);

  formulaire = new Monformulaire('', '', false);

  monFormulaire = new FormGroup({
    leNom: this.nom,
    laCouleur: this.couleur,
    estMajeur: this.majeur
  });

  monValidateur(champ: FormControl) {
    if (champ.value === 'Chuck Norris') {
      return { mauvaisNom: true };
    } else {
      return null;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
