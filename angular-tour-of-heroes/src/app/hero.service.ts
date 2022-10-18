import { Injectable } from '@angular/core';
//step 11
import { Hero } from './hero';
//import { HEROES } from './mock-heroes'; //step 15 的時候，拆掉的。
//step 12
import { Observable, of } from 'rxjs';
//step 13 一個 service 加進去另外一個 service
import { MessageService } from './message.service';
//step 15 從 http 進口資料
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  //step 15
  constructor(
  private http: HttpClient,
  private messageService: MessageService) { }

  //step 13
  //constructor() { }
  //constructor(private messageService: MessageService) { }
  // 這是一個典型的“服務中的服務”場景：你把 MessageService 注入到了 HeroService 中，而 HeroService 又被注入到了 HeroesComponent 中。

  //step 11
  // getHeroes(): Hero[] {
  // return HEROES;
  // }

  //step 12 ()
  // getHeroes(): Observable<Hero[]> {
  //   const heroes = of(HEROES); // Observable of 會等待並觀察
  //   this.messageService.add('HeroService: fetched heroes'); // step 13 !!
  //   return heroes;
  // }

  // step 15 封上，被下方取代
  private heroesUrl = 'api/heroes';  // URL to web api
  // getHeroes(): Observable<Hero[]> {
  // return this.http.get<Hero[]>(this.heroesUrl)
  // }

  getHeroes(): Observable<Hero[]> {
  return this.http.get<Hero[]>(this.heroesUrl)
    .pipe(
      tap(_ => this.log('fetched heroes')),
      catchError(this.handleError<Hero[]>('getHeroes', []))
    );
  }
  //使用 pipe() 方法來擴充套件 Observable 的結果，並給它一個 catchError() 運算子。

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
  */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  } 
  
  //step 14 被 hero-detail 引用的方法。( 以 編號 來尋找資料庫 )
  // getHero(id: number): Observable<Hero> { //非同步的回傳物件

  //   const hero = HEROES.find(h => h.id === id)!; //Linq 來篩選資料來源
  //   this.messageService.add(`HeroService: fetched hero id=${id}`);
  //   return of(hero); //非同步的回傳

  //   // For now, assume that a hero with the specified `id` always exists.
  //   // Error handling will be added in the next step of the tutorial.
  // }
  

  // step 15 封上，被下方取代
  /** GET hero by id. Will 404 if id not found */
  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }


  //step 15
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  /** PUT: update the hero on the server */
  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }
  //使用 http.put() 來把修改後的英雄儲存到伺服器上。把下列程式碼新增進 HeroService

  /** POST: add a new hero to the server */
  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)), //newHero 是新增成功後被回傳的…
      catchError(this.handleError<Hero>('addHero'))
    );
  }
  //呼叫 HttpClient.post() 而不是 put()，到底是麼觸發到 genId 的呢？我也不得其解…只能算作體驗而已…


  /** DELETE: delete the hero from the server */
  deleteHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }
  // 呼叫 HttpClient.delete()
  // 雖然這個元件把刪除英雄的邏輯委託給了 HeroService，
  // 但仍保留了更新它自己的英雄列表的職責。
  // 元件的 delete() 方法會在 HeroService 對伺服器的操作成功之前，先從列表中移除要刪除的英雄。

  //Step 16
  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(x => x.length ?// x 是 get 回來的資料
        this.log(`found heroes matching "${term}"`) :
        this.log(`no heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }

}

