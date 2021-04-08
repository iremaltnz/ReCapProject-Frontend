import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators, FormBuilder  } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup
  constructor(private formBuilder:FormBuilder,
    private authService:AuthService,
    private toastrService:ToastrService) { }

    ngOnInit(): void {
      this.createRegisterForm();
    }
  
    createRegisterForm(){
      this.registerForm = this.formBuilder.group({
        firstName: ["",Validators.required],
        lastName: ["",Validators.required],
        email: ["",Validators.required],
        password:["",Validators.required]
      })
    }

    register(){
      if(this.registerForm.valid){
        console.log(this.registerForm.value);
        let loginModel=Object.assign({},this.registerForm.value)
        
        this.authService.register(loginModel).subscribe(data=>{
          this.toastrService.info(data.message,"Başarılı")
       //  localStorage.setItem("token",data.data.token)
        },dataError=>{
         this.toastrService.error(dataError.message)
        })
      }
    }
}
