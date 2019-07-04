import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  routeName:String;
  welcomeMessage:String;
  error:boolean;
  clickOnEvent:boolean =false;
  
  constructor(private route:ActivatedRoute,private dataService:DataService,private router:Router) { }

  ngOnInit() {
    this.routeName = this.route.snapshot.params['username'];

  }

  getWelcomeMessage(){
    this.clickOnEvent =!this.clickOnEvent;
    setTimeout(() => {
      this.dataService.getMessage(this.routeName).subscribe((res)=>{  
       this.error= false;
        this.welcomeMessage = res.message},(err)=>{
          this.error= true
          this.welcomeMessage = 'there is error'
        })
    }, 3000);
  }
}
