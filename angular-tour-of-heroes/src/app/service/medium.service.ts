import { Injectable } from '@angular/core';
//step 10
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
//step 11
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediumService {

  constructor() { }

  //step 11 ()
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES); // Observable of 會等待並觀察
    return heroes;
  }

}
