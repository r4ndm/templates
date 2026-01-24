import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CatalogService } from '../catalog/catalog.service';
import { IProduct } from '../catalog/product.interface';

import { RecommendationService } from '../catalog/recommendation.service';
import { CartService } from '../cart/cart.service';
import { BreadcrumbComponent } from "../breadcrumb/breadcrumb.component";

@Component({
  selector: 'app-product-detail',
  imports: [RouterModule, BreadcrumbComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  private cartService = inject(CartService);
  private catalogService = inject(CatalogService);
  private recommendationService = inject(RecommendationService);
  private route = inject(ActivatedRoute);

  protected product: IProduct | undefined;

  protected productId: string = '';

  public ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productId = params['id'] as string;
      this.product = this.catalogService.getProduct(this.productId);
    });
  }

  protected getImageUrlForId(id: string): string {
    return this.catalogService.getProductImageUrl(id);
  }

  protected getImageUrl(): string {
    return `/images/products/${this.product?.image}`;
  }

  protected getRecommended(): IProduct[] {
    return this.recommendationService.getAlsoBought(this.productId);
  }

  protected isBestSeller(): boolean {
    return this.recommendationService.isBestSeller(this.productId);
  }

  protected addToCart(): void {
    if (this.product) {
      this.cartService.add(this.product.id);
    }
  }
}
