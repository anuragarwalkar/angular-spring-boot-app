import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userName: string;
  // isLoggedIn:boolean
  constructor(private router:Router,
    public authenticationService:AuthenticationService,private activatedRoute:ActivatedRoute) { }
  onLogOut(){
    this.router.navigate(['logout']);
  }
  ngOnInit() {
    
  }

}
