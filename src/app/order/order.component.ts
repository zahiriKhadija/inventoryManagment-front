import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../service/order.service';
import { Order } from '../models/order.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})

export class OrderComponent implements OnInit{
  orders!: Order[];
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

  public afficherDetails()
  {
    this.router.navigate(['/order-details']);
  }
  private isAdminUser(): boolean {
    return true;
  }

}