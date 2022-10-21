import { Component, OnInit } from '@angular/core';
import { MediumService } from '../service/medium.service'; // 記得也要去看它！
import { Hero } from '../hero'; 

@Component({
  selector: 'app-step11',
  templateUrl: './step11.component.html',
  styleUrls: ['./step11.component.scss']
})
export class Step11Component implements OnInit {

  // step 10 (1)
  heroes: Hero[] = [];//一開始是空串列

  constructor(private mediumService: MediumService ) {} // step 10 (2)

  // step 11 Observable
  getHeroes(): void {
  this.mediumService.getHeroes()
      .subscribe(heroes => this.heroes = heroes); //當我收到回覆之後，才把值灌給屬性
  }

  ngOnInit(): void {
    // step 10 (4) 在這個類別 constructor 之後，就會做 ngOnInit ，呼叫那個方去。
    this.getHeroes(); // 有 3 才有 4
  }

  selectedHero?: Hero; 
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
