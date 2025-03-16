import { Injectable } from '@nestjs/common';
import { ProductDto } from '../dto/product.dto';
import { CatalogPersistence } from './catalog.persistence';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class CatalogFilePersistence extends CatalogPersistence {
  //TODO: this should be ProductEntity[]
  private initialized: boolean = false;
  private products: ProductDto[] = [];
  private categories: string[] = [];

  private productsFile: string = 'products.json';
  private categoriesFile: string = 'categories.json';

  public constructor() {
    super();
    //this.initialize();
  }

  public getProducts(): ProductDto[] {
    // TODO: should read ProductEntity and convert to ProductDto
    //TODO: make async

    if (!this.initialized) {
      this.initialize();
    }

    return this.products;
  }

  public getProduct(id: string): ProductDto | undefined {
    return this.getProducts().find(product => product.id === id);
  }

  public getProductIds(): string[] {
    return this.getProducts().map(product => product.id);
  }

  //TODO: category should be stored separately, not inferred from products
  //      and All should not be here
  public getCategories(): string[] {
    // return [...new Set(this.getProducts().map(p => p.category)), 'All'];
    if (!this.initialized) {
      this.initialize();
    }

    return this.categories;
  }

  //TODO: this should search based on search criteria, not just category
  public findProducts(category: string): ProductDto[] {
    const cat = category.toLowerCase();
    return this.getProducts().filter(p => cat === 'all' || p.category.toLowerCase() === cat);
  }

  private initialize(): void {
    this.initCategories();
    this.initProducts();
    this.initialized = true;
  }

  private initCategories2(): void {
    this.categories = ['ARMoid', 'INTELoid', 'AMDoid', 'Quantumoid', 'All'];
  }

  private initProducts(): void {
    try {
      const productFilePath = path.join(process.cwd(), 'dist', 'assets', this.productsFile);
      console.log(`reading file ${productFilePath}`);
      const productsJson: string = fs.readFileSync(productFilePath, 'utf8');
      this.products = JSON.parse(productsJson) as ProductDto[];
    } catch (error: any) {
      console.error(`unable to read ${this.productsFile}. ${error}`);
    }
  }

  private initCategories(): void {
    try {
      const categoriesFilePath = path.join(process.cwd(), 'dist', 'assets', this.categoriesFile);
      console.log(`reading file ${categoriesFilePath}`);
      const categoriesJson: string = fs.readFileSync(categoriesFilePath, 'utf8');
      this.categories = JSON.parse(categoriesJson) as string[];
    } catch (error: any) {
      console.error(`unable to read ${this.categoriesFile}. ${error}`);
    }
  }
}
