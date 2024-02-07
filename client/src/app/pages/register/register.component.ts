import { Component } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import Validation from '../../utils/validation';
import { PostregisterService } from '../../services/postregister.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
myForm:FormGroup;
  constructor(private formBuilder: FormBuilder,private registeruser:PostregisterService,private R:Router) {
    this.myForm = this.formBuilder.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required,Validators.minLength(6)]],
      confirmpassword: ['', [Validators.required, Validators.minLength(6)]]

    },
    {
      validators: [Validation.match('password', 'confirmpassword')]
    }
    );
  }
  get f() {
    return this.myForm.controls;
  }
  register(){
    this.registeruser.uploaduser(this.myForm.value).subscribe({
      next:(res)=>{
        alert("User cretaed");
        this.myForm.reset();
        this.R.navigate(['login']);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
}
