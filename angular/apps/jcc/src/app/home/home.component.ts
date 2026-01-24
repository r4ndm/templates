
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RecommendationService } from '../catalog/recommendation.service';
import { IProduct } from '../catalog/product.interface';
import { CatalogService } from '../catalog/catalog.service';
import { BreadcrumbComponent } from "../breadcrumb/breadcrumb.component";

@Component({
  selector: 'app-home',
  imports: [RouterModule, BreadcrumbComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private catalogService = inject(CatalogService);
  private recommendationService = inject(RecommendationService);
  
  protected getBestDeals(): IProduct[] {
    return this.recommendationService.getBestDeals();
  }

  protected getProductImageUrl(id: string): string {
    return this.catalogService.getProductImageUrl(id);
  }
}
