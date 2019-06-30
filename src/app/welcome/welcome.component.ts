import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  routeName:String;
  private welcomeMessage:String;
  error:boolean;
  clickOnEvent:boolean =false;
  
  constructor(private route:ActivatedRoute,private dataService:DataService) { }

  ngOnInit() {
    this.routeName = this.route.snapshot.params['name'];
  }

  getWelcomeMessage(){
    this.clickOnEvent =!this.clickOnEvent;
    setTimeout(() => {
      this.dataService.getMessage(this.routeName).subscribe((res)=>{  
       this.error= false;
        this.welcomeMessage = res.message},(err)=>{
          this.error= true
          this.welcomeMessage = err.error.message
        })
    }, 3000);
  }
}
