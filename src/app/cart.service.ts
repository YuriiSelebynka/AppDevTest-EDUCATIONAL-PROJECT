import { Injectable } from '@angular/core';
import { Product } from 'src/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  products : Product[] = [];
  constructor() { }

  addProductsToCart(product) {
    this.products.push(product);
  };

  getProducts() {
    return this.products;
  };

  clearCart() {
    this.products = [];
  };
}
