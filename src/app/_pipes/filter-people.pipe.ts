import { Pipe, PipeTransform } from '@angular/core';
import { isNil } from 'lodash';
import { Person } from '../_models/person';

@Pipe({
  name: 'filterPeople'
})
export class FilterPeoplePipe implements PipeTransform {

  transform(people : Person[], search : string): Person[] {
    
    if(isNil(people) || isNil(search)) return people;

    return people.filter((person:Person)=>{
     
      if(!person){return}
      if(!person.name){return}
      let searchLowerCase = search.toLowerCase();

      if(person.name.toLowerCase().indexOf(searchLowerCase)!== -1) 
        return true;
      
        return false;
       

    })
  
  }
}
  


