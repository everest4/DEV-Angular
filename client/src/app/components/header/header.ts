import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../../components/services/cart_services';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent implements OnInit {
  cartCount = 0;
  showSearch = false;

  @Output() search = new EventEmitter<string>();

  constructor(public cartService: CartService) {}

  ngOnInit() {
    this.cartService.cartCount$.subscribe(count => {
      this.cartCount = count;
    });
  }

  toggleTheme() {
    document.body.classList.toggle('dark-theme');
  }

  toggleSearch() {
    this.showSearch = !this.showSearch;
  }

  onSearch(event: any) {
    this.search.emit(event.target.value.toLowerCase());
  }
}
