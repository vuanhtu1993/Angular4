import { Component, OnInit } from '@angular/core';
import {DECREMENT, INCREMENT, RESET} from '../couter';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-counting',
  templateUrl: './counting.component.html',
  styleUrls: ['./counting.component.css']
})
export class CountingComponent implements OnInit {

  count: Observable<number>;
  constructor(private store: Store<any>) {
    this.count = this.store.pipe(select('count'));
    console.log(this.count);
    // this.store.subscribe((value) => {
    //   this.count = value.count;
    //   console.log(this.count);
    // });
  }
  ngOnInit(): void {
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
