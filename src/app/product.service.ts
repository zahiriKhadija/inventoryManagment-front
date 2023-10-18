import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products = [
    { id: 1, name: 'Product 1', price: 10.99, imageUrl: 'product1.jpg' },
    { id: 2, name: 'Product 2', price: 19.99, imageUrl: 'product2.jpg' },
    { id: 3, name: 'Product 3', price: 29.99, imageUrl: 'product3.jpg' },
    // Add more products as needed
  ];

  getProducts() {
    return this.products;
  }
}
