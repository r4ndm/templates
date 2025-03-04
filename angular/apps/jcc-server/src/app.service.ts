import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  public getVersion(): string {
    return 'Catalog service v1.0';
  }
}
