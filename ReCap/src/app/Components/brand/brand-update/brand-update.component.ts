import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';
@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css']
})
export class BrandUpdateComponent implements OnInit {


  
  brandUpdateForm:FormGroup;
  brandId:number;
  brand:Brand;

  constructor(private brandService:BrandService,
    private formBuilder:FormBuilder,
    private toastrService:ToastrService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.brandId=params["brandId"];
        this.getBrand(params["brandId"]);
      
      }
    })

    this.createBrandUpdateForm();
   
   
  }

  createBrandUpdateForm(){
    this.brandUpdateForm=this.formBuilder.group({
     
      brandId:[Number(this.brandId),Validators.required],
      brandName:["",Validators.required]
      
    });
  }

  update(){
  
    if(this.brandUpdateForm.valid){
     

      let brandModel=Object.assign({},this.brandUpdateForm.value)
      this.brandService.updateBrand(brandModel).subscribe(data=>{
       
        this.toastrService.success(data.message,"Başarılı")
      },dataError=>{
        this.toastrService.error("Güncelleme İşlemi Başarısız","Hata")
      })
  
    }
    else{
       this.toastrService.error("Formunuz eksik","Dikkat");
    }
  }

  getBrand(brandId:number){
   
    this.brandService.getById(brandId).subscribe(response=>{
     this.brand=response.data
    })
  }
}
