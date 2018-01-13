import {Component, OnInit} from '@angular/core';
import {HeroService} from './hero.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroes;

  constructor(private heroService: HeroService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getHero();
  }

  getHero() {
    this.heroes = this.heroService.getHeroes();
  }
}
