import { Component, OnInit } from '@angular/core';
import { CarDetail } from 'src/app/models/carDetail';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:CarDetail[]=[];
  constructor(private carSevice:CarService) { }

  ngOnInit(): void {
    this.getCars();
  }

  getCars(){

    this.carSevice.getCars().subscribe(response=>{

      this.cars=response.data
    })
  }
}
