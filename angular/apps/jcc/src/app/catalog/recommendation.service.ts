import { Injectable } from '@angular/core';
import { IProduct } from './product.interface';
import { CatalogService } from './catalog.service';

@Injectable({
  providedIn: 'root'
})
export class RecommendationService {

  constructor(private catalogService: CatalogService) { }

  public isBestSeller(id: string): boolean {
    return id === '1001' || id === '1005';
  }

  public getAlsoBought(id: string): IProduct[] {
    let alsoBought: IProduct[] = this.catalogService.getProducts().filter(product => product.id === '1001' || product.id === '1005');

    return alsoBought;

  }

  public getBestDeals(): IProduct[] {
    return this.catalogService.getProducts().filter(product => product.discount > 0);
  }
}
