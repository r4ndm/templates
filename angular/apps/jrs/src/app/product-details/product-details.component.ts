import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/product.interface';

@Component({
  selector: 'bot-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @Input() public product!: IProduct;
  @Input() public mode: string = 'catalog';
  @Output() buttonPressed = new EventEmitter();

  public getImageUrl() : string {
    return `/assets/images/robot-parts/${this.product.imageName}`;
  }

  public getDiscountClasses(product: IProduct) : string {
    if (product.discount !== 0) {
      return 'strikethrough';
    }

    return '';
  }

  public buyButtonClicked(): void {
    this.buttonPressed.emit();
  }
}
