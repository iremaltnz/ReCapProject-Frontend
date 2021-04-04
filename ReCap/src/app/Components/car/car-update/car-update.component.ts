import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {

  carUpdateForm:FormGroup;

  colorId:number;
  brandId:number;

  carId:number;
  colors:Color[];
  brands:Brand[];
  car:CarDetail;

  constructor(private formBuilder:FormBuilder,
    private carService:CarService,
    private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService,
    private colorService:ColorService,
    private brandService:BrandService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.carId=params["carId"];
        this.getCarById(params["carId"]);
      }
    })
    this.createCarUpdateForm();
    this.getBrand();
    this.getColor();
  }

  createCarUpdateForm(){
    this.carUpdateForm=this.formBuilder.group({
     
     
      carId:[Number(this.carId),Validators.required],
      brandId:["",Validators.required],
      colorId:["",Validators.required],
      carName:["",Validators.required],
      dailyPrice:["",Validators.required],
      modelYear:["",Validators.required],
      description:["",Validators.required]
      
    });
  }

  update(){
    
    if(this.carUpdateForm.valid){
      let carModel=Object.assign({},this.carUpdateForm.value)
      this.carService.updateCar(carModel).subscribe(data=>{
       
        this.toastrService.success(data.message,"Başarılı")
      },dataError=>{
        this.toastrService.error("Güncelleme İşlemi Başarısız","Hata")
      })
  
    }
    else{
       this.toastrService.error("Formunuz eksik","Dikkat");
    }
  }

  getColor(){
  this.colorService.getColors().subscribe(response=>{
   this.colors=response.data;
  })
  }

  getBrand(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands=response.data;
     })
  }

  getCarById(carId:number){
    this.carService.getCarById(carId).subscribe(response=>{
      this.car=response.data
    })
  }
}
