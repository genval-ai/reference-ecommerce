import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  template: `
    <h2>Shopping Cart</h2>
    <div *ngFor="let item of cartItems">
      <h3>{{ item.product.name }}</h3>
      <p>Price: {{ item.product.price | currency }}</p>
      <p>Quantity: {{ item.quantity }}</p>
      <button (click)="updateQuantity(item, item.quantity - 1)">-</button>
      <button (click)="updateQuantity(item, item.quantity + 1)">+</button>
      <button (click)="removeItem(item)">Remove</button>
    </div>
    <p>Total: {{ total | currency }}</p>
    <button routerLink="/checkout">Proceed to Checkout</button>
  `
})
export class ShoppingCartComponent implements OnInit {
  cartItems: any[] = [];
  total: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.loadCart();
  }

  loadCart() {
    this.cartService.getCart().subscribe(
      (data) => {
        this.cartItems = data.items;
        this.calculateTotal();
      },
      (error) => {
        console.error('Error fetching cart:', error);
      }
    );
  }

  updateQuantity(item: any, newQuantity: number) {
    if (newQuantity > 0) {
      this.cartService.updateCartItemQuantity(item.product.id, newQuantity).subscribe(
        () => {
          this.loadCart();
        },
        (error) => {
          console.error('Error updating cart item quantity:', error);
        }
      );
    }
  }

  removeItem(item: any) {
    this.cartService.removeFromCart(item.product.id).subscribe(
      () => {
        this.loadCart();
      },
      (error) => {
        console.error('Error removing item from cart:', error);
      }
    );
  }

  calculateTotal() {
    this.total = this.cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  }
}