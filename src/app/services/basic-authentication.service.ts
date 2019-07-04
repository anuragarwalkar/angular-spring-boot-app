import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {
  url: string = environment.springServer;

  constructor(private http:HttpClient) { }

  executeAuthenticationService(username:string, password:string){
    const authenticationString = 'Basic ' + 
    window.btoa(username+':'+ password);

    let headers = new HttpHeaders({
      Authorization: authenticationString
    })
    return this.http.get<AuthenticationBean>
    (`${this.url}/basicauth`,{
      headers
    }).pipe(map(
      (data) =>{
        sessionStorage.setItem('authenticaterUser',username);
        sessionStorage.setItem('token',authenticationString);
        return data;
      }
    ))
  }


  isLoggedIn():boolean{
   if(sessionStorage.getItem('authenticaterUser') !== null){
     return true
   }
   return false;
  }

  get authenticatedToken():string{
    if(this.isLoggedIn()){
      return sessionStorage.getItem('token')
    }
  }

  get getUsername():String{
    return sessionStorage.getItem('authenticaterUser')
  }


}

export class AuthenticationBean{
  constructor(public message:string){

  }
}

