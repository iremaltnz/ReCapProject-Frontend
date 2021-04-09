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
      console.log(this.registerForm.value)
      if(this.registerForm.valid){
        console.log(this.registerForm.value);
        let loginModel=Object.assign({},this.registerForm.value)
        
        this.authService.register(loginModel).subscribe(data=>{
          this.toastrService.info(data.message,"Başarılı")
     
        },dataError=>{
          if(dataError.error.Errors.length>0){
            for (let i = 0; i < dataError.error.Errors.length; i++) {
              
              this.toastrService.error(dataError.error.Errors[i].ErrorMessage,"Doğrulama Hatası")
            }
           
          }
        
        })
      }
    }
}
