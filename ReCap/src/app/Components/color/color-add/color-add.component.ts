import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-add',
  templateUrl: './color-add.component.html',
  styleUrls: ['./color-add.component.css']
})
export class ColorAddComponent implements OnInit {

  colorAddForm:FormGroup;

  constructor(private colorService:ColorService,
    private toastrService:ToastrService,
    private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.createColorAddForm();
  }

  createColorAddForm(){
    this.colorAddForm=this.formBuilder.group({
     
      colorName:["",Validators.required],
      
    });
  }

  add(){
    if(this.colorAddForm.valid){

      let brandModel= Object.assign({},this.colorAddForm.value )
      
      this.colorService.addColor(brandModel).subscribe(data=>{
        console.log(data)
        this.toastrService.success(data.message,"Başarılı")
      },dataError=>{
        if(dataError.error.Errors.length>0){
          for (let i = 0; i < dataError.error.Errors.length; i++) {
            
            this.toastrService.error(dataError.error.Errors[i].ErrorMessage,"Doğrulama Hatası")
          }
         
        }
      })
  
    }
    else{
       this.toastrService.error("Formunuz eksik","Dikkat");
    }
  }
}
