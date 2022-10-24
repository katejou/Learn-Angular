import { Component } from '@angular/core';

import { Hero4form } from '../hero4form';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent {

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = new Hero4form(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;
  onSubmit() { this.submitted = true; }

  // https://angular.tw/guide/forms

  constructor() { }

  ngOnInit(): void {
  }

}
