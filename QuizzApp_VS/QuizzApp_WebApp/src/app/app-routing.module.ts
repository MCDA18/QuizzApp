import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentHomePageComponent } from './student-home-page/student-home-page.component';
import { CourseDetailsPageComponent } from './course-details-page/course-details-page.component';
import { TeacherHomePageComponent } from './teacher-home-page/teacher-home-page.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { QuestionFormComponent } from './question-form/question-form.component';
const routes: Routes = [
    {path:'',redirectTo:'student-home-page', pathMatch: 'full' },
    {path:'student-home-page',component:StudentHomePageComponent},
    {path:'teacher-home-page',component:TeacherHomePageComponent},
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path:'question-form',component:QuestionFormComponent}, 
    {path:'course-details-page/:id',component:CourseDetailsPageComponent},
    {path:'**',component:StudentHomePageComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
