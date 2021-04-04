import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../../_models/person';
import { PeopleService } from '../../_services/people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {
  
  public people$ : Observable<Person[]>; 
  public p:number = 1; 


  constructor(private peopleService : PeopleService){}

  ngOnInit(): void {
  this.people$ = this.peopleService.getPeople();

  }

}
