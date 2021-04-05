import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Person } from '../_models/person';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private peopleUrl = environment.peopleApiUrl; 
  private people: Person[] = [];

  constructor(private http:HttpClient) { }

  public getPeople() : Observable<Person[]>{
    return this.http.get<Person[]>(this.peopleUrl).pipe(
      map( people =>{
        this.people = people; 
        return people; 
      }
      )
    );
  }

  public getPerson(personId : string) : Observable<Person> {
      return this.http.get<Person>(this.peopleUrl +"/" +personId);
  }

  public createPerson(person:Person){
    this.people.push(person);
    this.http.post(this.peopleUrl,this.people).subscribe((answer)=>{}, (error)=>{
    });
  }

  public updatePerson(person:Person){
    this.http.put(this.peopleUrl+person.id, person).subscribe((answer)=>{},(error)=>{});
  }



}
