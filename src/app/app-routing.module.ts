import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { GpaComponent } from './Components/gpa/gpa.component';
import { NewstudentComponent } from './Components/newstudent/newstudent.component'


const routes: Routes = [
  {path:'', component:DashboardComponent},
  {path:'add', component:NewstudentComponent},
  {path:'gpa/:email', component:GpaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
