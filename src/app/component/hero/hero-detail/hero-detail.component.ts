import {Component, Input, OnInit, OnChanges} from '@angular/core';
import {HeroService} from '../../../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit , OnChanges{
  @Input() heroIndex;
  selectedHero;
  heroes;
  constructor(private hero: HeroService) {
    this.heroes = hero.getHeroes();
  }

  ngOnInit() {
  }
  ngOnChanges() {
    this.selectedHero = this.heroes[this.heroIndex];
    // console.log(this.selectedHero, this.heroIndex);
  }
  onClickDel() {
    this.hero.deleteHero(this.heroIndex);
  }
}
