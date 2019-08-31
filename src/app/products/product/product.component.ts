import { Component, Input } from '@angular/core';
import {IProduct} from '../interfaces/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  {
  @Input()
  public product: IProduct;
}
