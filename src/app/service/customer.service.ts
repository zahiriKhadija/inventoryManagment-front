import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../customer/customer.component';
import { Environment } from '../environment/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    private readonly http: HttpClient,
    private readonly CUSTOMER_PORT : "8085",
  ) { }


  public getCustomers():Observable<Array<Customer>>{
    return this.http.get<Array<Customer>>(Environment.backendHost + this.CUSTOMER_PORT + "/customers")
  }
  // public searchCustomers(keyword : string):Observable<Array<Customer>>{
  //   return this.http.get<Array<Customer>>(Environment.backendHost + this.CUSTOMER_PORT + "/customers/search?keyword="+ keyword)
  // }
  public saveCustomer(customer: Customer):Observable<Customer>{
    return this.http.post<Customer>(Environment.backendHost + this.CUSTOMER_PORT + "/customers",customer);
  }
  public deleteCustomer(id: number){
    return this.http.delete(Environment.backendHost + this.CUSTOMER_PORT + "/customers/"+id);
  }
}
