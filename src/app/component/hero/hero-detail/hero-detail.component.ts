import {Component, Input, OnInit, OnChanges} from '@angular/core';
import {HeroService} from '../../../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit, OnChanges {
  @Input() heroIndex;
  selectedHero;
  heroes;

  constructor(private heroService: HeroService) {
    this.getHero();
  }

  getHero() {
    this.heroes = this.heroService.getHeroes();
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.selectedHero = this.heroes[this.heroIndex];
  }

  onClickDel() {
    this.heroService.deleteHero(this.heroIndex);
    this.heroService.Emitter.emit();
  }
}
