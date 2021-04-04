import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PeopleListComponent } from './people/people-list/people-list.component';
import { SharedModule } from './_modules/shared.module';
import { NavComponent } from './nav/nav.component';
import { SearchComponent } from './_ui/search/search.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterPeoplePipe } from './_pipes/filter-people.pipe';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdModalComponent, NgbdModalContent } from './_ui/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    NavComponent,
    SearchComponent,
    HomeComponent,
    FilterPeoplePipe,
    NgbdModalComponent, 
    NgbdModalContent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
