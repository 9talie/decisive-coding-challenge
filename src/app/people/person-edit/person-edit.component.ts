import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Person } from 'src/app/_models/person';
import { PeopleService } from 'src/app/_services/people.service';
import { isNil } from 'lodash';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import {FormlyFieldConfig} from '@ngx-formly/core';
@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.scss']
})
export class PersonEditComponent implements OnInit {
  @Input() public isNew: boolean; // Shows the delete button if false

  private id: string;
  public person: Person;
  public profileForm: FormGroup ;
  public fields: FormlyFieldConfig[] = [
    { // NAME
      key: 'name',
      type: 'input',
      templateOptions: {
      label: 'Name',
        placeholder: 'Enter name',
        required: true
        }
      },
    { // IS ACTIVE
      key: 'isActive',
      type: 'checkbox',
      templateOptions: {
        label: 'Active'
      }
    },
    { // ABOUT
      key: 'about',
      type: 'textarea',
      templateOptions: {
        label: 'About',
        placeholder: 'Enter a description about yourself'
      }
    },
    { // GENDER
      key: 'gender',
      type: 'select',
      templateOptions: {
        label: 'Gender',
        required: true,
        options :[
          {value:'', label:'Select an option',disabled: true },
          {value:'male', label:'Male'},
          {value:'female', label: 'Female'}
        ]
      },
    }
    ];


  constructor(private peopleService: PeopleService, private route: ActivatedRoute) {
   this.id = this.route.snapshot.params.id;
  }



  ngOnInit(): void {
      if (this.id){
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
        gender : ''
      };

      this.initForm();
    }
  }

    initForm(): void{
    this.profileForm = new FormGroup({
      name: new FormControl(this.person.name, [Validators.required, Validators.maxLength(70)]),
      active: new FormControl(this.person.isActive),
      age: new FormControl(this.person.age, [Validators.required, Validators.min(18), Validators.max(110)]),
      about: new FormControl(this.person.about, Validators.maxLength(250)),
      gender: new FormControl(this.person.gender, Validators.required),
    });
  }

    updatePerson(): void {

    this.person.name = this.profileForm.get('name').value;
    this.person.age = this.profileForm.get('age').value;
    this.person.isActive = this.profileForm.get('active').value;
    this.person.gender = this.profileForm.get('gender').value;
    this.person.about = this.profileForm.get('about').value;


    if (isNil(this.person.id) || this.person.id === ''){
        this.peopleService.createPerson(this.person);
    }else{
      this.peopleService.updatePerson(this.person);
    }
  }

}

