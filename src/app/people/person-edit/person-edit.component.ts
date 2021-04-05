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
    name: new FormControl('',[Validators.required,Validators.maxLength(70)]),
    active: new FormControl(''),
    age: new FormControl(this.person.age,[Validators.required,Validators.min(18), Validators.max(110)]),
    about: new FormControl('',Validators.maxLength(250)),
    gender: new FormControl('',Validators.required),
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
