import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PeopleListComponent } from './people/people-list/people-list.component';
import { SharedModule } from './_modules/shared/shared.module';
import { NavComponent } from './nav/nav.component';
import { SearchComponent } from './_ui/search/search.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterPeoplePipe } from './_pipes/filter-people.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    NavComponent,
    SearchComponent,
    HomeComponent,
    FilterPeoplePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
