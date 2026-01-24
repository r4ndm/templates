import { Component, OnInit, inject } from '@angular/core';

import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CatalogService } from './catalog.service';
import { IProduct } from './product.interface';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { ProductSummaryCardComponent } from "../product-summary-card/product-summary-card.component";

@Component({
  selector: 'app-catalog',
  imports: [RouterModule, BreadcrumbComponent, ProductSummaryCardComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent implements OnInit {
  private catalogService = inject(CatalogService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  protected currentFilter: string = 'All';

  public ngOnInit(): void {
    // this.currentFilter = this.route.snapshot.params['filter'] ?? 'All';

    this.route.paramMap.subscribe((params) => {  
      this.currentFilter = params.get('filter') ?? 'All';  
   });  
  }

  protected get filters(): string[] {
    return this.catalogService.getCategories();
  }

  public getProducts(): IProduct[] {
    return this.catalogService.getProductsOfCategory(this.currentFilter);
  }

  public isLoading(): boolean {
    return this.catalogService.isLoading();
  }

  public viewDetails(product: IProduct): void {
    void this.router.navigate(['/detail', product.id]);
  }
}
