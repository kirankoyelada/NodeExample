import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {environment} from '../../src/environments/environment';
@Injectable()
export class MovieListService {
  url=environment.webAPILink;
  public movies=[];
  public favMovies=[];
  constructor(private http:Http) { }

  getImages(){
    console.log(this.url+"favMovies");
    this.http.get(this.url+"movies").subscribe(res=>{
      this.movies=res.json();
    });
  }
  getFavMovies(){
    console.log(this.url+"favMovies");
    this.http.get(this.url+"favMovies").subscribe(res=>{
      this.favMovies=res.json();
    })
  }
}
