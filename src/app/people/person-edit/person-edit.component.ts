import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Person } from 'src/app/_models/person';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.scss']
})
export class PersonEditComponent implements OnInit {

  public person : Person  = {
    name:"",
    isActive:false,
    age:0,
    gender :"male",
    about:'',
  }

  public profileForm = new FormGroup({
    name: new FormControl(this.person.name,[Validators.required,Validators.maxLength(70)]),
    active: new FormControl(this.person.isActive),
    age: new FormControl(this.person.age,[Validators.required,Validators.min(18), Validators.max(110)]),
    about: new FormControl(this.person.about,Validators.maxLength(250)),
    gender: new FormControl(this.person.gender,Validators.required),
  });


  constructor() { }

  ngOnInit(): void {
  }

  updatePerson() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    console.warn('ages : ', this.person.age);
    
    
  }

}
