import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { OrderService } from '../../services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  template: `
    <h2>Checkout</h2>
    <form [formGroup]="checkoutForm" (ngSubmit)="onSubmit()">
      <div>
        <label for="name">Name:</label>
        <input id="name" type="text" formControlName="name">
      </div>
      <div>
        <label for="email">Email:</label>
        <input id="email" type="email" formControlName="email">
      </div>
      <div>
        <label for="address">Address:</label>
        <input id="address" type="text" formControlName="address">
      </div>
      <div>
        <label for="paymentMethod">Payment Method:</label>
        <select id="paymentMethod" formControlName="paymentMethod">
          <option value="credit_card">Credit Card</option>
          <option value="paypal">PayPal</option>
        </select>
      </div>
      <button type="submit" [disabled]="!checkoutForm.valid">Place Order</button>
    </form>
  `
})
export class CheckoutComponent implements OnInit {
  checkoutForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private cartService: CartService,
    private orderService: OrderService,
    private router: Router
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      paymentMethod: ['', Validators.required]
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.checkoutForm.valid) {
      const orderData = {
        ...this.checkoutForm.value,
        items: [] // This should be populated with the cart items
      };

      this.cartService.getCart().subscribe(
        (cartData) => {
          orderData.items = cartData.items;
          this.orderService.createOrder(orderData).subscribe(
            (response) => {
              alert('Order placed successfully!');
              this.router.navigate(['/']);
            },
            (error) => {
              console.error('Error creating order:', error);
            }
          );
        },
        (error) => {
          console.error('Error fetching cart data:', error);
        }
      );
    }
  }
}