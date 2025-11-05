import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { CartService } from '../components/services/cart_services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './cart.html',
  styleUrls: ['./cart.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  total = 0;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.cartItems = this.cartService.getItems();
    this.total = this.cartService.getTotal();
  }

  pay() {
    alert('Fatura u pagua me sukses!');
    this.cartService.clearCart();
    this.cartItems = [];
    this.total = 0;
  }

  back() {
    this.router.navigate(['/']); // ✅ Do të kthejë te faqja me produktet
  }
}