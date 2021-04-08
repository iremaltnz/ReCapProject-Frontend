import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


import { ResponseModel } from '../models/responseModel';





@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  

  apiUrl="https://localhost:44344/api/payments/";

  constructor(private httpClient:HttpClient) { }

  paymentCheck():Observable<ResponseModel>{
    let newPath=this.apiUrl+"check"
    return this.httpClient.get<ResponseModel>(newPath);
  }

  
}
