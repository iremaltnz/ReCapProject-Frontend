import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreditCard } from '../models/creditCard';

import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private httpClient:HttpClient) { }

  apiUrl="https://localhost:44344/api/cards/";

  addCard(card:CreditCard){
    let newPath=this.apiUrl+"add";
    return this.httpClient.post<ResponseModel>(newPath,card);
  }
  
  getCard(userId:number){
    let newPath=this.apiUrl+"getbyuserid?userId="+userId;
    return this.httpClient.get<ListResponseModel<CreditCard>>(newPath);
  }
}
