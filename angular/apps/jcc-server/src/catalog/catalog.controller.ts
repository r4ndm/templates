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
  @Get('/product')
  public getProducts(): ProductDto[] {
    return this.catalogService.getProducts();
  }

  @Get('/product/:id')
  public getProduct(@Param('id') id: string): ProductDto {
    const product: ProductDto | undefined = this.catalogService.getProduct(id);

    if (!product) {
      throw new NotFoundException('Invalid product');
    }

    return product;
  }

  @Get('/ids')
  public getProductIds(): string[] {
    return this.catalogService.getProductIds();
  }

  @Get('/categories')
  public getCategories(): string[] {
    return this.catalogService.getCategories();
  }

  //TODO: replace with search query param
  @Get('/find/:category')
  public findProducts(@Param('category') category: string): ProductDto[] {
    return this.catalogService.findProducts(category);
  }

  //TODO: gettotal will be a post with ProductListDto?

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCatalogDto: UpdateCatalogDto) {
  //   return this.catalogService.update(+id, updateCatalogDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.catalogService.remove(+id);
  // }
}
