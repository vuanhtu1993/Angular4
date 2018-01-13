import {Injectable} from '@angular/core';
import {CRISIS, Crisis} from './crisis';

@Injectable()
export class CrisisService {
  constructor() {
    console.log(CRISIS);
  }
}
