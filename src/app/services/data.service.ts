import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getMessage(name:String):Observable<{message:string}>{
    return this.http.get<{message:string}>(`http://localhost:8080/google/get/${name}`)
  }


  
}
