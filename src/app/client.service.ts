import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const global = "http://localhost:8080/";
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  

  constructor(private http:HttpClient) { }

  getAllService(username,password){
    return this.http.get(global+"client/getAllServices/"+username+"/"+password,{responseType:'json'});
  }
}
