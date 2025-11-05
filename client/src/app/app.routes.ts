import { Routes } from '@angular/router';
import { CartComponent } from './pages/cart';
import { HomeComponent } from './pages/home';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cart', component: CartComponent },
];
