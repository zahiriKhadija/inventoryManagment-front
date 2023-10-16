import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import {MatDialog} from "@angular/material/dialog";
import { PopUpComponent } from '../pop-up/pop-up.component';

@Component({
    selector: 'app-customer',
    templateUrl: './customer.component.html',
    styleUrls: ["customer.component.scss"]
})
export class CustomerComponent {
    customers: Customer[] = [];
    newCustomer: Customer = new Customer('', '', '', '');
    

    constructor(private dialogRef: MatDialog) { }

    addCustomer() {
        this.newCustomer;
        this.dialogRef.open(PopUpComponent, {
            data : { 
                firstName : this.newCustomer.firstName,
                lastName : this.newCustomer.lastName,
                email : this.newCustomer.email,
                password: this.newCustomer.password
            }

        })
        if (this.newCustomer.firstName && this.newCustomer.lastName && this.newCustomer.email) {
            this.customers.push(this.newCustomer);
            this.newCustomer = new Customer('', '', '', ''); // Clear the form
        }
    }

    deleteCustomer(customer: Customer) {
      const index = this.customers.indexOf(customer);
      if (index !== -1) {
          this.customers.splice(index, 1);
      }
    } 
    updateCustomer(customer: Customer) {
       
        this.dialogRef.open(PopUpComponent, {
            data : { 
                firstName : customer.firstName,
                lastName : customer.lastName,
                email : customer.email,
                password: customer.password
            }

        })
        
    }
  
}

export class Customer {
    constructor(public firstName: string, public lastName: string, public email: string, public password: string) {}
}
