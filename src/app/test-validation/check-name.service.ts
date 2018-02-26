import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';
import {Hero} from './hero';
import {from} from 'rxjs/observable/from';

@Injectable()
export class ProfileValidatorService {
  arrayHero: Array<Hero> = [
    {name: 'Tu', age: 25, attribute: 'Leader'},
    {name: 'Truong', age: 22, attribute: 'Member'},
    {name: 'Hung', age: 28, attribute: 'Member'},
    {name: 'Hai', age: 27, attribute: 'Member'},
  ];

  constructor() {
  }

  checkName(nameHero): Observable<Boolean> {
    return of(this.arrayHero)
      // .filter((hero: any) => hero.name === nameHero)
      .map(heroes => heroes.filter(hero => hero.name === nameHero))
      .map(heroes => !heroes.length);
  }
}
