import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = "https://jsonplaceholder.typicode.com/users";

  url: string;
  constructor(private http: HttpClient) { this.url = "https://jsonplaceholder.typicode.com"; }


  getUsers() {
    return this.http.get<User[]>(this.apiUrl)
  }
  /* addUser(newUser) : Observable<any>
  {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    let body = JSON.stringify(newUser);
    return this.http.post('http://localhost:3000/api/signup', body, httpOptions);
  } */


  addUser(newUser): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    let body = JSON.stringify(newUser);
    return this.http.post('https://jsonplaceholder.typicode.com/posts', body, httpOptions);
  }


  public addPost(postData: Object) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    let endPoints = "/posts"
    this.http.post(this.url + endPoints, postData, httpOptions).subscribe(data => {
      console.log(data);
    });
  }


}
