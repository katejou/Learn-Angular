import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; //引入 hero.ts (step2)
import { HEROES } from '../mock-heroes'; //引用模擬的資料(step 5)

@Component({
  selector: 'app-step7',
  templateUrl: './step7.component.html',
  styleUrls: ['./step7.component.scss']
})
export class Step7Component implements OnInit {

  constructor() { }

  // step 5
  heroes = HEROES;

  ngOnInit(): void {
  }

  selectedHero?: Hero; //設定有這個變數，但是不要為它賦值
  onSelect(hero: Hero): void {
    this.selectedHero = hero;//等有人按下按鈕時，才賦值。
  }
  
}
