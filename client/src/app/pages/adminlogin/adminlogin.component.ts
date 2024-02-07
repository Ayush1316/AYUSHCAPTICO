import { Component } from '@angular/core';
import { PostregisterService } from '../../services/postregister.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.scss'
})
export class AdminloginComponent {
  courses: any[] = [];
  
  showUpdateModal: boolean = false;
  selectedCourse: any;

  
  constructor(private service:PostregisterService){

  }
  ngOnInit(): void {
    this.getCourses();
}

getCourses(): void {
    this.service.getCourses()
        .subscribe(
          (response) => {
            this.courses = response;
          },
          (error) => {
            console.error('Error fetching courses:', error);
          }
        );
}
openUpdateModal(course: any) {
  this.selectedCourse = course;
  this.showUpdateModal = true;
}
deleteCourse(courseId: string): void {
  this.service.deleteCourse(courseId)
      .subscribe(
          () => {
              // Remove the deleted course from the local array
              this.courses = this.courses.filter(c => c._id !== courseId);
          },
          error => {
              console.error('Error deleting course: ', error);
          }
      );
}
}
