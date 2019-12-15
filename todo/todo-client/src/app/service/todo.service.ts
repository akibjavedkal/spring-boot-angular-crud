import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  baseUrl = 'http://localhost:8080/';

  constructor(private http : HttpClient) {
  
   }

  post(url,body ){
      return this.http.post(this.baseUrl +url,body);
    }
  }