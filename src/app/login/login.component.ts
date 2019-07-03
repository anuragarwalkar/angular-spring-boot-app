import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

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
  constructor(private router:Router,private loginService:AuthenticationService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required)
    })

    if(this.loginService.isLoggedIn()){
      this.router.navigate(['user',this.loginService.getUsername()])
    };
  }


  onLogin():void{
    if(this.loginService.loginUser(this.loginForm.value.username,
      this.loginForm.value.password)){
          this.router.navigate(['user',this.loginForm.value.username])
      }else{
        this.login ={
          status:true,
          loginMessage:'login faild invalid username or password'
        }

        setTimeout(() => {
          this.login ={
            status:false,
            loginMessage:'suceess'
          }
        }, 5000);

        this.loginForm.reset();
      }
      
  }



}
