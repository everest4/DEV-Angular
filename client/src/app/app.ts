import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header'; // ✅ add this
import { CategoryMenuComponent } from './components/category-menu/category-menu';
import { ProductGridComponent } from './components/product-grid/product-grid';
import { PRODUCTS } from './data/products';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, CategoryMenuComponent, ProductGridComponent], // ✅ include Header
  templateUrl: './app.html',
  styleUrls: ['./app.css'] // ✅ must be plural: styleUrls
})
export class AppComponent {
  title = 'mc-cafee';
  products = PRODUCTS;
  selectedCategory = 'Espresso';

  toggleTheme() {
    document.body.classList.toggle('dark-theme');
  }

  onCategorySelected(category: string) {
    this.selectedCategory = category;
  }

  get filteredProducts() {
    return this.products.filter(p => p.category === this.selectedCategory);
  }
}
