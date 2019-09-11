import { ProductsService } from './../shared/services/products.service';
import {Component, OnInit, OnDestroy} from '@angular/core';
import {IProduct} from './interfaces/product';
import {Subscription, Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  public subscription: Subscription;
  public products$: Observable<IProduct[]>;

  public constructor(
    private productsService: ProductsService
  ) {
  }

  public ngOnInit(): void {
    this.products$ = this.productsService.getProduct();


    // this.subscription = this.productsService.getProduct()
    // .subscribe((products: IProduct[]) => {
    //   this.products = products;
    //   this.isLoading = false;
    // });
  }

  public addToCart(product: IProduct): void {
    this.productsService.addToCart(product);
  }


  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
