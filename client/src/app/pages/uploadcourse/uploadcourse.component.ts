import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostregisterService } from '../../services/postregister.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uploadcourse',
  templateUrl: './uploadcourse.component.html',
  styleUrl: './uploadcourse.component.scss'
})
export class UploadcourseComponent {
  myForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private registeruser: PostregisterService,
    private router: Router
  ) {
    this.myForm = this.formBuilder.group({
      courseName: ['', [Validators.required]],
      courseDetail: ['', [Validators.required]],
      courseImage: ['https://th.bing.com/th/id/OIP.5Wm02Pe_N3xY0xbl1bOnjQHaFj?rs=1&pid=ImgDetMain', [Validators.required]],
      coursePrice: ['', [Validators.required]],
      courseFile: [null, [Validators.required]] // Initialize courseFile as null
    });
  }

  get f() {
    return this.myForm.controls;
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.myForm.patchValue({
      courseFile: file
    });
  }

  register() {
    const formData = new FormData();
    const courseNameValue = this.myForm.get('courseName')!.value;
    const courseDetailValue = this.myForm.get('courseDetail')!.value;
    const courseImageValue = this.myForm.get('courseImage')!.value;
    const coursePriceValue = this.myForm.get('coursePrice')!.value;
    const courseFileValue = this.myForm.get('courseFile')!.value;

    if (courseNameValue && courseDetailValue && courseImageValue && coursePriceValue && courseFileValue) {
        formData.append('courseName', courseNameValue);
        formData.append('courseDetail', courseDetailValue);
        formData.append('courseImage', courseImageValue);
        formData.append('coursePrice', coursePriceValue);
        formData.append('courseFile', courseFileValue);

        this.registeruser.uploadcourse(formData)
            .subscribe({
                next: (res) => {
                    alert("Course Created");
                    this.myForm.reset();
                    this.router.navigate(['adminlogin']);
                },
                error: (err) => {
                    alert(err);
                }
            });
    } else {
        console.error('Form data is not valid');
    }
}

}