import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ProductSummaryComponent } from '../product-summary/product-summary.component';
import { CatalogService } from './catalog.service';
import { IProduct } from './product.interface';

@Component({
  selector: 'app-catalog',
  imports: [CommonModule, RouterModule, ProductSummaryComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {
  protected currentFilter: string = 'All';

  constructor(private catalogService: CatalogService, private router: Router) {}

  protected get filters(): string[] {
    return this.catalogService.getCategories();
  }

  public getProducts(): IProduct[] {
    return this.catalogService.getProductsOfCategory(this.currentFilter);
  }

  public viewDetails(product: IProduct): void {
    void this.router.navigate(['/detail', product.id]); 
  }
}
