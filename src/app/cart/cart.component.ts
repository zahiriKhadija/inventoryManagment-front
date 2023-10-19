import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  constructor( public dialogRef: MatDialogRef<CartComponent>){}
  closeDialog(): void {
    this.dialogRef.close();
  }

}
