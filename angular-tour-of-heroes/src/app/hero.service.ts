import { Injectable } from '@angular/core';
//step 11
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
//step 12
import { Observable, of } from 'rxjs';
//step 13 一個 service 加進去另外一個 service
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  //step 13
  //constructor() { }
  constructor(private messageService: MessageService) { }
  // 這是一個典型的“服務中的服務”場景：你把 MessageService 注入到了 HeroService 中，而 HeroService 又被注入到了 HeroesComponent 中。

  //step 11
  // getHeroes(): Hero[] {
  // return HEROES;
  // }

  //step 12
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES); // Observable of 會等待並觀察
    this.messageService.add('HeroService: fetched heroes'); // step 13 !!
    return heroes;
  }
  
  //step 14 被 hero-detail 引用的方法。( 以 編號 來尋找資料庫 )
  getHero(id: number): Observable<Hero> { //非同步的回傳物件

    const hero = HEROES.find(h => h.id === id)!; //Linq 來篩選資料來源
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero); //非同步的回傳

    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
  }
}

