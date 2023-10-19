import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/order.model';
import { Environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private readonly http: HttpClient,
    private readonly PRODUCT_PORT : "8085",
  ) { }


  public getOrders():Observable<Array<Order>>{
    return this.http.get<Array<Order>>(Environment.backendHost + this.PRODUCT_PORT + "/orders")
  }
}
