import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { RentalDetail } from '../models/rentalDetail';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { ResponseModel } from '../models/responseModel';




@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl="https://localhost:44344/api/rentals/";

  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<ListResponseModel<RentalDetail>>{
    let newPath=this.apiUrl+"getrentaldetail";
    return this.httpClient.get<ListResponseModel<RentalDetail>>(newPath);
  }

  add(rental:Rental):Observable<ResponseModel>{
    let newPath=this.apiUrl+"add";
     return this.httpClient.post<ResponseModel>(newPath,rental);
  }

  check(rental:Rental):Observable<ResponseModel>{
    let newPath=this.apiUrl+"check";
    return this.httpClient.post<ResponseModel>(newPath,rental);

  }
}
