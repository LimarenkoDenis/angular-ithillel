import { PageEvent } from '@angular/material/paginator';
import { environment } from './../../../environments/environment';
import { ICart, IProduct } from './../../products/interfaces/product';
import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { delay, tap, catchError } from 'rxjs/operators';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';

// {
//   providedIn: 'root'
// }
@Injectable()
export class ProductsService {
  private cart: ICart[] = [];

  public constructor(
    private http: HttpClient,
    private _snackBar: MatSnackBar
    // private usersServicee: UsersService
  ) {

  }

  public getProductComments(productId: number): Observable<any> {
    return this.http.get<any>(`${environment.api}/products/${productId}/comments`);
  }

  public getProductById(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${environment.api}/products/${id}`);
  }


  // TODO: rename getProducts
  public getProduct(params: Partial<PageEvent>): Observable<IProduct[]> {
    const httpParams: HttpParams = new HttpParams({
      fromObject: {
        _page: String(params.pageIndex),
        _limit: String(params.pageSize)
      }
    });

    return this.http.get<IProduct[]>(`${environment.api}/products`, {
      params: httpParams
    }).pipe(
      catchError(() => {
        this._snackBar.open('Server is unvalible now');
        console.log('error');

        return of([]);
      })
    );


    // API request
    // return of(this.products).pipe(
    //   tap(() => console.log('product request')),
    //   delay(3000)
    // );
  }

  public deleteProduct(id: number): Observable<void> {
    // TODO: localStorage sericce
    const token:string  = localStorage.getItem('token');
    // 'Authorization=Be'
    const headers: HttpHeaders = new HttpHeaders( {
      'Authorization': `Bearer ${token}`
    });


    return this.http.delete<void>(`${environment.api}/products/${id}`, { headers });
  }

  public addProduct(newProduct: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(`${environment.api}/products`, newProduct);
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
