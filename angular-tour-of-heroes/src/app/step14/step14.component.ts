import { Component, OnInit } from '@angular/core';
import { LargeService } from '../service/large.service'; // 記得也要去看它！
import { Hero } from '../hero'; 
import { MessageService } from '../service/message.service'; //step 12

@Component({
  selector: 'app-step14',
  templateUrl: './step14.component.html',
  styleUrls: ['./step14.component.scss']
})
export class Step14Component implements OnInit {

  // 14.1 啟用 HTTP 服務

  // 於︰src/app/app.module.ts
  // import { HttpClientModule } from '@angular/common/http';
  // @NgModule({  imports: [  HttpClientModule,  .... ],})

  // 14.2 模擬出的遠端資料伺服器通訊
  // 用途︰可以被程式通過HTTP來問候，並回傳「假」消息！
  // (透過使用記憶體 Web API，你不用架設伺服器就可以學習 HttpClient 了。)

  // npm install angular-in-memory-web-api --save

  // 於︰src/app/app.module.ts
  // import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
  // import { InMemoryDataService } from './in-memory-data.service';
  // imports: [...,HttpClientInMemoryWebApiModule.forRoot(
  //                InMemoryDataService, { dataEncapsulation: false },
  //          ...)]


  // 14.3  ng generate service InMemoryData
  // 針對其內容的改變，詳見 in-memory-data.service.ts
  // 大約和一般的 service 一樣，就是有 implements InMemoryDbService ...

  // 14.4 修改與資料互動的 service (多了用HTTP查詢﹑處理錯誤﹑增刪修改的方法…)
  
  // 14.5 這裡也加入讀取增刪修改的功能。


  heroes: Hero[] = [];
  constructor(private largeService: LargeService ) {} 
  
  // 讀取
  getHeroes(): void {
  this.largeService.getHeroes()
      .subscribe(heroes => this.heroes = heroes); 
  }

  ngOnInit(): void {
    this.getHeroes(); 
  }

  //增
  add(name: string): void {
  name = name.trim();
  if (!name) { return; }
  this.largeService.addHero({ name } as Hero)
    .subscribe(hero => {
      this.heroes.push(hero);
    });
  }

  //刪
  delete(hero: Hero): void {
  this.heroes = this.heroes.filter(h => h !== hero);
  this.largeService.deleteHero(hero.id).subscribe();
  }

  //修改的功能在 LargeDetail！
}
