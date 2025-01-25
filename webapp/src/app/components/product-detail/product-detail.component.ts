import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-detail',
  template: `
    <div *ngIf="product">
      <h2>{{ product.name }}</h2>
      <p>{{ product.description }}</p>
      <p>Price: {{ product.price | currency }}</p>
      <button (click)="addToCart()">Add to Cart</button>
    </div>
  `
})
export class ProductDetailComponent implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.productService.getProduct(productId).subscribe(
        (data) => {
          this.product = data;
        },
        (error) => {
          console.error('Error fetching product details:', error);
        }
      );
    }
  }

  addToCart() {
    this.cartService.addToCart(this.product).subscribe(
      () => {
        alert('Product added to cart');
      },
      (error) => {
        console.error('Error adding product to cart:', error);
      }
    );
  }
}