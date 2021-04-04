import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Color } from '../models/color';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';



@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl="https://localhost:44344/api/colors/";

  constructor(private httpClient:HttpClient) { }

  getColors():Observable<ListResponseModel<Color>>{
    let newPath=this.apiUrl+"getall";
    return this.httpClient.get<ListResponseModel<Color>>(newPath);
  }

  addColor(color:Color){
     let newPath=this.apiUrl+"add";
     return this.httpClient.post<ResponseModel>(newPath,color);
  }

  updateColor(color:Color){
    let newPath=this.apiUrl+"update";
    return this.httpClient.post<ResponseModel>(newPath,color);
 }
 getById(colorId:number){
  let newPath=this.apiUrl+"getbyid?colorId="+colorId;
  return this.httpClient.get<SingleResponseModel<Color>>(newPath);
}
}

