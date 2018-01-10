import {Injectable} from '@angular/core';
import {Hero} from './hero';
import {ARRAYHERO} from './mock-hero';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

@Injectable()
export class HeroService {


  constructor() {
    console.log(ARRAYHERO);
  }

  getHeroes(): Hero[] {
    return ARRAYHERO;
  }

  addHero(hero: Hero) {
    ARRAYHERO.push(hero);
  }

  deleteHero(index) {
    ARRAYHERO.splice(index, 1);
  }
}
