
import { HttpClient, HttpHeaders } from '@angular/common/http';// <-- 重點
import { catchError, map, tap } from 'rxjs/operators'; // <-- 重點

import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { Hero } from '../hero';
//import { HEROES } from '../mock-heroes'; // 取代了。
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class LargeService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }
  
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`「Large」Service: ${message}`);
  }

  private largeUrl = 'api/heroes';  // URL to web api 
  //把伺服器上英雄資料資源的訪問地址 heroesURL 定義為 :base /:collectionName 的形式。
  //這裡的 base 是要請求的資源，
  //而 collectionName 是 in-memory-data-service.ts 中的英雄資料物件。


  // A) 從伺服器上「讀取」

  // getHeroes(): Observable<Hero[]> {
  //   const heroes = of(HEROES);
  //   return heroes;
  // }
  /** 由上面，改成︰GET heroes from the server */
  getHeroes(): Observable<Hero[]> {
    
    return this.http.get<Hero[]>(this.largeUrl)
      .pipe(
        tap(_ => this.log('large fetched heroes')), //成功
        catchError(this.handleError<Hero[]>('large getLargeHeroes', [])) //失敗
      );
    
    //所有的 HttpClient 方法都會返回某個值的 RxJS Observable。
    //HttpClient.get() 預設情況下把回應內文當做無型別的 JSON 物件進行返回。如果指定了可選的範本型別 <Hero[]>，就會給返回你一個型別化的物件。
    
    /*
    其它 API 可能在返回物件中深埋著你想要的資料。
    你可能要藉助 RxJS 的 map() 運算子對 Observable 的結果進行處理，以便把這些資料探勘出來。 
    
    雖然不打算在此展開討論，
    不過你可以到範例原始碼中的 getHeroNo404() 方法中找到一個使用 map() 運算子的例子。

    https://angular.tw/tutorial/toh-pt6

    */ 

  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'large operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  //讀單個！
  /** GET hero by id. Will 404 if id not found */
  getHero(id: number): Observable<Hero> {
    const url = `${this.largeUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`large fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`large getHero id=${id}`))
    );
  }

  /** ?? 真的會自動感應到這裡嗎？ 對，還真的感應到 404 ! 總之方法的名稱後加 No404 就是處理的方法？
   * GET hero by id. Return `undefined` when id not found */
  getHeroNo404<Data>(id: number): Observable<Hero> {
    const url = `${this.largeUrl}/?id=${id}`;
    return this.http.get<Hero[]>(url)
      .pipe(
        map(heroes => heroes[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? 'large fetched' : 'large did not find';
          this.log(`${outcome} hero id=${id}`);
        }),
        catchError(this.handleError<Hero>(`large getHero id=${id}`))
      );
  }



  
  // B) 往伺服器上「修改」

  /** PUT: update the hero on the server */
  updateHero(hero: Hero): Observable<any> {
    // HttpClient.put() 方法
    return this.http.put(this.largeUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log(`large updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('large updateHero'))
    );
  }

  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  // C) 往伺服器上「增加」

  /** POST: add a new hero to the server */
  addHero(hero: Hero): Observable<Hero> {

  //HttpClient.post() 方法！
  return this.http.post<Hero>(this.largeUrl, hero, this.httpOptions).pipe(
    tap((newHero: Hero) => this.log(`large added hero w/ id=${newHero.id}`)),
    catchError(this.handleError<Hero>('large addHero'))
  );
  }

  
  // D) 往伺服器上「刪除」

  /** DELETE: delete the hero from the server */
  deleteHero(id: number): Observable<Hero> {
    const url = `${this.largeUrl}/${id}`;

    return this.http.delete<Hero>(url, this.httpOptions).pipe(
      tap(_ => this.log(`large deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('large deleteHero'))
    );
  }
  // 元件的 delete() 方法會在 largeService 對伺服器的操作成功之前，先從列表中移除要刪除的英雄。

  
}
