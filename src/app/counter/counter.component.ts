import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Store, select} from '@ngrx/store';
import {increment, decrement, reset} from './counter.action';
import {IRootState} from '../reducers';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  public count$: Observable<number>;

  constructor(
    private store: Store<IRootState>
  ) { }

  ngOnInit() {
    this.store.subscribe(console.log)
    this.count$ = this.store.pipe(select('count'))
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

}
