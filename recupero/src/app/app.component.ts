import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TypeList } from './Typelist.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recupero';
  pokemonList! : TypeList  ;
  obs! :Observable <TypeList>;
  constructor(private http :HttpClient)
  {
    this.obs = this.http.get<TypeList>("https://pokeapi.co/api/v2/type");
    this.obs.subscribe(this.doSomething)
  }
  doSomething = (data: TypeList) => {
    this.pokemonList = data
  }
  getLastPart(url:string){
    var parts = url.split('/');
    parts.pop()
    var lastSegment = parts.pop();
    return lastSegment
  }
}
