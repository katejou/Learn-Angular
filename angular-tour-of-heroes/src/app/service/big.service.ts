import { Injectable } from '@angular/core';
//step 10
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
//step 11
import { Observable, of } from 'rxjs';
//step 12
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class BigService {

  //constructor() { }
  //step12
  constructor(private messageService: MessageService) { }
  // 這是一個典型的“服務中的服務”場景：
  // 你把 MessageService 注入到了 BigService 中，而 BigService 又被注入到了 step12Component 中。

  //step 11 ()
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES); // Observable of 會等待並觀察
    this.messageService.add('「Big」Service: fetched heroes');
    return heroes;
  }

}
