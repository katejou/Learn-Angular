import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = []; //容器

  constructor(private heroService: HeroService) { } //實體

  getHeroes(): void { 
    this.heroService.getHeroes() //方法引用
      .subscribe(heroes => this.heroes = heroes.slice(1, 5)); //增加條件！
    //會擷取第 2 到 第 5 位英雄
  }

  ngOnInit(): void {
    this.getHeroes(); //呼叫！
  }



}
