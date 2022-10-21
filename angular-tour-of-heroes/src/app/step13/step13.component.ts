import { Component, OnInit } from '@angular/core';
import { BigService } from '../service/big.service'; // 記得也要去看它！
import { Hero } from '../hero'; 
import { MessageService } from '../service/message.service'; //step 12
@Component({
  selector: 'app-step13',
  templateUrl: './step13.component.html',
  styleUrls: ['./step13.component.scss']
})
export class Step13Component implements OnInit {

  // 寫一下如何建立 Route 和 應用分頁 …
  // 前端由 button 改為 a ... 和不要子頁
  // 給未來的自己，對比一下 12 和 13 的差別

  //13.1 下指令︰ng generate module app-routing --flat --module=app
  //--flat	把這個檔案放進了 src/app 中，而不是單獨的目錄中。
  //--module=app	告訴 CLI 把它註冊到 AppModule 的 imports 陣列中。
  // 結果產出︰見 src/app/app-routing.module.ts
  
  //13.2 替換app-routing.module的程式碼
  //13.3 在app.component.html加入<router-outlet></router-outlet>
  //13.4 在app.component.html加入路由連結<nav><a routerLink="/heroes">Heroes</a>...</nav>
  //13.5 請觀看 dashborad
  //13.6 什麼的自動導航︰app-routing.module 中 { path: '', redirectTo: '/step1', pathMatch: 'full' },

  //13.7 hero-detail是如何接收 url 上給的參數
  //13.7.1 app-routing.module 中 { path: 'detail/:id' ....
  //13.7.2 路由連結送出id <a *ngFor="let hero of heroes" routerLink="/detail/{{hero.id}}">xxx<a>
  //13.7.3 step13 的 html 上，也把 button 替換為 a
  //13.7.4 step13 的 ts 刪 onselect 方法

  //13.8 hero-detail是如何用參數來抓資料
  //13.8.1 import ActivatedRoute  Location  HeroService
  //13.8.2 constructor 要 init 出它們來

  //ActivatedRoute 儲存著路由資訊
  //HeroService 從遠端伺服器獲取英雄資料
  //location 是一個 Angular 的服務，用來與瀏覽器打交道。 稍後，你就會使用它來導航回上一個檢視。
  //詳細做法，見hero-detail

  //13.9 HeroService 新增抓單筆資料的方法 getHero(id: number): Observable<Hero>{...}
  //13.10 回到上頁的按鈕和方法︰ this.location.back();

  heroes: Hero[] = [];
  constructor(private bigService: BigService ) {} 

  getHeroes(): void {
  this.bigService.getHeroes()
      .subscribe(heroes => this.heroes = heroes); 
  }

  ngOnInit(): void {
    this.getHeroes(); 
  }

}
