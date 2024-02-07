import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent implements OnInit {

  courses: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    // Assuming the API endpoint returns an array of course objects
    this.http.get<any[]>('http://localhost:8800/api/course/getAllCourses').subscribe(
      (response) => {
        this.courses = response;
        console.log(this.courses);
      },
      (error) => {
        console.error('Error fetching courses:', error);
      }
    );
  }

  openPDF(courseFile: string) {
    // Assuming 'courseFile' is the URL to the PDF file
    this.router.navigateByUrl(courseFile);
  }

  downloadCourseFile(courseId: string): void {
    this.http.get(`http://localhost:8800/api/download/${courseId}/download`, { responseType: 'blob' })
      .subscribe(
        (data: Blob) => {
          const blobURL = window.URL.createObjectURL(data);
          const anchor = document.createElement('a');
          anchor.href = blobURL;
          anchor.download = courseId + '.pdf'; // Customize the filename here if needed
          anchor.click();
          window.URL.revokeObjectURL(blobURL);
        },
        error => {
          console.error('Error downloading file:', error);
        }
      );
  }
}


