import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss'
})
export class CourseCardComponent {
  @Input() course: any; // Assuming 'course' is an object with properties courseImage, courseName, coursePrice, courseDetail, and courseFile
  @Input()
  downloadFile!: Function;
  // @Output() openPDF: EventEmitter<string> = new EventEmitter<string>();
  //@Output() downloadPDF: EventEmitter<string> = new EventEmitter<string>();

  constructor(private http: HttpClient) {}

 ///first download try

  // onDownloadPDF() {
  //   // Get the course ID from the selected course
  //   const courseId = this.course.id;

  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Accept': 'application/pdf'
  //   });

  //   this.http.get(`http://127.0.0.1:8800/api/course/download/${courseId}`, {
  //     headers: headers,
  //     responseType: 'blob'
  //   }).subscribe((data: Blob) => {
  //     // Create a blob URL for the response blob
  //     const blobURL = window.URL.createObjectURL(data);

  //     // Create a temporary anchor element
  //     const anchor = document.createElement('a');
  //     anchor.href = blobURL;
  //     anchor.download = this.course.courseFile.split('/').pop(); // Get the filename from the URL
  //     anchor.click();

  //     // Cleanup
  //     window.URL.revokeObjectURL(blobURL);
  //   }, error => {
  //     console.error('Error downloading file:', error);
  //   });
  
  //second download try

  // onDownloadPDF(courseId: string) {
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Accept': 'application/pdf'
  //   });

  //   this.http.get(`http://127.0.0.1:8800/api/course/download/${courseId}`, {
  //     headers: headers,
  //     responseType: 'blob'
  //   }).subscribe((data: Blob) => {
  //     // Create a blob URL for the response blob
  //     const blobURL = window.URL.createObjectURL(data);

  //     // Create a temporary anchor element
  //     const anchor = document.createElement('a');
  //     anchor.href = blobURL;
  //     anchor.download = this.course.courseFile.split('/').pop(); // Get the filename from the URL
  //     anchor.click();

  //     // Cleanup
  //     window.URL.revokeObjectURL(blobURL);
  //   }, error => {
  //     console.error('Error downloading file:', error);
  //   });
  // }

  downloadCourseFile(): void {
    this.http.get(`http://localhost:8800/api/download/${this.course._id}/download`, { responseType: 'blob' })
      .subscribe(
        (data: Blob) => {
          const blobURL = window.URL.createObjectURL(data);
          const anchor = document.createElement('a');
          anchor.href = blobURL;
          anchor.download = this.course.courseFile.split('/').pop();
          anchor.click();
          window.URL.revokeObjectURL(blobURL);
        },
        error => {
          console.error('Error downloading file:', error);
        }
      );
  }


//   onOpenPDF(courseFile: string) {
//     this.openPDF.emit(courseFile);
// }
}
  




