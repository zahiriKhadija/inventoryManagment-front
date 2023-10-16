import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InnerHomeComponent } from './inner-home/inner-home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductComponent } from './product/product.component';
import { CustomerComponent } from './customer/customer.component';
import { OrderComponent } from './order/order.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'create-account', component: RegisterComponent },
  { path: 'home', component: InnerHomeComponent },
  { path: 'product', component: ProductComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'order', component: OrderComponent },
  { path: 'order-details', component: OrderDetailsComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
