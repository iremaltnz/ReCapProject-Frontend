import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { RentalDetail } from '../models/rentalDetail';
import { ListResponseModel } from '../models/listResponseModel';




@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl="https://localhost:44344/api/rentals/getrentaldetail";

  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<ListResponseModel<RentalDetail>>{
    return this.httpClient.get<ListResponseModel<RentalDetail>>(this.apiUrl);
  }
}
