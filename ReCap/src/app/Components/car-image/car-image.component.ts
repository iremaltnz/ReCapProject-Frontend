import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-image',
  templateUrl: './car-image.component.html',
  styleUrls: ['./car-image.component.css']
})
export class CarImageComponent implements OnInit {

  carImages:CarImage[]=[];
  car:CarDetail;
  path = "https://localhost:44344";

  constructor(private carImageService:CarImageService,private carService:CarService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

   this.activatedRoute.params.subscribe(params=>{
     if(params["carId"]){
        this.getCarImages(params["carId"]);
        this.getCars(params["carId"])
     }
   })
  }

  getCarImages(carId:number){

    this.carImageService.getCarImages(carId).subscribe(response=>{
      this.carImages=response.data
    })
  }

  getCars(carId:number){
      this.carService.getCarById(carId).subscribe(response=>{
        this.car=response.data
      })

    
  }

  
}

