import { Injectable } from '@angular/core';
//step 11
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class SmallService {

  constructor() { }

  //step 11
  getHeroes(): Hero[] {
  return HEROES;
  }
  
}
