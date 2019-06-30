import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private userName:string = '';

  constructor(private router:Router) { }

  loginUser(username:string, password:string):boolean{
    if(password === "admin" ){
      this.userName = username;
      localStorage.setItem('credentials',JSON.stringify(
        {username:username,password:password}));
        return true;
    }
    return false
  }

  isLoggedIn():boolean{
    let localStorageItems:any;
    if(localStorage.getItem('credentials') !== null){
      localStorageItems = JSON.parse(localStorage.getItem('credentials'));
      this.loginUser(localStorageItems.username,
        localStorageItems.password);
        this.userName = localStorageItems.username;
    return true;
   }
   return false;
  }

  getUsername():String{
    return this.userName
  }

}
