import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationRequest } from '../models/authenticationRequest';
import { AuthenticationResponse } from '../models/authenticationResponse';
import { Observable as __Observable } from 'rxjs';
import { StrictHttpResponse as __StrictHttpResponse } from '../models/strictHttpResponse';
import { Environment } from '../environment/environment';
import {map as __map, filter as __filter } from 'rxjs/operators' 

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
 public readonly authenticatePath: string = "api/v1/login/authenticate";

  constructor( private readonly http: HttpClient) { }

  authenticateResponse(body?: AuthenticationRequest) : __Observable<__StrictHttpResponse<AuthenticationResponse>>{
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST', Environment.backendHost + this.authenticatePath, __body,{
            responseType: 'json'}); 
    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse), 
      __map((_r) => {return _r as __StrictHttpResponse<AuthenticationResponse>;})

    )  
  }
  authenticate(body?: AuthenticationRequest): __Observable<AuthenticationResponse>{
    return this.authenticateResponse(body).pipe(
      __map(_r => _r.body as AuthenticationResponse)
    )
  }
}
