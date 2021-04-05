import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = "Decisive's Coding Challenge";
  currentComponent; 

  onActivate(event){
    this.currentComponent = event.constructor.name;

    console.log( 'app ' , this.currentComponent);
  }
  
}
