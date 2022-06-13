import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {

  products = this.cart.getProducts();
  sum : number;
  newPrice : number;
  shippingPrice = 8;
  totalPrice : number;

  constructor(private cart : CartService) { }

  ngOnInit(): void {
    this.updateSum();
  }

  updateSum() {
    this.sum = 0;
    //sub total logic - Scenario 1
    for(let i=0; i<this.products.length; i++) {
      this.sum = this.sum + this.products[i].price;
    };
    this.totalPrice = this.sum + this.shippingPrice;
  };

  //onKey - sub total should get update
  onKey(product,value) {
    //product.price = original price
    //value * product.price = new price
    //sum - original price + new price
    this.newPrice = value * product.price;
    this.sum = this.sum - product.price + this.newPrice;
    this.totalPrice = this.sum + this.shippingPrice;
  };

  deleteProduct(product) {
    //[ 0th index(selenium) , 1st index (Devops)    ]
    //products.splice(1,1)
    //[ 0th index(selenium)    ]
    const index = this.products.indexOf(product);
    this.products.splice(index,1);
    this.updateSum();
  };

}
