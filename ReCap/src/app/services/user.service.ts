import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SingleResponseModel } from '../models/singleResponseModel';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  apiUrl="https://localhost:44344/api/users/"
  getByMail(email:string){
    let newPath=this.apiUrl+"getbymail?email="+email;
    return this.httpClient.get<SingleResponseModel<User>>(newPath);
  }
}
