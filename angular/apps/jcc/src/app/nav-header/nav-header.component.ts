import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CatalogService } from '../catalog/catalog.service';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-nav-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-header.component.html',
  styleUrl: './nav-header.component.css'
})
export class NavHeaderComponent {
  constructor(private cartService: CartService, private catalogService: CatalogService) {}

  protected get filters(): string[] {
    return this.catalogService.getCategories();
  }

  protected get cartCount(): number {
    return this.cartService.count;
  }
}
