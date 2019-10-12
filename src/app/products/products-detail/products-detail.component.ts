import { ProductsService } from './../../shared/services/products.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {IProduct} from '../interfaces/product';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {
  public product$: Observable<IProduct>;

  constructor(
    private _activateRoute: ActivatedRoute,
    private _productsService: ProductsService
  ) { }

  ngOnInit() {
    // this._activateRoute.paramMap.pipe(
    //   switchMap((data: ParamMap) => this._productsService.getProductById(Number(data.get('id'))))
    // ).subscribe((product: IProduct) => this.product = product)


    this.product$ = this._activateRoute.paramMap.pipe(
        switchMap((data: ParamMap) => this._productsService.getProductById(Number(data.get('id'))))
    );
    // this._activateRoute.params
  }

}
