import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


import { ResponseModel } from '../models/responseModel';
import { Payment } from '../models/payment';


@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  

  apiUrl="https://localhost:44344/api/payments/paymentcheck";

  constructor(private httpClient:HttpClient) { }

  paymentCheck(payment:Payment):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl,payment);
  }
}
