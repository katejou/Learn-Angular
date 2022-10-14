// import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Component, OnInit, Input } from '@angular/core'; //加入 Input

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero?: Hero; //跳轉進來的時候，會帶入hero物件。

  constructor() { }

  ngOnInit(): void {
  }

}
