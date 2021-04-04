import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-update',
  templateUrl: './color-update.component.html',
  styleUrls: ['./color-update.component.css']
})
export class ColorUpdateComponent implements OnInit {

  colorUpdateForm:FormGroup
  colorId:number;
  color:Color

  constructor(private formBuilder:FormBuilder,
    private activatedRoute:ActivatedRoute,
    private colorService:ColorService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["colorId"]){
        this.colorId=params["colorId"];
        this.getColor(params["colorId"]);
      }
    })
    this.createColorUpdateForm();
  }

  createColorUpdateForm(){
    this.colorUpdateForm=this.formBuilder.group({
     
      colorId:[Number(this.colorId),Validators.required],
      colorName:["",Validators.required]
      
    });
  }
  update(){
  
    if(this.colorUpdateForm.valid){
     
     
     
      let colorModel=Object.assign({},this.colorUpdateForm.value)
      this.colorService.updateColor(colorModel).subscribe(data=>{
       
        this.toastrService.success(data.message,"Başarılı")
      },dataError=>{
        this.toastrService.error("Güncelleme İşlemi Başarısız","Hata")
      })
  
    }
    else{
       this.toastrService.error("Formunuz eksik","Dikkat");
    }
  }

  getColor(colorId:number){
   
    this.colorService.getById(colorId).subscribe(response=>{
     this.color=response.data
    })
  }
}
