import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products = [ { id: 0, name: 'testt', price: 0, imageUrl: '' }];
  isCardVisible = false;

  showCard() {
    this.isCardVisible = !this.isCardVisible;
  }

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  deleteProduct(productId: number) {
    // Implement the product deletion logic here
    // You can use the productId to identify and delete the product
  }

  updateProduct(productId: number) {
    // Implement the product update logic here
    // You can use the productId to identify and update the product
  }
}
