import { ProductDto } from './dto/product.dto';

export abstract class CatalogPersistence {
  public abstract getProducts(): ProductDto[];
  public abstract getProduct(id: string): ProductDto | undefined;
  public abstract getProductIds(): string[];
  public abstract getCategories(): string[];
  public abstract findProducts(category: string): ProductDto[];
}
