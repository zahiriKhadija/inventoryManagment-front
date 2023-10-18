import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Environment } from '../environment/environment';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(
    private readonly http: HttpClient,
    //private readonly PRODUCT_PORT : "8085",
  ) { }


  // public getProducts():Observable<Array<Product>>{
  //   return this.http.get<Array<Product>>(Environment.backendHost + this.PRODUCT_PORT + "/products")
  // }
 

}
