import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PersonEditComponent } from './people/person-edit/person-edit.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path:'people', component:HomeComponent},
  { path:'people/:id', component:PersonEditComponent},
  { path: '**', component: HomeComponent}
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
