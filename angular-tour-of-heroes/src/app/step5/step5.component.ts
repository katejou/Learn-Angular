import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; //引入 hero.ts (step2)
import { HEROES } from '../mock-heroes'; //引用模擬的資料(step 5)

@Component({
  selector: 'app-step5',
  templateUrl: './step5.component.html',
  styleUrls: ['./step5.component.scss']
})
export class Step5Component implements OnInit {

  constructor() { }

  // step 5
  heroes = HEROES;
  
  ngOnInit(): void {
  }

}
