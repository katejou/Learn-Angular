import { Component, OnInit } from '@angular/core';
import { BigService } from '../service/big.service'; // 記得也要去看它！
import { Hero } from '../hero'; 
import { MessageService } from '../service/message.service'; //step 12

@Component({
  selector: 'app-step12',
  templateUrl: './step12.component.html',
  styleUrls: ['./step12.component.scss']
})
export class Step12Component implements OnInit {

  // step 10 (1)
  heroes: Hero[] = [];//一開始是空串列
  // step 12
  constructor(private bigService: BigService, private messageService: MessageService ) {} 

  //step 12 MessagesComponent 
  //它在螢幕 app.component.html 的底部顯示應用中的訊息。<app-messages></app-messages>
  //加了一個 Message 的 component 和 service 
  //MessageService 中，有訊息的處理方法(Add Clear)。 
  //在 Big 和 HeroService 引入和操作 MessageService 
  //Message component 中，引用 Message service，作顯示和使用者操作 

  getHeroes(): void {
  this.bigService.getHeroes()
      .subscribe(heroes => this.heroes = heroes); 
  }

  ngOnInit(): void {
    this.getHeroes(); 
  }

  selectedHero?: Hero; 
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`step12Component: Selected hero id=${hero.id}`);
  }


}
