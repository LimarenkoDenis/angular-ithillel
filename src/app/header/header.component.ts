import { totalSumSelector, totalSumSelectorConverter } from './../cart/state/cart.reducer';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {IRootState} from '../reducers';
import {map} from 'rxjs/operators';
import {ICart} from '../products/interfaces/product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public totalCount$: Observable<number>;
  public totalCountGRN$: Observable<number>;

  public constructor(
    private store: Store<IRootState>
  ) {

  }

  public ngOnInit() {
    // this.totalCount$ = this.store.pipe(
    //   select('cart'),
    //   map((cart: ICart[]) => {
    //     return cart.reduce((acc: number, next: ICart) => acc + next.count * next.price, 0);
    //   })
    // );
    this.totalCountGRN$ = this.store.pipe(
      select(totalSumSelectorConverter, { convertTo: 'grn' })
    );

    this.totalCount$ = this.store.pipe(
      select(totalSumSelector)
    );

  }
}
