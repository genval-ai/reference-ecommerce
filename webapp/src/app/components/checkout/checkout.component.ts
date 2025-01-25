import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { CheckoutService } from '../../services/checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cartItems: any[] = [];
  total: number = 0;
  shippingMethods: any[] = [];
  paymentMethods: any[] = [];
  
  shippingInfo: any = {
    name: '',
    address: '',
    city: '',
    country: '',
    postalCode: ''
  };
  
  selectedShippingMethod: string = '';
  selectedPaymentMethod: string = '';

  constructor(
    private router: Router,
    private cartService: CartService,
    private checkoutService: CheckoutService
  ) { }

  ngOnInit(): void {
    this.loadCart();
    this.loadShippingMethods();
    this.loadPaymentMethods();
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

  loadShippingMethods(): void {
    this.checkoutService.getShippingMethods().subscribe(
      (data) => {
        this.shippingMethods = data;
      },
      (error) => {
        console.error('Error fetching shipping methods', error);
      }
    );
  }

  loadPaymentMethods(): void {
    this.checkoutService.getPaymentMethods().subscribe(
      (data) => {
        this.paymentMethods = data;
      },
      (error) => {
        console.error('Error fetching payment methods', error);
      }
    );
  }

  calculateTotal(): void {
    this.total = this.cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  placeOrder(): void {
    const orderData = {
      items: this.cartItems,
      total: this.total,
      shippingInfo: this.shippingInfo,
      shippingMethod: this.selectedShippingMethod,
      paymentMethod: this.selectedPaymentMethod
    };

    this.checkoutService.submitOrder(orderData).subscribe(
      (response) => {
        alert('Order placed successfully!');
        this.router.navigate(['/']);
      },
      (error) => {
        console.error('Error placing order', error);
      }
    );
  }
}