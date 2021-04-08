import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import{FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user:User
  updateUser:User
  password:string
  userUpdateForm:FormGroup

  constructor(private localStorage:LocalStorageService,private formBuilder:FormBuilder,
    private toastrService:ToastrService,private authService:AuthService,
    private userService:UserService) { }

  ngOnInit(): void {
    this.getUser();
    this.getPassword();

    this.createBrandAddForm();
  }

  createBrandAddForm(){
    this.userUpdateForm=this.formBuilder.group({
     
      id:[this.user.id,Validators.required],
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      email:["",Validators.required],
      password:["",Validators.required],
      
    });
  }

  getUser(){
    if( this.user=this.localStorage.getItem("user")){
return true
    }
   return false
   }

   getPassword(){
   
     if(   this.password=this.localStorage.getItem("password")){
      return true
          }
         return false
         }
   

   userUpdate(){
    if(this.userUpdateForm.valid){
     

      let userUpdateModel=Object.assign({},this.userUpdateForm.value)
      this.authService.update(userUpdateModel).subscribe(data=>{
       
     
      this.getByMail(userUpdateModel.email)
      this.localStorage.setItem("password",userUpdateModel.password)
        this.toastrService.success(data.message,"Başarılı")
      },dataError=>{
        this.toastrService.error("Güncelleme İşlemi Başarısız","Hata")
      })
  
    }
    else{
       this.toastrService.error("Formunuz eksik","Dikkat");
    }
   }

   getByMail(email:string){

    this.userService.getByMail(email).subscribe(response=>{
      this.user=response.data;
      this.localStorage.setItem("user",this.user);
    })
  }
   
   
}
