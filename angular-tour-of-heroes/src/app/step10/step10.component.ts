import { Component, OnInit } from '@angular/core';
import { SmallService } from '../service/small.service'; // 記得也要去看它！
import { Hero } from '../hero'; 

@Component({
  selector: 'app-step10',
  templateUrl: './step10.component.html',
  styleUrls: ['./step10.component.scss']
})
export class Step10Component implements OnInit {

  // step 10 (1)
  heroes: Hero[] = [];//一開始是空串列

  constructor(private smallService: SmallService ) {} // step 10 (2)

  // step 10 (3) 在類別中，增加方法。
  getHeroes(): void {
    this.heroes = this.smallService.getHeroes(); //有 1, 2 才有 3
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
