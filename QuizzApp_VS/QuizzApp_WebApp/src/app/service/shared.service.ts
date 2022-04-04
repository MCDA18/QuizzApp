import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { Courses } from '../models/courses';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly SharedApi="https://localhost:5001/api";
  courses:Observable<Courses[]>;
  constructor(private http:HttpClient) {
   }

   getCoursesList():Observable<any>
   {
      return this.http.get<any>(this.SharedApi+'/Courses/GetAllCourses');
   }
   
   getTeachersList():Observable<any>
   {
      return this.http.get<any>(this.SharedApi+'/Teachers/GetAllTeachers');
   }
   insertQuestion(val:any)
   {
      console.log("ajunge ")
      return this.http.post<any>(this.SharedApi+'/Questions',val);
   }
  

}
