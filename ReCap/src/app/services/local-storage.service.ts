import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getToken(){
    return localStorage.getItem("token");
  }

  
  clearItem(){
    return localStorage.clear();
  }

  addToken(token:string){
    return localStorage.setItem("token",token)
  }

  setItem(key: string, object: any) {
    localStorage.setItem(key, JSON.stringify(object));
  }


 getItem(key:string){
  return JSON.parse(localStorage.getItem(key)!);
}
 
}
