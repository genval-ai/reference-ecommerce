import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  template: `
    <h2>Product Catalog</h2>
    <div *ngFor="let product of products">
      <h3>
        <a [routerLink]="['/products', product.id]">
          {{ product.name }}
        </a>
      </h3>
      <p>Price: {{ product.price | currency }}</p>
    </div>
  `
})
export class ProductListComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }
}