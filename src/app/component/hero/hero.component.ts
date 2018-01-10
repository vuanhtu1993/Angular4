import {Component, OnInit} from '@angular/core';
import {HeroService} from '../../hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  heroes;
  selectedHero;
  indexSelectedHero;
  constructor(private hero: HeroService) {
    this.heroes = hero.getHeroes();
  }
  ngOnInit() {
  }
  selectHero(hero, i) {
    this.selectedHero = hero;
    this.indexSelectedHero = i;
    console.log(this.heroes.indexOf(this.selectedHero));
  }
}
