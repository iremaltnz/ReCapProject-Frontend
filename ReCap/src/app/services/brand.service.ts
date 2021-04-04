import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ListResponseModel } from '../models/listResponseModel';
import { Brand } from '../models/brand';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';


@Injectable({
  providedIn: 'root'
})
export class BrandService {
  

  apiUrl="https://localhost:44344/api/brands/";

  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<ListResponseModel<Brand>>{
    let newPath= this.apiUrl+"getall";
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }

  addBrand(brand :Brand){
    let newPath=this.apiUrl+"add";
    return this.httpClient.post<ResponseModel>(newPath,brand);
  }

  updateBrand(brand:Brand){
    let newPath=this.apiUrl+"update";
    return this.httpClient.post<ResponseModel>(newPath,brand);
  }

  getById(brandId:number){
    let newPath=this.apiUrl+"getbyid?brandId="+brandId;
    return this.httpClient.get<SingleResponseModel<Brand>>(newPath);
  }
}
