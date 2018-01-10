import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
  actionActive = 0;
  actionInActive = 0;
  constructor() { }

  countActionActive() {
    this.actionActive ++;
  }
  countActionInActive() {
    this.actionInActive ++;
  }
}
