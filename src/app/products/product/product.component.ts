import { Component, Input, Output, EventEmitter} from '@angular/core';
import {IProduct} from '../interfaces/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  {
  @Input()
  public product: IProduct;

  @Output()
  public addToCart: EventEmitter<IProduct> = new EventEmitter();

  @Output()
  public deleteProductEvent: EventEmitter<number> = new EventEmitter();


  public toCart(product: IProduct): void {
    this.addToCart.emit(product);
  }

  public deleteProduct(id: number): void {
    this.deleteProductEvent.emit(id);
  }
}
