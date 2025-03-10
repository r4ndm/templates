import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatalogModule } from './catalog/catalog.module';
import { ConfigModule } from '@nestjs/config';

// console.log(`In AppModule during init of persistence providers, env is ${process.env.PERSISTENCE_PROVIDER}`);
@Module({
  imports: [
    CatalogModule,
    ConfigModule.forRoot({
      envFilePath: ['.env.dev.local', '.env.dev.prod']
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
