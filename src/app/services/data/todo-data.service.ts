import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http:HttpClient) { }

  retriveAllTodos(username:String):Observable<Todo[]>{
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
  }

  getTodoById(username:string,id:number):Observable<any>{
    return this.http.get(`http://localhost:8080/users/${username}/todos/${id}`);
  }

  deleteTodo(username:string,id:number):Observable<any>{
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`)
  }
}
