import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; //引入 hero.ts

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  
  // step 1
  // hero = 'Windstorm';
  
  // step 2
  hero: Hero = { //才可以自由地使用它…
    id: 1,
    name: 'Windstorm'
  };
  
  constructor() { }

  ngOnInit(): void {

  }

}
