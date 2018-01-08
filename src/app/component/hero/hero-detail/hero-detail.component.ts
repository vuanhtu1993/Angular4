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
  constructor(private hero: HeroService) {
  }

  ngOnInit() {
  }
  ngOnChanges() {
    this.selectedHero = this.hero.arrayHero[this.heroIndex];
    // console.log(this.selectedHero, this.heroIndex);
  }
  onClickDel() {
    this.hero.deleteHero(this.heroIndex);
  }
}
