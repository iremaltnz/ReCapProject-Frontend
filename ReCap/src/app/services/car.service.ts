import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarDetailResponseModel } from '../models/carDetailResponseModel';



@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl="https://localhost:44344/api/cars/getcardetail";

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<CarDetailResponseModel>{
    return this.httpClient.get<CarDetailResponseModel>(this.apiUrl);
  }
}