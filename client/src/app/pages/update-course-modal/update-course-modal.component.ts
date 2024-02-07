import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostregisterService } from '../../services/postregister.service';

@Component({
  selector: 'app-update-course-modal',
  templateUrl: './update-course-modal.component.html',
  styleUrl: './update-course-modal.component.scss'
})
export class UpdateCourseModalComponent implements OnInit {
  @Input() updatedCourse: any;
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();
  updateForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private courseService: PostregisterService
  ) {}

  ngOnInit(): void {
    this.updateForm = this.formBuilder.group({
      courseName: [this.updatedCourse.courseName, Validators.required],
      courseDetail: [this.updatedCourse.courseDetail, Validators.required],
      coursePrice: [this.updatedCourse.coursePrice, Validators.required],
      courseFile:[this.updatedCourse.courseFile, Validators.required],
    });
  }

  onSubmit() {
    if (this.updateForm.valid) {
      const updatedCourseData = this.updateForm.value;
      this.courseService.updateCourse(this.updatedCourse._id, updatedCourseData)
        .subscribe({
          next: (response) => {
            console.log('Course updated successfully:', response);
            alert("course updated successfully");
            this.closeModal.emit();
            // Optionally, emit an event or perform other actions upon successful update
          },
          error: (error) => {
            console.error('Error updating course:', error);
            // Handle error (e.g., display error message)
          }
        });
    }
  }
}
