import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card';

@Component({
  selector: 'app-product-grid',
  standalone: true,
  imports: [NgFor, ProductCardComponent],
  templateUrl: './product-grid.html',
  styleUrl: './product-grid.css'
})
export class ProductGridComponent {
  @Input() products: any[] = [];
}
