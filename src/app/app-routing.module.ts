import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ViewStudentsComponent } from './view-students/view-students.component';


const routes: Routes = [
  { path: "main", component: MainComponent },
  { path: "students", component: ViewStudentsComponent },
  { path: "**", redirectTo: "/main" }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
