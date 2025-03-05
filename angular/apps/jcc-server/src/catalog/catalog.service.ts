import { Injectable } from '@nestjs/common';
import { CatalogInmemoryPersistence } from './catalog.inmemory.persistence';
import { ProductDto } from './dto/product.dto';

@Injectable()
export class CatalogService {
  //TODO: Inject appropriate catalog persistence service based on env
  public constructor(private readonly catalogPersistenceService: CatalogInmemoryPersistence) {}

  // create(createCatalogDto: CreateCatalogDto) {
  //   return 'This action adds a new catalog';
  // }

  public getProducts(): ProductDto[] {
    return this.catalogPersistenceService.getProducts();
  }

  public getProduct(id: string): ProductDto | undefined {
    return this.catalogPersistenceService.getProduct(id);
  }

  public getProductIds(): string[] {
    return this.catalogPersistenceService.getProductIds();
  }

  public getCategories(): string[] {
    return this.catalogPersistenceService.getCategories();
  }

  public findProducts(category: string): ProductDto[] {
    return this.catalogPersistenceService.findProducts(category);
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

  // update(id: number, updateCatalogDto: UpdateCatalogDto) {
  //   return `This action updates a #${id} catalog`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} catalog`;
  // }
}
