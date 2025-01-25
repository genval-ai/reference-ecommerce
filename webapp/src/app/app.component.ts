import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a routerLink="/products">Products</a>
      <a routerLink="/cart">Cart</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [`
    nav {
      background-color: #f8f9fa;
      padding: 1rem;
    }
    nav a {
      margin-right: 1rem;
      text-decoration: none;
      color: #007bff;
    }
  `]
})
export class AppComponent {
  title = 'E-commerce Shopping Application';
}