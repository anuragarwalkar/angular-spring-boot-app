import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { BasicAuthenticationService } from '../services/basic-authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userName: string;
  getRouteCalled:number = 0;
  
  constructor(private router:Router,
    public authenticationService:BasicAuthenticationService) { }
  onLogOut(){
    this.router.navigate(['logout']);
  }

  getRoute():string{
  //   this.getRouteCalled++;
  //   if(this.getRouteCalled <= 1)
  //   {
     
  // }
  this.userName = 
  sessionStorage.getItem('authenticaterUser');
    return `user/${this.userName}/todos`
  }

  ngOnInit() {
    
  }

}
