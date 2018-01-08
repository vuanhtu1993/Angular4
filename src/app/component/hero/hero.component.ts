import {Component, OnInit} from '@angular/core';
import {HeroService} from '../../hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  heros;
  selectedHero;
  indexSelectedHero;
  constructor(hero: HeroService) {
    this.heros = hero.arrayHero;
  }

  ngOnInit() {
  }
  selectHero(hero, i) {
    this.selectedHero = hero;
    this.indexSelectedHero = i;
    console.log(this.heros.indexOf(this.selectedHero));
  }
}
