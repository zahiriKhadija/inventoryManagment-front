import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent{

  constructor(@Inject(MAT_DIALOG_DATA) public data : any, private dialogRef: MatDialogRef<PopUpComponent>){}

    closePopUp(){
    this.dialogRef.close(' ');
  }

  saveCustomer(){
    console.log(this.data);
    this.dialogRef.close(this.data);
  }
}
