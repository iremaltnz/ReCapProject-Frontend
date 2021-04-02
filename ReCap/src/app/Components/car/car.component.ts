import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';

import { CarDetail } from 'src/app/models/carDetail';
import { Color } from 'src/app/models/color';


import { CarService } from 'src/app/services/car.service';




@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  filterText="";
  cars:CarDetail[]=[];

  colors:Color[]=[];
  brands:Brand[]=[];
 

  constructor(private carService:CarService,
    private activatedRoute:ActivatedRoute
    
   ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["colorId"] && params["brandId"]){
         this.getCarFilter(params["colorId"],params["brandId"]);
      }
      else if(params["colorId"]){
        this.getCarsByColor(params["colorId"]);
    }
      else if(params["brandId"]){
          this.getCarsByBrand(params["brandId"])
      }
      
      else{
        this.getCars()
       
      }

    })
    
  }

  getCars(){

    this.carService.getCars().subscribe(response=>{

      this.cars=response.data,console.log(response.data)
    })
  }

  getCarsByBrand(brandId:number){

    this.carService.getCarsByBrand(brandId).subscribe(response=>{

      this.cars=response.data
    })
  }

  getCarsByColor(colorId:number){

    this.carService.getCarsByColor(colorId).subscribe(
      response=>{this.cars=response.data}
    )
  }
  getCarFilter(colorId:number,brandId:number){
    this.carService.getCarFilter(colorId,brandId).subscribe(response=>{
       this.cars=response.data
    })
}
 
 
}
