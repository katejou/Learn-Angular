// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-hero-search',
//   templateUrl: './hero-search.component.html',
//   styleUrls: ['./hero-search.component.scss']
// })
// export class HeroSearchComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  switchMap
} from 'rxjs/operators';
import { Hero } from '../hero';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: [ './hero-search.component.scss' ]
})
  
export class HeroSearchComponent implements OnInit {

  heroes$!: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term); //next 是什麼意思？
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms //這兩個是一個值，當 sreach 事件被觸發，就會發生下方的事…再修改 heroes$ 
      .pipe(

      // 以下的三個方法，都是來自︰rxjs/operators

      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
      //在傳出最終字串之前，debounceTime(300) 將會等待，
      //直到新增字串的事件暫停了 300 毫秒。你實際發起請求的間隔永遠不會小於 300ms。

      // ignore new term if same as previous term
      distinctUntilChanged(),
      //distinctUntilChanged() 會確保只在過濾條件變化時才傳送請求。

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.heroService.searchHeroes(term)),
      // switchMap() 只保留最近的(也就是上一個)答案

    );
  }
}
