import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  total: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart(): void {
    this.cartService.getCart().subscribe(
      (data) => {
        this.cartItems = data.items;
        this.calculateTotal();
      },
      (error) => {
        console.error('Error fetching cart', error);
      }
    );
  }

  updateQuantity(item: any): void {
    this.cartService.updateCartItem(item.id, item.quantity).subscribe(
      () => {
        this.calculateTotal();
      },
      (error) => {
        console.error('Error updating cart item', error);
      }
    );
  }

  removeItem(itemId: string): void {
    this.cartService.removeFromCart(itemId).subscribe(
      () => {
        this.cartItems = this.cartItems.filter(item => item.id !== itemId);
        this.calculateTotal();
      },
      (error) => {
        console.error('Error removing item from cart', error);
      }
    );
  }

  calculateTotal(): void {
    this.total = this.cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }
}