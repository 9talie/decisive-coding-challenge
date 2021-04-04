import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchService } from 'src/app/_services/search.service';
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
  test = "tests "


  constructor(private peopleService : PeopleService, public searchService : SearchService){
    

  }

  ngOnInit(): void {
  this.people$ = this.peopleService.getPeople();
  }

}
