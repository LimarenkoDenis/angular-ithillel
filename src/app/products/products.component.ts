import { ProductsService } from './../shared/services/products.service';
import {Component, OnInit, OnDestroy} from '@angular/core';
import {IProduct} from './interfaces/product';
import {Subscription, Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public params: Partial<PageEvent> = {
    pageSize: 2,
    pageIndex: 1
  };

  public subscription: Subscription;
  public products$: Observable<IProduct[]>;

  public constructor(
    private productsService: ProductsService,
    // private usersService: UsersService,
  ) {
  }

  public ngOnInit(): void {
    this.fetProducts();

    // this.subscription = this.productsService.getProduct()
    // .subscribe((products: IProduct[]) => {
    //   this.products = products;
    //   this.isLoading = false;
    // });
  }

  public addToCart(product: IProduct): void {
    this.productsService.addToCart(product);
  }

  public deleteProduct(id: number): void {
    this.productsService.deleteProduct(id).subscribe(() => {
      this.fetProducts();
    });
  }

  public addProduct(): void {
  // const newProduct: any = {
  //   "title": "new PRODUCT!!!!!",
  //   "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quae culpa porro ducimus!",
  //   "photo": "http://thejizn.com/wp-content/uploads/2016/06/coca-cola-stash-can-12-oz-1_1.jpg",
  //   "price": 22,
  //   "type": "dessert"
  // },

  //   this.productsService.addProduct(newProduct)
  //   .subscribe((data: IProduct) => {
  //     console.log('success created', data);
  //   });
  }


  // public ngOnDestroy(): void {
  //   this.subscription.unsubscribe();
  // }

  public changePage(event: PageEvent): void {
    this.params = {...event, pageIndex: event.pageIndex + 1};
    this.fetProducts();
  }

  public fetProducts(): void {
    this.products$ = this.productsService.getProduct(this.params);
  }
}
