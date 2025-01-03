import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RecommendationService } from '../catalog/recommendation.service';
import { IProduct } from '../catalog/product.interface';
import { CatalogService } from '../catalog/catalog.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private catalogService: CatalogService, private recommendationService: RecommendationService) {}
  
  protected getBestDeals(): IProduct[] {
    return this.recommendationService.getBestDeals();
  }

  protected getProductImageUrl(id: string): string {
    return this.catalogService.getProductImageUrl(id);
  }
}
