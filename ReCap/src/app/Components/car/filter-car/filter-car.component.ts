import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Brand } from 'src/app/models/brand';
import { CarDetail } from 'src/app/models/carDetail';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-filter-car',
  templateUrl: './filter-car.component.html',
  styleUrls: ['./filter-car.component.css']
})
export class FilterCarComponent implements OnInit {

  colors:Color[]=[];
  brands:Brand[]=[];
  

  brandId:number;
  colorId:number;

  constructor( private colorService:ColorService,
    private brandService:BrandService,
  ) { }

  ngOnInit(): void {
    
      
    this.getColor();
    this.getBrand();
    
    
  }

  getColor(){
    this.colorService.getColors().subscribe(response=>{
      this.colors=response.data;
    })}

    getBrand(){
      this.brandService.getBrands().subscribe(response=>{
        this.brands=response.data;
      })
    }

    getSelectedBrand(brandId: number) {
      if (this.brandId == brandId)
      {
        console.log("brand");
        return true;
      }
      else
      {
        return false;
      }
    }
    
    getSelectedColor(colorId: number) {
      if (this.colorId == colorId)
      {
        console.log("color")
        return true;
      }
      else
      {
        return false;
      }
    }

   
}
