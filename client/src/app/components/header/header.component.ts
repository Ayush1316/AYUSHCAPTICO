import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostregisterService } from '../../services/postregister.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  constructor(private service:PostregisterService){}
  isloggedin:boolean=false;
  ngOnInit(): void {
    this.service.isloggedin$.subscribe(res=>{
     this.isloggedin= this.service.isloggedin();
    })
  }
  logout(){
    localStorage.removeItem("userid");
    this.service.isloggedin$.next(false);
  }
}
