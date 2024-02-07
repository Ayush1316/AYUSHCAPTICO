import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminloginComponent } from './pages/adminlogin/adminlogin.component';
import { UploadcourseComponent } from './pages/uploadcourse/uploadcourse.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'adminlogin', component: AdminloginComponent },
  { path: 'uploadcourse', component: UploadcourseComponent },
  {path:'',redirectTo:'login',pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
