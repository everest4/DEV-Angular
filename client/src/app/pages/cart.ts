import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { CartService } from '../components/services/cart_services';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, CurrencyPipe], // ✅ Shto CurrencyPipe këtu
  templateUrl: './cart.html',
  styleUrls: ['./cart.css']
})
export class CartComponent {
  cartItems: any[] = [];
  total: number = 0;
  successMessage: string = '';

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.cartItems = this.cartService.getItems();
    this.total = this.cartService.getTotal();
  }

  pay() {
    if (this.cartItems.length === 0) return;

    this.successMessage = 'FATURA U DËRGUA ME SUKSES ✅';
    this.cartService.clearCart();

    setTimeout(() => {
      this.router.navigate(['/']);
    }, 3000);
  }

  back() {
    this.router.navigate(['/']);
  }
}
