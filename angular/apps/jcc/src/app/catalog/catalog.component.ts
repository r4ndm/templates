import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProductSummaryComponent } from '../product-summary/product-summary.component';
import { CatalogService } from './catalog.service';
import { IProduct } from './product.interface';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-catalog',
  imports: [CommonModule, RouterModule, ProductSummaryComponent, BreadcrumbComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent implements OnInit {
  protected currentFilter: string = 'All';

  constructor(private catalogService: CatalogService, private router: Router, private route: ActivatedRoute) {}

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

  public viewDetails(product: IProduct): void {
    void this.router.navigate(['/detail', product.id]);
  }
}
