import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import { TodoDataService } from '../services/data/todo-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[] =[];
  constructor(private todoService:TodoDataService,private router:Router) { }

  onDelete(id:number){
    if(confirm("This can not undo")){
      this.todoService.deleteTodo('anurag',id).subscribe((res)=>{
        console.log(res);
      },(err)=>{console.log(err)},()=>{
        this.todos.forEach((element)=>{
          if(id == element.id){
            this.todos.splice(this.todos.indexOf(element),1);
          }
        })
      })
    }
  }

  onUpdate(id:number){
    this.router.navigate(['todo',id])
  }

  ngOnInit() {
    this.todoService.retriveAllTodos('anurag').subscribe((res)=>{
      this.todos = res;
    })
  }

}
