import {Component, OnInit} from '@angular/core';
import {HeroService} from '../../hero.service';
import {Hero} from '../../hero';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css']
})
export class AddHeroComponent implements OnInit {
  addedHero;

  constructor(private heroService: HeroService) {

  }

  ngOnInit() {
  }

  addHero(name, element, description) {
    this.addedHero = new Hero('', '', '');
    this.addedHero.name = name.value;
    this.addedHero.element = element.value;
    this.addedHero.description = description.value;
    this.heroService.addHero(this.addedHero);
    this.heroService.Emitter.emit();
    name.value = '';
    element.value = '';
    description.value = '';
  }
}
