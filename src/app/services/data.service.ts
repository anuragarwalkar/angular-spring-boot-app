import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = environment.springServerJpa;

  constructor(private http:HttpClient) { }

  getMessage(name:String):Observable<{message:string}>{
    // let headers = new HttpHeaders({
    //   Authorization: this.createBasicAuthHttpHeader
    // })

    return this.http.get<{message:string}>(`${this.url}/google/get/${name}`)
  }

  // get createBasicAuthHttpHeader(){
  //   const username = 'anurag';
  //   const password = 'Root#123';
  //   return 'Basic ' + window.btoa(username+':'+ password);
  // }


  
}
