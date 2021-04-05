import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from 'src/app/_models/person';
import { PeopleService } from 'src/app/_services/people.service';
import { isNil } from 'lodash';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-person-display',
  templateUrl: './person-display.component.html',
  styleUrls: ['./person-display.component.scss']
})
export class PersonDisplayComponent implements OnInit {
  private id : string; 
  public person: Person; 

  constructor(private route : ActivatedRoute, private peopleService : PeopleService) { 
    this.id = this.route.snapshot.params.id; 
  }

  ngOnInit(): void {
    if(!isNil(this.id) && this.id !==""){
      this.peopleService.getPerson(this.id).pipe(take(1)).subscribe(person=>this.person = person);
    }
  }

}
