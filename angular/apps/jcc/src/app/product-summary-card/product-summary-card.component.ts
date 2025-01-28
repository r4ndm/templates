import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/product.interface';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-product-summary-card',
  imports: [],
  templateUrl: './product-summary-card.component.html',
  styleUrl: './product-summary-card.component.css'
})
export class ProductSummaryCardComponent {
  @Input() public product!: IProduct;
  @Output() public detailButtonPressed = new EventEmitter<IProduct>();

  constructor(private cartService: CartService) {}
  
  public getImageUrl(): string {
    return `/images/products/${this.product.image}`;
  }

  public detailButtonClicked(): void {
    this.detailButtonPressed.emit(this.product);
  }

  public addCartButtonClicked(): void {
    if (this.product) {
      this.cartService.add(this.product.id);
    }
  }
}
