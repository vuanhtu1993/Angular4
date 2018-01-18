import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AbstractControl, ValidationErrors} from '@angular/forms';
import {of} from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class HeroValidatorService {
  arrayHero = [
    {nameHero: 'Tu', attribute: 'Leader'},
    {nameHero: 'Truong', attribute: 'Member'},
    {nameHero: 'Hung', attribute: 'Member'},
    {nameHero: 'Hai', attribute: 'Member'},
  ];

  constructor() {
  }

  checkHeroName(nameHero): Observable<Boolean> {
    return of(this.arrayHero)
      .delay(500)
      .map(heroes => heroes.filter(hero => hero.nameHero === nameHero))
      .map(heroes => !heroes.length);
  }
}
