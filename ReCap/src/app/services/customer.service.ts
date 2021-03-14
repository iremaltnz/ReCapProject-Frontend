import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerDetailResponseModel } from '../models/customerDetailResponseModel';




@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl="https://localhost:44344/api/customers/getcustomerdetail";

  constructor(private httpClient:HttpClient) { }

  getCustomer():Observable<CustomerDetailResponseModel>{
    return this.httpClient.get<CustomerDetailResponseModel>(this.apiUrl);
  }
}
