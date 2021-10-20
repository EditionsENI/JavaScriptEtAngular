import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c11-pere',
  templateUrl: './c11-pere.component.html',
  styleUrls: ['./c11-pere.component.css']
})
export class C11PereComponent implements OnInit {

  personnage = { nom: 'Kent', prenom: 'Clark' };

  constructor() { }

  ngOnInit(): void {
  }

}
