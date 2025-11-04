import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filter-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter.html',
  styleUrls: ['./filter.css']
})
export class FilterBarComponent {
  @Output() categorySelected = new EventEmitter<string>();

  categories: string[] = ['All', 'Espresso', 'Cappuccino', 'Desserts', 'Iced Coffee', 'Latte'];
  selectedCategory = 'All';

  onCategoryClick(category: string) {
    this.selectedCategory = category;
    this.categorySelected.emit(category);
  }
}
