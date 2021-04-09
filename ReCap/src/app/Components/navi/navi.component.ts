import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  user:User

  constructor(private localStorage:LocalStorageService,
    private authService:AuthService,
    private userService:UserService) { }

  ngOnInit(): void {
    this.userCheck();
    this.getUser();
  }

 userCheck(){
  if(this.authService.isAuthenticated()){
  
         return true;
  }
  else{
    return false;
  }
 }

 signOut(){
   this.localStorage.clearItem();
 }

 getUser(){
  if( this.user=this.localStorage.getItem('user')){
    return true
        }
       return false
 }

}
