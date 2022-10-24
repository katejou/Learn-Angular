import { Component, OnInit, Input } from '@angular/core'; //加入 Input
import { Hero } from '../hero';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../service/hero.service'; 

@Component({
  selector: 'app-small-detail',
  templateUrl: './small-detail.component.html',
  styleUrls: ['./small-detail.component.scss']
})
export class SmallDetailComponent implements OnInit {
  @Input() hero?: Hero; //跳轉進來的時候，會帶入hero物件。

  //constructor() { }
  // 獨立頁的步驟，為了接收url上的參數後，開出正確的 object 

  constructor(
  private route: ActivatedRoute,  // 提取 url 參數
  private heroService: HeroService, // 提取 (資料庫) 資料
  private location: Location // 是一個 Angular 的服務，用來與瀏覽器打交道。 稍後，你就會使用它來導航回上一個檢視。
  ) {}

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));  // 提取 url 參數
    //route.snapshot 是一個路由資訊的靜態快照，抓取自元件剛剛建立完畢之後。
    //paramMap 是一個從 URL 中提取的路由引數值的字典。"id" 對應的值就是要獲取的英雄的 id。
    //Number 函式會把字串轉換成數字，英雄的 id 就是數字型別。

    this.heroService.getHero(id) // 提取 (資料庫) 資料  -- 這也是個新的方法
      .subscribe(hero => this.hero = hero);
    // subscribe 表示 getHero 是個 Observable of 的 非同步方法
  }
  
  ngOnInit(): void {
    this.getHero();
  }

  goBack(): void {
    this.location.back(); // 使用了location，這東東是用來記錄使用者點擊的歷史？
  }

}
