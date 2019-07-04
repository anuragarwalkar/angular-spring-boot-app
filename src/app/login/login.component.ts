import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { BasicAuthenticationService } from '../services/basic-authentication.service';
import { HttpIntercepterBasicAuthServiceService } from '../services/http-intercepter-basic-auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:any = {
    status:false,
    loginMessage:''
  };

  loginForm:FormGroup
  constructor(private router:Router,
    private basicAuth:BasicAuthenticationService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required)
    })

    this.handleLogin();
  }

  handleLogin(){
    if(this.basicAuth.isLoggedIn()){
      this.router.navigate(['user',this.basicAuth.getUsername])
    };
  }

 

  onLogin():void{
    this.basicAuth.executeAuthenticationService(this.loginForm.value.username,
      this.loginForm.value.password).subscribe(()=>{
        this.router.navigate(['user',this.loginForm.value.username]);
        this.loginForm.reset();
      },()=>{
        this.login ={
          status:true ,
          loginMessage:'login faild invalid username or password'
        }
        this.loginForm.reset();
      },()=>{
        
      })

      setTimeout(() => {
        this.login ={
          status:false,
          loginMessage:'suceess'
        }
      }, 5000);

          
  }



}
