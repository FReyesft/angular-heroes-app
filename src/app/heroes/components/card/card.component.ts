import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'heroes-hero-card',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {

  constructor() { }
  @Input()
  public hero?: Hero;
  ngOnInit() {
    if (!this.hero) throw Error('no existe')
  }

}
