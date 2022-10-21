import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-little-detail',
  templateUrl: './little-detail.component.html',
  styleUrls: ['./little-detail.component.scss']
})
export class LittleDetailComponent implements OnInit {

  @Input() hero?: Hero;

  constructor() { }

  ngOnInit(): void {
  }

}
