import { Module } from '@nestjs/common';
import { CatalogService } from './catalog.service';
import { CatalogController } from './catalog.controller';
import { CatalogInmemoryPersistence } from './catalog.inmemory.persistence';

@Module({
  controllers: [CatalogController],
  providers: [CatalogService, CatalogInmemoryPersistence]
})
export class CatalogModule {}
