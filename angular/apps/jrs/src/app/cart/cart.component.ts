import { Component } from '@angular/core';
import { CartService } from './cart.service';
import { IProduct } from '../catalog/product.interface';

@Component({
  selector: 'bot-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(private cartService: CartService) {
  }

  public get cartItems(): IProduct[] {
    return this.cartService.getCart(); //this.cart;
  }

  public get cartTotal(): number {
    return this.cartService.getCart().reduce((prev, next) => {
      const discount = next.discount && next.discount > 0 ? 1 - next.discount : 1;
      return prev + next.price * discount;
    }, 0);
  }

  public removeFromCart(product: IProduct): void {
    this.cartService.remove(product);
  }

  public getImageUrl(product: IProduct): string {
    return `/assets/images/robot-parts/${product.imageName}`;
  }
}
