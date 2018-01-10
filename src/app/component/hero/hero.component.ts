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

  constructor(private heroService: HeroService) {
  }

  getHero() {
    this.heroes = this.heroService.getHeroes();
  }

  ngOnInit() {
    this.getHero();
    this.heroService.Emitter.subscribe(() => {
      this.getHero();
    });
  }

  selectHero(hero, i) {
    this.selectedHero = hero;
    this.indexSelectedHero = i;
  }
}
