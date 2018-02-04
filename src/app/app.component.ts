import { Component } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {select, Store} from '@ngrx/store';
import {DECREMENT, INCREMENT, RESET} from './redux/couter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrx4/platform';
  count: Observable<number>;
  constructor(private store: Store) {
    this.count = this.store.pipe(select('count'));
    console.log(this.count);
    // this.store.subscribe((value) => {
    //   this.count = value.count;
    //   console.log(this.count);
    // });
  }
  onIncrement() {
    this.store.dispatch({
      type: INCREMENT
    });
  }
  onDecrement() {
    this.store.dispatch({
      type: DECREMENT
    });
  }
  onReset() {
    this.store.dispatch({
      type: RESET
    });
  }
}
