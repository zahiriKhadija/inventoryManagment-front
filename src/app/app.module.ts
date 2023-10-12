import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { CustomerComponent } from './customer/customer.component';
import { ProductComponent } from './product/product.component';
import { OrderComponent } from './order/order.component';
import { InnerHomeComponent } from './inner-home/inner-home.component';
import { HeaderComponent } from './header/header.component';
import { EnregistremenComponent } from './enregistrement/enregistrement.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    CustomerComponent,
    ProductComponent,
    OrderComponent,
    InnerHomeComponent,
    HeaderComponent,
    EnregistremenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
