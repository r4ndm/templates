import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/product.interface';

@Component({
  selector: 'app-product-summary',
  imports: [],
  templateUrl: './product-summary.component.html',
  styleUrl: './product-summary.component.css'
})
export class ProductSummaryComponent {

  @Input() public product!: IProduct;
  @Output() public detailButtonPressed = new EventEmitter<IProduct>();

  public getImageUrl(): string {
    return `/images/products/${this.product.image}`;
  }

  public detailButtonClicked(): void {
    this.detailButtonPressed.emit(this.product);
  }
}
