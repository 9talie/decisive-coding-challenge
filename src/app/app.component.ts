import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from './_models/person';
import { PeopleService } from './_services/people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = '';
  public people$ : Observable<Person[]>; 

  constructor(private peopleService : PeopleService){}
  ngOnInit(): void {
  this.people$ = this.peopleService.getPeople();

  }

  
}
