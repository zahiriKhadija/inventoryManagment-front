import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import {MatDialog} from "@angular/material/dialog";
import {MatDialogConfig} from "@angular/material/dialog";
import { PopUpComponent } from '../pop-up/pop-up.component';


@Component({
    selector: 'app-customer',
    templateUrl: './customer.component.html',
    styleUrls: ["customer.component.scss"]
})
export class CustomerComponent {
    customers: Customer[] = [];
    newCustomer: Customer = new Customer('', '', '', '');
    

    constructor(private dialog: MatDialog) { }

    addCustomer() {
        const dialogConfig = new MatDialogConfig();
        const dialogRef = this.dialog.open(PopUpComponent, {
            data: {
                firstName: '',
                lastName: '',
                email: '',
                password: ''
            }
        });
    
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.newCustomer = result;
                
                if (this.newCustomer.firstName && this.newCustomer.lastName && this.newCustomer.email && this.newCustomer.password) {
                    console.log('newCustomer', this.newCustomer);
                    this.customers.push(this.newCustomer);
                    this.newCustomer = new Customer('', '', '', ''); // Clear the form
                }
            } else {
                console.log('Dialog was closed without a result.');
            }
            
        });
    
    }

    deleteCustomer(customer: Customer) {
      const index = this.customers.indexOf(customer);
      if (index !== -1) {
          this.customers.splice(index, 1);
      }
    } 
    updateCustomer(customer: Customer) {
        const dialogConfig = new MatDialogConfig();
        const dialogRef = this.dialog.open(PopUpComponent, {
            data: {
                firstName: customer.firstName,
                lastName: customer.lastName,
                email: customer.email,
                password: customer.password
            }
        });
    
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                const index = this.customers.indexOf(customer);
                if (index !== -1) {
                    this.customers[index] = {...this.customers[index], ...result};
                }
            } else {
                console.log('Dialog was closed without a result.');
            }

        });
    } 
       
  
}

export class Customer {
    constructor(public firstName: string, public lastName: string, public email: string, public password: string) {}
}
