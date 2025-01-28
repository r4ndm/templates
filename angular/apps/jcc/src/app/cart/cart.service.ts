import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: string[];

  constructor() {
    this.cart = [];
  }

  public getCart(): string[] {
    return this.cart;
  }

  public add(productId: string): void {
    this.cart.push(productId);
  }

  public remove(productId: string): void {
    const index = this.cart.indexOf(productId);

    if (index > -1) {
      this.cart.splice(index, 1);
    }
  }

  public get count(): number {
    return this.cart.length;
  }
}
