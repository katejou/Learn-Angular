import { Injectable } from '@angular/core';
//step 10
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';


@Injectable({
  providedIn: 'root'
})
export class SmallService {

  constructor() { }

  //step 10
  getHeroes(): Hero[] {
  return HEROES;
  }
  
}
