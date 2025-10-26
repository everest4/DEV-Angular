import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-category-menu',
  standalone: true,
  templateUrl: './category-menu.html',
  styleUrls: ['./category-menu.css'] // ✅ must be plural
})
export class CategoryMenuComponent {
  // Categories shown in the menu
  categories = ['Espresso', 'Cappuccino', 'Latte', 'Iced Coffee', 'Desserts'];
  selectedCategory = this.categories[0];

  // Sends selected category to parent (AppComponent)
  @Output() categoryChange = new EventEmitter<string>();

  // Used to scroll the menu smoothly
  @ViewChild('menu', { static: false }) menuRef!: ElementRef;

  selectCategory(category: string, event: MouseEvent) {
    this.selectedCategory = category;

    // 🔹 Send event to parent
    this.categoryChange.emit(category);

    // 🔹 Smooth scroll to center the selected item
    const target = event.target as HTMLElement;
    const menu = this.menuRef.nativeElement as HTMLElement;

    const menuRect = menu.getBoundingClientRect();
    const itemRect = target.getBoundingClientRect();
    const scrollLeft = menu.scrollLeft + (itemRect.left - menuRect.left) - (menuRect.width / 2) + (itemRect.width / 2);

    menu.scrollTo({ left: scrollLeft, behavior: 'smooth' });
  }
}
