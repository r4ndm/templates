export class Component {
  public name!: string;
  public model!: string;
  public specs!: string;
}

export class ProductDto {
  public id!: string;
  public description!: string;
  public name!: string;
  public image!: string;
  public category!: string;
  public price!: number;
  public discount!: number;
  public about!: string;
  public componentsHighlights!: string[];
  public components!: Component[];
  public applications!: string;
}
