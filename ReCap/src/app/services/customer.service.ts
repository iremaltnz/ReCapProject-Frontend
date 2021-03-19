import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CustomerDetail } from '../models/customerDetail';
import { ListResponseModel } from '../models/listResponseModel';




@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl="https://localhost:44344/api/customers/getcustomerdetail";

  constructor(private httpClient:HttpClient) { }

  getCustomer():Observable<ListResponseModel<CustomerDetail>>{
    return this.httpClient.get<ListResponseModel<CustomerDetail>>(this.apiUrl);
  }
}
