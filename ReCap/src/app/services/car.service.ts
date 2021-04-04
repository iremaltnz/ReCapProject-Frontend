import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ListResponseModel } from '../models/listResponseModel';
import { CarDetail } from '../models/carDetail';
import { SingleResponseModel } from '../models/singleResponseModel';
import { Car } from '../models/car';
import { ResponseModel } from '../models/responseModel';



@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl="https://localhost:44344/api/";

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"cars/getcardetail";
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<CarDetail>>{
    let newpath=this.apiUrl+"cars/getbybrand?brandId="+brandId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newpath);
  }

  getCarsByColor(colorId:number):Observable<ListResponseModel<CarDetail>>{
    let newpath=this.apiUrl+"cars/getbycolor?colorId="+colorId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newpath);
  }

  getCarById(carId:number){
       let newPath=this.apiUrl+"cars/getcardetailbyid?carId="+carId
       return this.httpClient.get<SingleResponseModel<CarDetail>>(newPath)
  }

  getCarFilter(colorId:number,brandId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"cars/getcarfilter?colorId="+colorId+"&brandId="+brandId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }

  addCar(car:Car){
      let newPath = this.apiUrl+"cars/add";
      return this.httpClient.post<ResponseModel>(newPath,car);
  }

  updateCar(car:Car){
    let newPath = this.apiUrl+"cars/update";
    return this.httpClient.post<ResponseModel>(newPath,car);
}
}