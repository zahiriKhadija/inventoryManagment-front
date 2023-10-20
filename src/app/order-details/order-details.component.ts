import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../service/order.service';
import { Order } from '../models/order.model';
import { OrderStatus } from "../models/OrderStatus.enum";

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit{
  order!: Order;
  isButtonDisabled: boolean = false;
  constructor(
    private readonly router: Router,
    private orderService: OrderService
  ) { }

  ngOnInit() {
     this.order = this.orderService.getOrder();
    // Utilisez l'objet order pour afficher les détails de la commande
  }

  public retour()
  {
    this.router.navigate(['/order']);
  }

  public validate(order: Order)
  {
    order.status = OrderStatus.VALIDATE;
    this.orderService.updateOrder(order).subscribe(updatedOrder => {
      console.log('Commande validée : ', updatedOrder);
    });
    this.isButtonDisabled = true;
  }
}