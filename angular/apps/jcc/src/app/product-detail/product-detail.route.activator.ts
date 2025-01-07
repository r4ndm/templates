import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { CatalogService } from '../catalog/catalog.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailRouteActivator implements CanActivate {
  public constructor(private catalogService: CatalogService, private router: Router) {}

  public canActivate(route: ActivatedRouteSnapshot): boolean {
    const productId: string = route.params['id'] as string;
    const productExists = !!this.catalogService.getProduct(productId);

    if (!productExists) {
      void this.router.navigate(['/404']);
    }

    return productExists;
  }
}
