import { ICart } from './../../products/interfaces/product';
import { Injectable } from '@angular/core';
import {IProduct} from 'src/app/products/interfaces/product';
import * as data from '../../products/mock-data/products.json';
import {Observable, of} from 'rxjs';
import { delay, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: IProduct[] = data.products;
  private cart: ICart[] = [];


  public getProduct(): Observable<IProduct[]> {
    // API request
    return of(this.products).pipe(
      tap(() => console.log('product request')),
      delay(3000)
    );
  }


  public addToCart(product: IProduct): void {
    const index: number = this.cart.findIndex((item: ICart) => item.id === product.id);

    if (index === -1) {
      this.cart.push({...product, count: 1});

      // TODO: do not notify cart component
      // this.cart = [...this.cart, {...product, count: 1}];
      return;
    }

    const element: ICart = this.cart[index];
    this.cart.splice(index, 1, {...element, count: element.count + 1});
  }

  public getCart(): ICart[] {
    return this.cart;
  }
}
