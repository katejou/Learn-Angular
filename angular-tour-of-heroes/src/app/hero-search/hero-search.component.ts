
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../service/hero.service';

// Step 15
import { Observable, Subject } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  switchMap
} from 'rxjs/operators';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: [ './hero-search.component.scss' ]
})
  
export class HeroSearchComponent implements OnInit {

  //在最後一次練習中，你要學到把 Observable 的運算子串在一起，
  //讓你能將相似 HTTP 請求的數量最小化，並節省網路頻寬。
  constructor(private heroService: HeroService) { }
  
  heroes$ !: Observable<Hero[]>; //和前端綁一起的值。

  private searchTerms = new Subject<string>(); //這個是關鍵字

  // 這個是 input 的 action
  search(term: string): void {
    this.searchTerms.next(term); // next 是排隊等待的意思？因為上一個，未必已經做完…
    // 然得等 pipe 之中的三個方法都跑完，才再開始下一輪next? (如果有input的話)
  }

  // 每次有next執行，就開始跑這個︰
  ngOnInit(): void {
    this.heroes$ = this.searchTerms //這兩個是一個值，當 sreach 事件被觸發，就會發生下方的事…再修改 heroes$ 
      .pipe(

      // 以下的三個方法，都是來自︰rxjs/operators

      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
      // 在傳出最終字串之前，debounceTime(300) 將會等待，
      // 直到新增字串的事件暫停了 300 毫秒。你實際發起請求的間隔永遠不會小於 300ms。

      // ignore new term if same as previous term
      distinctUntilChanged(),
      //distinctUntilChanged() 會喚起前一個的記憶？

      // switch to new search observable each time the term changes
        switchMap((term: string) => this.heroService.searchHeroes(term)),
      // 回傳 Observable 給 heroes$
        
    );
  }
}
