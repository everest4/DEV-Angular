import { Routes } from '@angular/router';
import { CartComponent } from './pages/cart';

export const routes: Routes = [
  { path: 'cart', component: CartComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
