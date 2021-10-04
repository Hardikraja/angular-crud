import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentFormComponent } from './add-student-form/add-student-form.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  {path:"list",component:StudentListComponent,children:[
    {path:"student",component:AddStudentFormComponent},
    {path:"student/:id",component:AddStudentFormComponent}
  ]},
  {path:"",redirectTo:"/list",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
