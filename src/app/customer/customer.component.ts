import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
    selector: 'app-customer',
    templateUrl: './customer.component.html',
    styleUrls: ["customer.component.scss"]
})
export class CustomerComponent {
    customers: Customer[] = [];
    newCustomer: Customer = new Customer('', '', '', '');

    constructor() {
        this.newCustomer = new Customer('', '', '', '');
    }

    addCustomer() {
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

  
}

export class Customer {
    constructor(public firstName: string, public lastName: string, public email: string, public password: string) {}
}
