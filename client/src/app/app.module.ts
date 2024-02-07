import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ResetComponent } from './pages/reset/reset.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AdminloginComponent } from './pages/adminlogin/adminlogin.component';
import { UploadcourseComponent } from './pages/uploadcourse/uploadcourse.component';
import { ParentComponent } from './pages/parent/parent.component';
import { CourseCardComponent } from './pages/course-card/course-card.component';
import { UpdateCourseModalComponent } from './pages/update-course-modal/update-course-modal.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ResetComponent,
    ForgetPasswordComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AdminloginComponent,
    UploadcourseComponent,
    ParentComponent,
    CourseCardComponent,
    UpdateCourseModalComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,CommonModule,
    AppRoutingModule,BrowserAnimationsModule,FormsModule,HttpClientModule,RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
