import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-order',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  constructor(private router: Router, private cartService: CartService) {}

  protected get cartTotal(): number {
    return this.cartService.getTotal();
  }

  public onSubmit(): void {
    console.log('Order submitted');
    this.router.navigate(['/confirmation']);
  }
}
