import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit{
  @Input() title : string = '';
  @Input() currentComponent;
  private id:string;


  constructor(private router : Router , private route :ActivatedRoute) { 

   
  }
  

  ngOnInit(): void {
  }

  getPreviousComponent(){
    console.log("nav " , this.currentComponent);
    switch(this.currentComponent){
      case "HomeComponent":
        console.log("HomeComponent");
        break;
      case "PersonEditComponent" :

        let parsedUrl = this.router.url.split('/');
        this.router.navigate(['people', parsedUrl[2]]);

        break; 
      case "PersonDisplayComponent":
        this.router.navigate(['people']);
        break;
      default:
        console.log("default");
        break; 

    }
  }

}
