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
    this.cart.push({...product, count: 1});
  }

  public getCart(): ICart[] {
    return this.cart;
  }
}
