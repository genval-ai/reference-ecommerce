import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  private apiUrl = environment.apiEndpoint;

  constructor(private http: HttpClient) { }

  submitOrder(orderData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/orders`, orderData);
  }

  getShippingMethods(): Observable<any> {
    return this.http.get(`${this.apiUrl}/shipping-methods`);
  }

  getPaymentMethods(): Observable<any> {
    return this.http.get(`${this.apiUrl}/payment-methods`);
  }
}