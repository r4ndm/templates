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
  public constructor(private catalogService: CatalogService, private cartService: CartService) {}

  public get cartCount(): number {
    return this.cartService.count;
  }

  public getCartProducts(): IProduct[] {
    return this.cartService.getCart().map(productId => this.catalogService.getProduct(productId)).filter(p => !!p);
  }

  public get cartTotal(): number {
    return this.catalogService.getTotal(this.cartService.getCart());
  }

  public removeFromCart(productId: string): void {
    this.cartService.remove(productId);
  }

  public getImageUrl(product: IProduct): string {
    return this.catalogService.getProductImageUrl(product.id);
  }
}
