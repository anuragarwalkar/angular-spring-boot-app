import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { BasicAuthenticationService } from './basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthServiceService implements HttpInterceptor {

  constructor(private basicAuth:BasicAuthenticationService) { }

  intercept(request:HttpRequest<any>,next:HttpHandler){
    const basicAuthHeaderString = this.basicAuth.authenticatedToken;
    const username = this.basicAuth.getUsername;
    
    if(basicAuthHeaderString && username){
      request = request.clone({
      setHeaders:{
        Authorization:basicAuthHeaderString
      }
    })}

    return next.handle(request);

  }
}
