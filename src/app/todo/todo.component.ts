import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoDataService } from '../services/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private route:ActivatedRoute,private service:TodoDataService) { }

  ngOnInit() {
    this.service.getTodoById('anurag',this.route.snapshot.params['id']).subscribe(res=>{
      console.log(res)
    })
    
  }

}
