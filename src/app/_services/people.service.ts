import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
    return this.http.get<Person[]>(this.peopleUrl);
  }



}
