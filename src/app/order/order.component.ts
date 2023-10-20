import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../service/order.service';
import { Order } from '../models/order.model';
import { OrderStatus } from "../models/OrderStatus.enum";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})

export class OrderComponent implements OnInit{
  orders!: Order[];
  OrderStatus = OrderStatus;
  isButtonDeleteDisabled: boolean = false;
  constructor(
    private readonly router: Router,
    private orderService: OrderService
  ) { }
  ngOnInit() {

    /*if (this.isAdminUser()) {
      this.orderService.getOrders().subscribe((orders) => {
        this.orders = orders;
      });
    } else {
      this.orderService.getOrdersByIdUser().subscribe((orders) => {
        this.orders = orders;
      });
    }*/
    this.orderService.getOrders().subscribe((orders) => {
      this.orders = orders;
    });
  
  }

  public afficherDetails(order: Order)
  {
    this.orderService.setOrder(order);
    this.router.navigate(['/order-details']);
  }
  private isAdminUser(): boolean {
    return true;
  }
  public getStatus(status: string): string {
    switch (status) {
      case "PENDING":  return 'En cours';
      case "VALIDATE": return 'Validée';
      case "REJECT":   return 'Rejetée';
      default: return '';
    }
  }
  public delete(idOrder: number){
    this.orderService.deleteOrder(idOrder).subscribe();
    this.isButtonDeleteDisabled = true;
  }
}