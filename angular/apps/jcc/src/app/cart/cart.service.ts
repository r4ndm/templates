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

  //TODO: cart only contain ids
  public add(product: IProduct): void {
    this.cart.push(product);
  }

  public removeId(productId: string) {
    const index = this.cart.findIndex(product => product.id === productId);

    if (index > -1) {
      this.cart.splice(index, 1);
    }
  }

  public remove(product: IProduct): void {
    const index = this.cart.indexOf(product);

    if (index > -1) {
      this.cart.splice(index, 1);
    }
  }

  public getTotal(): number {
    return this.cart.reduce((prev, next) => {
      const discount = next.discount && next.discount > 0 ? 1 - next.discount / 100 : 1;
      return prev + next.price * discount;
    }, 0);
  }
}
