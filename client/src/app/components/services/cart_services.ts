import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: any[] = [];
  private cartCount = new BehaviorSubject<number>(0);

  cartCount$ = this.cartCount.asObservable();

  addToCart(product: any) {
    const existingItem = this.items.find(item => item.name === product.name);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.items.push({ ...product, quantity: 1 });
    }

    this.updateCount();
  }

  getItems() {
    return this.items;
  }

  getTotal() {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  clearCart() {
    this.items = [];
    this.updateCount();
  }

  private updateCount() {
    const totalCount = this.items.reduce((sum, item) => sum + item.quantity, 0);
    this.cartCount.next(totalCount);
  }
}
