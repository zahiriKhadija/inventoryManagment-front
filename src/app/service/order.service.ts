import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/order.model';
import { Environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  
  public readonly ORDER_PATH: string = "/orders";
  private order!: Order;

  constructor(
    private readonly http: HttpClient
  ) { }

  public setOrder(order: Order) {
    this.order = order;
  }

  public getOrder(): Order {
    return this.order;
  }


  public getOrders(page: number, size: number): Observable<Array<Order>> {
    // Créez un objet HttpParams pour inclure les paramètres de pagination dans la requête.
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    // Utilisez les paramètres pour personnaliser votre requête.
    return this.http.get<Array<Order>>(
      Environment.backendHost + this.ORDER_PATH + '/all',
      { params: params }
    );
  }


  public getOrdersByIdUser():Observable<Array<Order>>{
    return this.http.get<Array<Order>>(Environment.backendHost + this.ORDER_PATH + "/byIdUser")
  }

  public createOrder(order: Order):Observable<Order>{
    return this.http.post<Order>(Environment.backendHost + this.ORDER_PATH + "/createOrder",order);
  }

  public updateOrder(order: Order):Observable<Order>{
    return this.http.put<Order>(Environment.backendHost + this.ORDER_PATH + "/updateOrder",order);
  }

  public deleteOrder(id: number){
    return this.http.delete(Environment.backendHost + this.ORDER_PATH + "/deleteOrder/"+id);
  }
}