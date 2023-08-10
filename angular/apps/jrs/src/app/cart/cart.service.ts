import { Injectable } from '@angular/core';
import { IProduct } from '../catalog/product.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: IProduct[];

  constructor() {
    this.cart = [];
  }

  public getCart(): IProduct[] {
    return this.cart;
  }

  public add(product: IProduct): void {
    this.cart.push(product);
  }

  public remove(product: IProduct): void {
    const index = this.cart.indexOf(product);

    if (index > -1) {
      this.cart.splice(index, 1);
    }
  }
}
