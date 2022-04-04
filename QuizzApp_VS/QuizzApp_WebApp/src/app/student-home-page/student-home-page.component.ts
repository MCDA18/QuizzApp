import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {SharedService} from '../service/shared.service'
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { keyframes } from '@angular/animations';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Courses } from '../models/courses';
import { NavigationExtras, Router } from '@angular/router';
import { Teachers } from '../models/teachers';
@Component({
  selector: 'app-student-home-page',
  templateUrl: './student-home-page.component.html',
  styleUrls: ['./student-home-page.component.css']
})
export class StudentHomePageComponent implements OnInit {
  courses: Courses[];
  teachers:Teachers[];


  constructor(public sharedService: SharedService,public router:Router) {
  }
  ngOnInit(): void {
   this.CoursesList();
  }
  CoursesList()
  {
    this.sharedService.getCoursesList().subscribe(data=>{
      this.courses=data;
    });
    this.sharedService.getTeachersList().subscribe(data=>{
      this.teachers=data;
    });
  }
 checkCourse(id_course:any){

      this.router.navigate(['/course-details-page'],{queryParams:{id:id_course}});
 }
}
