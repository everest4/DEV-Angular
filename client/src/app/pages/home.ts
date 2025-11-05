import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterBarComponent } from '../components/filter-bar/filter';
import { CategoryMenuComponent } from '../components/category-menu/category-menu';
import { ProductGridComponent } from '../components/product-grid/product-grid';
import { PRODUCTS } from '../data/products';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FilterBarComponent, CategoryMenuComponent, ProductGridComponent],
  template: `
    <app-filter-bar (categorySelected)="onCategorySelected($event)"></app-filter-bar>
    <app-category-menu (categoryChange)="onCategorySelected($event)"></app-category-menu>
    <app-product-grid [products]="filteredProducts"></app-product-grid>
  `
})
export class HomeComponent {
  products = PRODUCTS;
  selectedCategory = 'All';

  onCategorySelected(category: string) {
    this.selectedCategory = category;
  }

  get filteredProducts() {
    if (this.selectedCategory === 'All') return this.products;
    return this.products.filter(p => p.category === this.selectedCategory);
  }
}
