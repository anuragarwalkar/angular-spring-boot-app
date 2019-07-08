import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/models/todo';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  url: string = environment.springServerJpa;

  constructor(private http:HttpClient) { }

  retriveAllTodos(username:String):Observable<Todo[]>{
    return this.http.get<Todo[]>(`${this.url}/users/${username}/todos`);
  }

  getTodoById(username:string,id:number):Observable<any>{
    return this.http.get(`${this.url}/users/${username}/todos/${id}`);
  }

  deleteTodo(username:string,id:number):Observable<any>{
    return this.http.delete(`${this.url}/users/${username}/todos/${id}`);
  }

  updateTodo(username:string,id:number,todo:Todo):Observable<any>{
    return this.http.put(`${this.url}/users/${username}/todos/${id}`,todo);
  }

  createPost(username:string,todo:Todo):Observable<any>{
    return this.http.post(`${this.url}/users/${username}/todos`,todo);
  }

}
