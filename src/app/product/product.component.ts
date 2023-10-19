import { Component, OnInit } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  products = [ { id: 0, name: 'testt', price: 0, imageUrl: '' }];
  isCardVisible = false;

  constructor(public dialog: MatDialog) {}
  
  showCard() {
    const dialogRef = this.dialog.open(CartComponent, {
      width: '400px', // Adjust the width as needed
      data: { content: 'This is the pop-up content.' } // You can pass data to the pop-up component
    });
  }

  
 // showCard() {
   // this.isCardVisible = !this.isCardVisible;
  //}



  ngOnInit(): void {
    // this.products = this.productService.getProducts();
  }

   deleteProduct(productId: number) {
  //   // Implement the product deletion logic here
  //   // You can use the productId to identify and delete the product
  }

  updateProduct(productId: number) {
  //   // Implement the product update logic here
  // You can use the productId to identify and update the product
   }
}
