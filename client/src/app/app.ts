import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // ✅ shto këtë
import { HeaderComponent } from './components/header/header';
import { CategoryMenuComponent } from './components/category-menu/category-menu';
import { ProductGridComponent } from './components/product-grid/product-grid';
import { FilterBarComponent } from './components/filter-bar/filter';
import { PRODUCTS } from './data/products';
import { FooterBarComponent } from './components/footer-bar/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, // ✅ shto këtë
    HeaderComponent,
    CategoryMenuComponent,
    ProductGridComponent,
    FilterBarComponent,
    FooterBarComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  products = PRODUCTS;
  selectedCategory = 'All';
  isDark = false;

  toggleTheme() {
    document.body.classList.toggle('dark-theme');
    this.isDark = !this.isDark;
  }

  onCategorySelected(category: string) {
    this.selectedCategory = category;
  }

  get filteredProducts() {
    if (this.selectedCategory === 'All') return this.products;
    return this.products.filter(p => p.category === this.selectedCategory);
  }
}
