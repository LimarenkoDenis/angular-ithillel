import { ProductsService } from './../shared/services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  // providers: [ProductsService]
})
export class CartComponent implements OnInit {
  public cart = [];


  constructor(
    private productService: ProductsService
  ) { }

  ngOnInit() {
    this.cart = this.productService.getCart();

    // setInterval(() => {
    //   this.cart = this.productService.getCart();
    // }, 1000);
  }

}
