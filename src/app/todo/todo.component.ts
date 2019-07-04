import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoDataService } from '../services/data/todo-data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  updateTodoForm:FormGroup;
  todoId:number;
  userName:string;
  updateForm:boolean;

  constructor(private route:ActivatedRoute,
    private service:TodoDataService,
    private router:Router) { }

  get getTodayDate():string{
    let today:any = new Date();
    let dd:any = today.getDate();

    let mm:any = today.getMonth()+1; 
    let yyyy = today.getFullYear();
    if(dd<10) 
    {
    dd='0'+dd;
    } 

    if(mm<10) 
    {
    mm='0'+mm;
    } 
    today = yyyy+'-'+mm+'-'+dd;
    return today;
  }  

  ngOnInit() {
    this.todoId = this.route.snapshot.params['id'];
    this.userName = this.route.snapshot.params['username'];
    console.log('this.userName:', this.userName);
    console.log('this.todoId:', this.todoId);
    this.updateForm = this.todoId !== undefined;
    this.updateTodoForm = new FormGroup({
      id: new FormControl({value:'',disabled:true}),
      username: new FormControl('',Validators.required),
      description: new FormControl('',Validators.required),
      targetDate : new FormControl(this.getTodayDate,Validators.required),
      update: new FormControl('',Validators.required)
    })

    if(this.updateForm){
    this.service.getTodoById(this.userName,this.todoId).subscribe(res=>{
      this.updateTodoForm.setValue({
        id: res.id,
        username: res.username,
        description: res.description,
        targetDate : res.targetDate.substring(0,10),
        update: res.done.toString()
      })
    })
    }
  }

  onCancelTodo(){
    if(confirm("Are you sure want to cancel"))
    if(this.updateForm){
      this.router.navigate(['todos'])
    }else{
      this.router.navigate([''])
    }
  }
  onSubmit(){
    console.log(this.updateTodoForm);

    if(this.updateForm){
      console.log('update')
    this.service.updateTodo(this.userName,this.todoId,this.updateTodoForm.value).subscribe((res)=>{
      console.log(res);

    },(err)=>{
      alert('404 Server is unrechable please contact anurag');
    },()=>{this.navigateToTodos(this.userName)})
   
  }else{
    console.log('create')
    this.service.createPost(this.userName,this.updateTodoForm.value).subscribe((res)=>{
      console.log(res);
    },(err)=>{
      alert('404 Server is unrechable please contact anurag');
    },()=>{this.navigateToTodos(this.userName)})
  }
  }

  navigateToTodos(userName:string):void{
    this.router.navigate([`user/${userName}/todos`]);
  }

}
