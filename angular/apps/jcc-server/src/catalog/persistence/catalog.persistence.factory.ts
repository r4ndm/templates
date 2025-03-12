import { Injectable } from '@nestjs/common';
import { CatalogPersistence } from './catalog.persistence';
import { ConfigService } from '@nestjs/config';
import { CatalogFilePersistence } from './catalog.file.persistence';
import { CatalogInmemoryPersistence } from './catalog.inmemory.persistence';

@Injectable()
export class CatalogPersistenceFactory {
  private catalogPersistenceService: CatalogPersistence;

  constructor(private readonly configService: ConfigService) {
    this.catalogPersistenceService =
      this.configService.get<string>('PERSISTENCE_PROVIDER') === 'File' ? new CatalogFilePersistence() : new CatalogInmemoryPersistence();
  }

  public createCatalogPersistenceService(): CatalogPersistence {
    return this.catalogPersistenceService;
  }
}
