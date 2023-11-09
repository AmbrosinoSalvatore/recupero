import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PokemonList } from '../models/pokemonList.model';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {
  obs: Observable<PokemonList>;
  pokemonList! : PokemonList; 

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    const pokemonTypeId = this.route.snapshot.paramMap.get('tipo');
    console.log(pokemonTypeId);

    this.obs = this.http.get<PokemonList>(`https://pokeapi.co/api/v2/type/${pokemonTypeId}`);
    this.obs.subscribe(this.doSomething)
  }

  doSomething = (data: PokemonList) =>{
    this.pokemonList = data;
    console.log(data)
  }

}
