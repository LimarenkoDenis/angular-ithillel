import {ICart} from './../../products/interfaces/product';
import {delay, map} from 'rxjs/operators';
import {ProductsService} from './../services/products.service';
import {Injectable} from '@angular/core';
import {CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderGuard implements CanActivate, CanActivateChild {
  constructor(
    private productsService: ProductsService
  ) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return of(this.productsService.getCart()).pipe(
      delay(1000),
      map((products: ICart[]) => Boolean(products.length))
    );


    // return this.productsService.getProducts({}).pipe(
    //   map((pr) => Boolean(pr.length))
    // )
  }


  public canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return true;
    }

}
