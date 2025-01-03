import { IComponent } from "./component.interface";

export interface IProduct {
  id: string;
  description: string;
  name: string;
  image: string;
  category: string;
  price: number;
  discount: number;
  about: string;
  componentsHighlights: string[];
  components: IComponent[];
  applications: string;
}
