import { Component, OnInit } from '@angular/core';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  pokemonSelectionne;

  pokemons = [];
  compte = 0;

  constructor(private servicePokemons: PokemonsService) { }

  ngOnInit(): void {
    this.pokemons = this.servicePokemons.getPokemons();
    this.compte = this.servicePokemons.comptagePokemons();
  }

}
