import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiurls } from '../api.url';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostregisterService {

  constructor(private hc:HttpClient) {
   
   }
   isloggedin$=new BehaviorSubject<boolean>(false);

   uploaduser(registerobj:any){
    return this.hc.post<any>('http://127.0.0.1:8800/api/auth/register',registerobj);
   }
   loginuser(loginobj:any){
    return this.hc.post<any>('http://127.0.0.1:8800/api/auth/login',loginobj);
   }
   uploadcourse(uploadcourse:any){
    return this.hc.post<any>('http://localhost:8800/api/course/createCourse',uploadcourse);
   }
   updateCourse(courseId: string, updatedCourseData: any): Observable<any> {
    return this.hc.put(`http://127.0.0.1:8800/api/course/ucourse/${courseId}`, updatedCourseData);
  }
   getCourses(): Observable<any[]> {
    return this.hc.get<any[]>('http://localhost:8800/api/course/getAllCourses');
}
deleteCourse(courseId: string): Observable<any> {
  const deleteUrl = `http://localhost:8800/api/course/deleteCourse/${courseId}`;
  return this.hc.delete<any>(deleteUrl);
}

isloggedin(){
  return !! localStorage.getItem("userid");
}
}