import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators, FormBuilder  } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup
  user:User

  constructor(private formBuilder:FormBuilder,
    private authService:AuthService,
    private toastrService:ToastrService,private userService:UserService,
    private localStorageService:LocalStorageService) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email: ["",Validators.required],
      password:["",Validators.required]
    })
  }

  login(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      let loginModel=Object.assign({},this.loginForm.value)
      localStorage.setItem("password",loginModel.password)
      this.getByMail(loginModel.email)
      this.authService.login(loginModel).subscribe(data=>{
        this.toastrService.info("Giriş Başarılı","Başarılı")
       localStorage.setItem("token",data.data.token)
      },dataError=>{
       this.toastrService.error(dataError.error)
      })
    }
  }

  getByMail(email:string){

    this.userService.getByMail(email).subscribe(response=>{
      this.user=response.data;
      this.localStorageService.setItem('user',this.user);
    })
  }

}
