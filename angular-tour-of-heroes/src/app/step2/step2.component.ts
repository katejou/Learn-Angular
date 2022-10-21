import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; //引入 hero.ts (step2)

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss']
})
export class Step2Component implements OnInit {

  constructor() { }

  // step 2
  hero: Hero = { //才可以自由地使用它…
    id: 1,
    name: 'Windstorm'
  };

  ngOnInit(): void {
  }

}
