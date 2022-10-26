import { Component } from '@angular/core';

import { Heroform } from '../heroform';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
  
// https://angular.tw/guide/forms
export class HeroFormComponent {

  constructor() { }

  powers = ['','Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
  model = new Heroform(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;
  onSubmit() { this.submitted = true; }

  ngOnInit(): void {

    const myHero =  new Heroform(42, 'SkyDog',
                       'Fetch any object at any distance',
                       'Leslie Rollover');
    console.log('My hero is called ' + myHero.name); // "My hero is called SkyDog"
    
  }

  newHero() {
    this.model = new Heroform(42, '', '');
  }



  //app.module.ts
  //import { FormsModule } from '@angular/forms';
  //import { HeroFormComponent } from './hero-form/hero-form.component';
  //@NgModule({  imports: [ ..., FormsModule  ],declarations: [..., HeroFormComponent ],

  //當你匯入了 FormsModule 時，Angular 會自動為範本中的 <form> 標籤建立並附加一個 NgForm 指令。
  //<form #heroForm="ngForm">

  //src/styles.scss
  //@import url('https://unpkg.com/bootstrap@3.3.7/dist/css/bootstrap.min.css');

  // 看html…

  /*
                        為 TRUE 時的類別名稱  為 FALSE 時的類別名稱
  該控制元件已被訪問過。    ng-touched	         ng-untouched
  控制元件的值已被更改。    ng-dirty	           ng-pristine
  控制元件的值是有效的。    ng-valid	           ng-invalid
    Additionally, Angular applies the ng-submitted class to <form> elements upon submission. 
    This class does not apply to inner controls.

  在初始時，input 用 F12 來看會長這樣︰
  <input … class="form-control ng-untouched ng-pristine ng-valid" …>

  ...
  驗証用的視覺效果都在 html 和 scss

  */
  

  // 使用 ngSubmit 提交表單


}
