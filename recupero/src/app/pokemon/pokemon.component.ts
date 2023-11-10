import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PokemonList } from '../models/pokemonList.model';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {
  obs!: Observable<PokemonList>;
  pokemonList! : PokemonList; 
  routeObs!: Observable<ParamMap>;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);

   
  }

  doSomething = (data: PokemonList) =>{
    this.pokemonList = data;
    console.log(this.pokemonList)
  }

  getRouterParam = (params: ParamMap) =>
  {
    const pokemonTypeId = params.get('tipo');
    console.log(pokemonTypeId);

    this.obs = this.http.get<PokemonList>(`https://pokeapi.co/api/v2/type/${pokemonTypeId}`);
    this.obs.subscribe(this.doSomething)
  }


}
