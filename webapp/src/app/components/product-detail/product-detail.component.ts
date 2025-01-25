import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: any;
  recommendations: any[] = [];
  quantity: number = 1;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const productId = params.get('id');
      if (productId) {
        this.loadProduct(productId);
        this.loadRecommendations(productId);
      }
    });
  }

  loadProduct(id: string): void {
    this.productService.getProduct(id).subscribe(
      (data) => {
        this.product = data;
      },
      (error) => {
        console.error('Error fetching product details', error);
      }
    );
  }

  loadRecommendations(id: string): void {
    this.productService.getRecommendations(id).subscribe(
      (data) => {
        this.recommendations = data;
      },
      (error) => {
        console.error('Error fetching recommendations', error);
      }
    );
  }

  addToCart(): void {
    this.cartService.addToCart(this.product.id, this.quantity).subscribe(
      () => {
        alert('Product added to cart successfully');
      },
      (error) => {
        console.error('Error adding product to cart', error);
      }
    );
  }
}