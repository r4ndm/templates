import { Injectable } from '@angular/core';
import { IProduct } from './product.interface';
import { HttpClient } from '@angular/common/http';

/*
   First cut, get products from backend and cache locally
   Second, all methods here can be replaced with calls to backend
   Third, implement loading in the page till the data is available
*/
@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  private products: IProduct[] = [];
  private initialized: boolean = false;
  private loading: boolean = false;
  private productUrl: string = 'api/catalog/catalog.json';

  constructor(private http: HttpClient) {}

  public getProductIds(): string[] {
    return this.getProducts().map((product) => product.id);
  }

  public getProduct(id: string): IProduct | undefined {
    return this.getProducts().find((product) => product.id === id);
  }

  public getProductImageUrl(id: string): string {
    const product = this.getProduct(id);
    return product ? `images/products/${product.image}` : '';
  }

  public getProducts(): IProduct[] {
    // if (!this.products || this.products.length === 0) {
    if (!this.initialized && !this.loading) {
      this.loading = true;
      this.initProducts();
    }

    return this.products;
  }

  public getCategories(): string[] {
    return [...new Set(this.getProducts().map((p) => p.category)), 'All'];
  }

  public getProductsOfCategory(category: string): IProduct[] {
    const cat = category.toLowerCase();
    return this.getProducts().filter((p) => cat === 'all' || p.category.toLowerCase() === cat);
  }

  public getTotal(productIds: string[]): number {
    return productIds.reduce((prev, next) => {
      const product = this.getProduct(next);

      if (!product) {
        return prev;
      }

      const discount = product.discount && product.discount > 0 ? 1 - product.discount / 100 : 1;
      return prev + product.price * discount;
    }, 0);
  }

  public isLoading(): boolean {
    return this.loading && !this.initialized;
  }

  private initProducts(): void {
    this.http.get<IProduct[]>(this.productUrl).subscribe((products) => {
      // simulate time taken to fetch data
      setTimeout(() => {
        this.products = products;
        this.initialized = true;
        this.loading = false;
      }, 4000);
    });
  }
}
