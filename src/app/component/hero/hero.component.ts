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
    this.getHero();
  }

  getHero(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.heroService.Emitter.subscribe(() => {
      this.getHero();
    });
  }

  selectHero(hero, i) {
    this.selectedHero = hero;
    this.indexSelectedHero = i;
  }
}
