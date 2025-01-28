import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartService } from '../cart/cart.service';
import { BreadcrumbComponent } from "../breadcrumb/breadcrumb.component";
import { CatalogService } from '../catalog/catalog.service';

@Component({
  selector: 'app-order',
  imports: [CommonModule, FormsModule, RouterModule, BreadcrumbComponent],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  constructor(private router: Router, private cartService: CartService, private catalogService: CatalogService) {}

  protected get cartTotal(): number {
    return this.catalogService.getTotal(this.cartService.getCart());
  }

  public onSubmit(): void {
    //void used here to avoid floating promise lint error
    void this.router.navigate(['/confirmation']);
  }
}
