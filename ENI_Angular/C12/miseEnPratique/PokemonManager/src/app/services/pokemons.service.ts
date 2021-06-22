import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  pokemons = [ 
    { 'id': 1, 'nom': 'Bulbizarre', 'img': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png', 'categorie': 'graine', 'type': ['plante', 'poison'], 'taille': 0.70, 'poids': 6.9 }, 
    { 'id': 2, 'nom': 'Herbizarre', 'img': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png', 'categorie': 'graine', 'type': ['plante', 'poison'], 'taille': 1, 'poids': 13 }, 
    { 'id': 3, 'nom': 'Florizarre', 'img': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png', 'categorie': 'graine', 'type': ['plante', 'poison'], 'taille': 0.7, 'poids': 6.9 }, 
    { 'id': 4, 'nom': 'Salamèche', 'img': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png', 'categorie': 'lézard', 'type': ['feu'], 'taille': 0.6, 'poids': 8.5 }, 
    { 'id': 5, 'nom': 'Reptincel', 'img': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png', 'categorie': 'flamme', 'type': ['feu'], 'taille': 1.1, 'poids': 19 }, 
    { 'id': 6, 'nom': 'Dracaufeu', 'img': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png', 'categorie': 'flamme', 'type': ['feu', 'vol'], 'taille': 1.7, 'poids': 90.5 } 
  ]; 
  
  constructor() { } 
  
  getPokemons() { 
    return this.pokemons; 
  } 
  
  comptagePokemons() { 
    return this.pokemons.length; 
  } 
}
