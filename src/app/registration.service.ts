import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const global = "http://localhost:8080/";
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  
  
  constructor(private http:HttpClient) { }

  saveClient(client){
    return this.http.post(global+"registration/saveClient",client,{responseType:'json'});
  }

  registerUser(user){
    return this.http.post(global+"registration/saveUser",user,{responseType:'text'});
  }
}
