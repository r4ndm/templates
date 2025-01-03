import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/product.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-detail',
  imports: [CommonModule],
  templateUrl: './cart-detail.component.html',
  styleUrl: './cart-detail.component.css'
})
export class CartDetailComponent {

  @Input() public product!: IProduct;
  @Output() public buttonPressed: EventEmitter<string> = new EventEmitter<string>();

  public getImageUrl(): string {
    return `images/products/${this.product.image}`;
  }

  public getDiscountClasses(product: IProduct): string {
    if (product.discount !== 0) {
      return 'strikethrough';
    }

    return '';
  }

  public removeButtonClicked(): void {
    this.buttonPressed.emit(this.product.id);
  }
}
