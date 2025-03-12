import { Module } from '@nestjs/common';
import { CatalogService } from './catalog.service';
import { CatalogController } from './catalog.controller';
import { ConfigModule } from '@nestjs/config';
import { CatalogPersistenceFactory } from './persistence/catalog.persistence.factory';

// Register persistence providers
// This doesn't work when using CongirService to initialize from a file (OS env variables work as they are initialized)
// TODO: what is a better alternative?
// console.log(`during init of persistence providers, env is ${process.env.PERSISTENCE_PROVIDER}`);
// const catalogPersistenceProvider = {
//   provide: CatalogPersistence,
//   useClass: process.env.PERSISTENCE_PROVIDER === 'File' ? CatalogFilePersistence : CatalogInmemoryPersistence
// };

@Module({
  imports: [ConfigModule],
  controllers: [CatalogController],
  providers: [CatalogService, CatalogPersistenceFactory] //, catalogPersistenceProvider]
})
export class CatalogModule {}
