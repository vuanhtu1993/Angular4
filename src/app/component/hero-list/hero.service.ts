import {Injectable} from '@angular/core';
import {Hero, HEROES} from './hero';

@Injectable()
export class HeroService {

  constructor() {
  }

  getHeroes() {
    return HEROES;
  }

  getHero(id) {
    return HEROES.find(function (hero) {
      return hero.id === id;
    });
  }
  UpdateHero(id, newName) {
    HEROES.find(function (hero) {
      return hero.id === id;
    }).name = newName;
  }
}
