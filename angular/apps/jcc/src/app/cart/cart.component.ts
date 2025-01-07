import { Component } from '@angular/core';
import { IProduct } from '../catalog/product.interface';
import { CartService } from './cart.service';
import { CatalogService } from '../catalog/catalog.service';
import { CommonModule } from '@angular/common';
import { CartDetailComponent } from "../cart-detail/cart-detail.component";
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from "../breadcrumb/breadcrumb.component";

@Component({
  selector: 'app-cart',
  imports: [CommonModule, CartDetailComponent, RouterModule, BreadcrumbComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  constructor(private catalogService: CatalogService, private cartService: CartService) {}

  public get cartItems(): IProduct[] {
    return this.cartService.getCart(); //this.cart;
  }

  public get cartTotal(): number {
    return this.cartService.getTotal();
  }

  public removeFromCart(productId: string): void {
    this.cartService.removeId(productId);
  }

  public getImageUrl(product: IProduct): string {
    return this.catalogService.getProductImageUrl(product.id);
  }
}
