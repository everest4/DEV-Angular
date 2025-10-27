import { Component, Input, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product: any;
  bgColor = '';

ngOnInit() {
  const colorMap: any = {
    Espresso: 'var(--espresso-color)',
    Cappuccino: 'var(--cappuccino-color)',
    Latte: 'var(--latte-color)',
    'Iced Coffee': 'var(--iced-coffee-color)',
    Desserts: 'var(--desserts-color)',
    Pastashu: 'var(--pastashu-color)',
    Mokacino: 'var(--mokacino-color)',
    Lavazza: 'var(--lavazza-color'
  };

  this.bgColor = colorMap[this.product.category] || 'var(--card-bg)';
}

}
