import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = `${environment.apiEndpoint}/carts`;

  constructor(private http: HttpClient) {}

  getCart(): Observable<any> {
    // Assuming there's only one cart per user for simplicity
    return this.http.get<any>(`${this.apiUrl}/current`);
  }

  addToCart(product: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/current/items`, { productId: product.id, quantity: 1 });
  }

  updateCartItemQuantity(productId: string, quantity: number): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/current/items/${productId}`, { quantity });
  }

  removeFromCart(productId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/current/items/${productId}`);
  }
}