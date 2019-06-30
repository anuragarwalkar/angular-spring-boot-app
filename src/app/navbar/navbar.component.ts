import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // isLoggedIn:boolean
  constructor(private router:Router,
    private authenticationService:AuthenticationService) { }
  onLogOut(){
    this.router.navigate(['logout']);
  }
  ngOnInit() {
    
  }

}
