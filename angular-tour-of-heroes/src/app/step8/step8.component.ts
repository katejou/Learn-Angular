import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; 
import { HEROES } from '../mock-heroes'; 

@Component({
  selector: 'app-step8',
  templateUrl: './step8.component.html',
  styleUrls: ['./step8.component.scss']
})
export class Step8Component implements OnInit {

  constructor() { }

  heroes = HEROES;

  ngOnInit(): void {
  }

  selectedHero?: Hero; 
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  
}
