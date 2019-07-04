import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import { TodoDataService } from '../services/data/todo-data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[] =[];
  userName: any;
  constructor(private todoService:TodoDataService,private router:Router, private route:ActivatedRoute) { }

  onDelete(id:number){
    if(confirm("This can not undo")){
      this.todoService.deleteTodo(this.userName,id).subscribe((res)=>{
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
    this.router.navigate([`user/${this.userName}/todo/${id}`])
  }

  ngOnInit() {
    this.userName = this.route.snapshot.params['username'];
    this.todoService.retriveAllTodos(this.userName).subscribe((res)=>{
      this.todos = res;
    },(err)=>{
      alert('404 Server is unrechable please contact anurag');
    })
  }

}
