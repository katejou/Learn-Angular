import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; //引入 hero.ts (step2)
import { HEROES } from '../mock-heroes'; //引用模擬的資料(step 5)

@Component({
  selector: 'app-step6',
  templateUrl: './step6.component.html',
  // step 6 : 
  styleUrls: ['./step6.component.scss'] //(紫白)<--這個地址，是可以自由切換的。而且只影響到自己，不影響他人。
  //styleUrls: ['../app.component.scss'] //(綠白)<--我設定了兩者不同的 button onHover 顏色，可以看一下效果。

})
export class Step6Component implements OnInit {

  constructor() { }
  
  // step 5
  heroes = HEROES;

  ngOnInit(): void {
  }

}
