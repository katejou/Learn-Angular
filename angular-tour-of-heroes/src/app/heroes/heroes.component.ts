import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; //引入 hero.ts (step2)
import { HeroService } from '../service/hero.service';
import { MessageService } from '../service/message.service'; //step 13

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'] //(紫白)<--這個地址，是可以自由切換的。而且只影響到自己，不影響他人。
 })
export class HeroesComponent implements OnInit {
  
  // step 11 (1)
  heroes: Hero[] = [];//一開始是空串列

  //constructor() { } // 原生，改為一進入就引進 HeroService 的實體
  constructor(private heroService: HeroService ,private messageService: MessageService) {} // step 11 (2) + step 13

  // step 12 Observable
  getHeroes(): void {
  this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes); //當我收到回覆之後，才把值灌給屬性
  }

  ngOnInit(): void {
    // step 11 (4) 在這個類別 constructor 之後，就會做 ngOnInit ，呼叫那個方去。
    this.getHeroes(); // 有 3 才有 4
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
}
