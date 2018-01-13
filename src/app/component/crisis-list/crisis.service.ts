import {Injectable} from '@angular/core';
import {CRISIS, Crisis} from './crisis';

@Injectable()
export class CrisisService {
  constructor() {
  }

  getCrisises() {
    return CRISIS;
  }

  getCrisis(id) {
    return CRISIS.find((crisis) => {
      return crisis.id === id;
    });
  }
}
