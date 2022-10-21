import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; 
import { HEROES } from '../mock-heroes'; 

@Component({
  selector: 'app-step9',
  templateUrl: './step9.component.html',
  styleUrls: ['./step9.component.scss']
})
export class Step9Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  heroes = HEROES;

  selectedHero?: Hero; 
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  
}
