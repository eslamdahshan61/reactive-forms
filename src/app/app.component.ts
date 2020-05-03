import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  /* users: User[]; */

  constructor(private dataService: DataService) { }

  ngOnInit() {
    /* this.dataService.getUsers().subscribe(data => this.users = data); */
    /*  fetch('https://jsonplaceholder.typicode.com/posts/1', {
       method: 'PUT',
       body: JSON.stringify({
         id: 1,
         title: 'foo',
         body: 'bar',
         userId: 1
       }),
       headers: {
         "Content-type": "application/json; charset=UTF-8"
       }
     })
       .then(response => response.json())
       .then(json => console.log(json)) */

  }


}
/*
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo2',
    body: 'bar2',
    userId: 10
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
})
  .then(response => response.json())
  .then(json => console.log(json)) */