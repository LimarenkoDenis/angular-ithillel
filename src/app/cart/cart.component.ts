import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductsService } from './../shared/services/products.service';
import { Component, OnInit } from '@angular/core';
import {IRootState} from '../reducers';
import {ICart} from '../products/interfaces/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  // providers: [ProductsService]
})
export class CartComponent implements OnInit {
  public cart$: Observable<ICart[]>;


  constructor(
    private store: Store<IRootState>
    // private productService: ProductsService
  ) { }

  ngOnInit() {
    this.cart$ = this.store.pipe(select('cart'));

    // this.cart = this.productService.getCart();

    // setInterval(() => {
    //   this.cart = this.productService.getCart();
    // }, 1000);
  }

}
