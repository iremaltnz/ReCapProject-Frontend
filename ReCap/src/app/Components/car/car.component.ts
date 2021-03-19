import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:CarDetail[]=[];
  constructor(private carSevice:CarService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
          this.getCarsByBrand(params["brandId"])
      }
      else if(params["colorId"]){
          this.getCarsByColor(params["colorId"]);
      }
      else{
        this.getCars()
      }
    })
    
  }

  getCars(){

    this.carSevice.getCars().subscribe(response=>{

      this.cars=response.data
    })
  }

  getCarsByBrand(brandId:number){

    this.carSevice.getCarsByBrand(brandId).subscribe(response=>{

      this.cars=response.data
    })
  }

  getCarsByColor(colorId:number){

    this.carSevice.getCarsByColor(colorId).subscribe(
      response=>{this.cars=response.data,console.log(response.data)}
    )
  }
}
