import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; //引入 hero.ts (step2)

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.scss']
})
export class Step4Component implements OnInit {

    // step 2
  hero: Hero = { //才可以自由地使用它…
    id: 1,
    name: 'Windstorm'
  };
  
  constructor() { }

  ngOnInit(): void {
  }

}
