import { Injectable } from '@nestjs/common';
import { CatalogInmemoryPersistence } from './catalog.inmemory.persistence';
import { ProductDto } from './dto/product.dto';

@Injectable()
export class CatalogService {
  public constructor(private readonly catalogPersistenceService: CatalogInmemoryPersistence) {}

  // create(createCatalogDto: CreateCatalogDto) {
  //   return 'This action adds a new catalog';
  // }

  public findAll(): ProductDto[] {
    return this.catalogPersistenceService.getProducts();
  }

  public findOne(id: string): ProductDto | undefined {
    return this.catalogPersistenceService.getProduct(id);
  }

  // update(id: number, updateCatalogDto: UpdateCatalogDto) {
  //   return `This action updates a #${id} catalog`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} catalog`;
  // }
}
