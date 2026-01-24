import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CatalogService } from '../catalog/catalog.service';

import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-nav-header',
  imports: [RouterModule],
  templateUrl: './nav-header.component.html',
  styleUrl: './nav-header.component.css'
})
export class NavHeaderComponent {
  private cartService = inject(CartService);
  private catalogService = inject(CatalogService);

  protected get filters(): string[] {
    return this.catalogService.getCategories();
  }

  protected get cartCount(): number {
    return this.cartService.count;
  }
}
