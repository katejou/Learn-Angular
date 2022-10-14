import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; //引入 hero.ts (step2)
import { HEROES } from '../mock-heroes'; //引用模擬的資料(step 5)

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  // step 6 : 
  styleUrls: ['./heroes.component.scss'] //(紫白)<--這個地址，是可以自由切換的。而且只影響到自己，不影響他人。
  //styleUrls: ['../app.component.scss'] //(黑白)<--我設定了兩者不同的 button onHover 顏色，可以看一下效果。
})
export class HeroesComponent implements OnInit {
  
  // step 1
  // hero = 'Windstorm';
  
  // step 2
  // hero: Hero = { //才可以自由地使用它…
  //   id: 1,
  //   name: 'Windstorm'
  // };

  // step 5
  heroes = HEROES;
  
  constructor() { }

  ngOnInit(): void {
  }

  selectedHero?: Hero; //設定有這個變數，但是不要為它賦值
  onSelect(hero: Hero): void {
    this.selectedHero = hero;//等有人按下按鈕時，才賦值。
  }

  



}
