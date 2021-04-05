import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PersonEditComponent } from './people/person-edit/person-edit.component';
import { PersonDisplayComponent } from './people/person-display/person-display.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path:'people', component:HomeComponent},
  { path:'people/:id', component:PersonDisplayComponent},
  { path:'people/:id/edit', component:PersonEditComponent},
  { path:'people', component:HomeComponent},
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
