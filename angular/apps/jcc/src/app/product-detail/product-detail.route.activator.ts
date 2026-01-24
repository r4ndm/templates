import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { CatalogService } from '../catalog/catalog.service';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailRouteActivator implements CanActivate {
  private catalogService = inject(CatalogService);
  private router = inject(Router);

  public canActivate(route: ActivatedRouteSnapshot): boolean {
    const productId: string = route.params['id'] as string;
    const productExists = !!this.catalogService.getProduct(productId);

    if (!productExists) {
      void this.router.navigate(['/404']);
    }

    return productExists;
  }
}
