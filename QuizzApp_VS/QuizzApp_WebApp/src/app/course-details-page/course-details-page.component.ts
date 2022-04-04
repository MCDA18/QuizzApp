import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { Courses } from '../models/courses';
import { Teachers } from '../models/teachers';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-course-details-page',
  templateUrl: './course-details-page.component.html',
  styleUrls: ['./course-details-page.component.css']
})
export class CourseDetailsPageComponent implements OnInit {
  id:any;
  courses: Courses[];
  teachers:Teachers[];

  constructor(public sharedService: SharedService,public router:Router,private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get("id");
    this.sharedService.getCoursesList().subscribe(data=>{
      this.courses=data;
    });
    this.sharedService.getTeachersList().subscribe(data=>{
      this.teachers=data;
    });
  }
}
