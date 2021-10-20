import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c10',
  templateUrl: './c10.component.html',
  styleUrls: ['./c10.component.css']
})
export class C10Component implements OnInit {

  replique = 'Tu vois, le monde se divise en deux catégories: ceux qui ont  un pistolet chargé et ceux qui creusent. Toi tu creuses.';
  unePhrase = 'Que j\'aime à faire apprendre un nombre utile aux sages';
  unChiffre = 3.14159265358979323846264338379;
  teslaM3 = 48600;
  aujourdhui = Date.now();
  unObjet = { 2: 'espace', 1: 'esprit', 6: 'âme', 4: 'réalité', 3: 'temps', 5: 'pouvoir' };
  undictionnaire = new Map([[2, 'espace'], [1, 'esprit'], [6, 'âme'], [4, 'réalité'], [3, 'temps'], [5, 'pouvoir']]);
  uneChaineDeCaractere = 'Cette chaîne de caractères est beaucoup beaucoup  beaucoup trop longue.';
  unTableau = ['La Cène', 'Mona Lisa', 'La Jeune Fille à la perle', 'la Ronde de nuit'];
  unObject = {
    Azorius: { couleur1: 'blanc', couleur2: 'bleu' },
    Dimir: { couleur1: 'bleu', couleur2: 'noir' },
    Rakdos: { couleur1: 'rouge', couleur2: 'noir' },
    Gruul: { couleur1: 'rouge', couleur2: 'vert' },
    Selesnya: { couleur1: 'vert', couleur2: 'blanc' },
    Orzhov: { couleur1: 'blanc', couleur2: 'noir' },
    Izzet: { couleur1: 'bleu', couleur2: 'rouge' },
    Golgari: { couleur1: 'noir', couleur2: 'vert' },
    Boros: { couleur1: 'rouge', couleur2: 'blanc' },
    Simic: { couleur1: 'vert', couleur2: 'bleu' }
  };
  unePromesse = new Promise((resolve) => {
    setTimeout(() => resolve('C\'est bon !!!'), 5000);
  });

  constructor() { }

  ngOnInit(): void {
  }

}
