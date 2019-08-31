import {Component, OnInit} from '@angular/core';
import {IProduct} from './interfaces/product';

declare module "*.json" {
  const value: any;
  export default value;
}

import * as data from './mock-data/products.json';
import {setTimeout} from 'timers';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products: IProduct[] = [];
  public isLoading: boolean = true;



  public ngOnInit(): void {
    setTimeout(() => {
      this.products = data.products;
      this.isLoading = false;
    }, 1000);
  }

}
