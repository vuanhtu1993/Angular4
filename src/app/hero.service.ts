import {EventEmitter, Injectable} from '@angular/core';

import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

import {Hero} from './hero';
import {ARRAYHERO} from './mock-hero';
import {MessageService} from './message.service';

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) {
  }
  Emitter = new EventEmitter();
  getHeroes(): Observable<Hero[]> {
    // Todo: send the message _after_ fetching the heroes

    return of(ARRAYHERO);
  }
}
