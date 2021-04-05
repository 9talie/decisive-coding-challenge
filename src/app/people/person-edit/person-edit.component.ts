import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Person } from 'src/app/_models/person';
import { PeopleService } from 'src/app/_services/people.service';
import { isNil } from 'lodash';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.scss']
})
export class PersonEditComponent implements OnInit {
  @Input() public isNew : Boolean; // Shows the delete button if false 

  public person : Person; 
  private id:string;

  public profileForm :FormGroup ; 


  constructor(private peopleService : PeopleService, route: ActivatedRoute) { 
   this.id = route.snapshot.params.id;
  }

  ngOnInit(): void {
    if(this.id){
      this.peopleService.getPerson(this.id).pipe(take(1)).subscribe(person => {
        this.person = person; 
        this.initForm();
      });

    }else{
      
      this.person = {
        name : "",
        isActive : false, 
        age:0,
        about : "",
        gender : 'male'
      }; 
      
      this.initForm();
    }
  }

  initForm(){
    this.profileForm = new FormGroup({
      name: new FormControl(this.person.name,[Validators.required,Validators.maxLength(70)]),
      active: new FormControl(this.person.isActive),
      age: new FormControl(this.person.age,[Validators.required,Validators.min(18), Validators.max(110)]),
      about: new FormControl(this.person.about,Validators.maxLength(250)),
      gender: new FormControl(this.person.gender,Validators.required),
    });
  }  
  updatePerson() {

    this.person.name = this.profileForm.get('name').value; 
    this.person.age = this.profileForm.get('age').value; 
    this.person.isActive = this.profileForm.get('active').value; 
    this.person.gender = this.profileForm.get('gender').value; 
    this.person.about = this.profileForm.get('about').value; 


    if(isNil(this.person.id) || this.person.id === ""){
        this.peopleService.createPerson(this.person);
    }else{
      this.peopleService.updatePerson(this.person);
    }
    
  }

}

