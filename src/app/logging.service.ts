import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {

  constructor() { }
  logStatus(action) {
    console.log('Current Action:' + action);
  }
}
