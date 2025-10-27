import { Component } from '@angular/core';
import { CategoryMenuComponent } from './components/category-menu/category-menu';
import { ProductGridComponent } from './components/product-grid/product-grid';
import { HeaderComponent } from './components/header/header';
import { PRODUCTS } from './data/products';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, CategoryMenuComponent, ProductGridComponent],
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
