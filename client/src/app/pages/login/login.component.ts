import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostregisterService } from '../../services/postregister.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm:FormGroup;
  constructor(private formBuilder: FormBuilder,private registeruser:PostregisterService,private R:Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required,Validators.minLength(6)]]

    }
    );
  }
  get f() {
    return this.loginForm.controls;
  }
  login(){
    this.registeruser.loginuser(this.loginForm.value)
    .subscribe({
      next:(res)=>{
        let myrole=JSON.stringify(res.data.roles[0].role);
        localStorage.setItem("userid",res.data._id);
        alert(myrole);
        if(myrole=='"User"'){
        alert("login successful" );
        this.registeruser.isloggedin$.next(true);
        this.R.navigate(['home']);
        this.loginForm.reset();
        }else{
          this.registeruser.isloggedin$.next(true);
          this.R.navigate(['adminlogin']);
          this.loginForm.reset();
        }
      },
      error:(err)=>{
        alert("username or password is incorrect");
        console.log(err);
      }
    })
  }
}
