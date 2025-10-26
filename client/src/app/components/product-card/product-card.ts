import { Component, Input } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common'; // ✅ import CommonModule + CurrencyPipe

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, CurrencyPipe], // ✅ CommonModule gives you *ngIf, *ngFor, etc.
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css']
})
export class ProductCardComponent {
  @Input() product: any;
}
