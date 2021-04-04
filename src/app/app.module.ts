import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PeopleListComponent } from './people/people-list/people-list.component';
import { SharedModule } from './_modules/shared/shared.module';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
