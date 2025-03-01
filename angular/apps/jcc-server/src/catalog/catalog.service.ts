import { Injectable } from '@nestjs/common';
import { CatalogInmemoryPersistence } from './catalog.inmemory.persistence';
import { ProductDto } from './dto/product.dto';

@Injectable()
export class CatalogService {
  constructor(private readonly catalogPersistenceService: CatalogInmemoryPersistence) {}

  // create(createCatalogDto: CreateCatalogDto) {
  //   return 'This action adds a new catalog';
  // }

  findAll(): ProductDto[] {
    return this.catalogPersistenceService.getProducts();
  }

  findOne(id: string) {
    return this.catalogPersistenceService.getProduct(id);
  }

  // update(id: number, updateCatalogDto: UpdateCatalogDto) {
  //   return `This action updates a #${id} catalog`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} catalog`;
  // }
}
