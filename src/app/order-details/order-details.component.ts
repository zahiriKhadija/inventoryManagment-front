import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent {

  constructor(
    private readonly router: Router,
  ) { }

  public retour()
  {
    this.router.navigate(['/order']);
  }


}