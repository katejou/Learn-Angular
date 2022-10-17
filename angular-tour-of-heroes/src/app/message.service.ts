// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class MessageService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService { 
  messages: string[] = []; //一個串列

  add(message: string) { //入，推
    this.messages.push(message);
  }

  clear() { //清空
    this.messages = [];
  }
} // 沒有了 constructor 還被 import 到另外一個 service