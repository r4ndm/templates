import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { CatalogService } from './catalog.service';
import { ProductDto } from './dto/product.dto';

@Controller('catalog')
export class CatalogController {
  public constructor(private readonly catalogService: CatalogService) {}

  // @Post()
  // create(@Body() createCatalogDto: CreateCatalogDto) {
  //   return this.catalogService.create(createCatalogDto);
  // }

  //TODO: change this to async: public async findAll(): Promise<ProductDto[]> ...
  //      and async methods all the way through to persistence
  // TODO: Get lint to flag these: access modifier, return type
  @Get()
  public findAll(): ProductDto[] {
    return this.catalogService.findAll();
  }

  @Get(':id')
  public findOne(@Param('id') id: string): ProductDto {
    const product: ProductDto | undefined = this.catalogService.findOne(id);

    if (!product) {
      throw new NotFoundException('Invalid product');
    }

    return product;
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCatalogDto: UpdateCatalogDto) {
  //   return this.catalogService.update(+id, updateCatalogDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.catalogService.remove(+id);
  // }
}
