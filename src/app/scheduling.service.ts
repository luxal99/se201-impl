import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SchedulingService {

  global:string = "http://localhost:8080/"

  constructor(private http:HttpClient) {}



  getAllAvailableService(){
    return this.http.get(this.global+"service/getAvailableService",{responseType:'json'});
  }

  schedulingService(service,type,username,password){
    return this.http.post(this.global+"service/getAvailableService/"+type+"/"+username+"/"+password +
     this.global+"client/schedulingService",service,{responseType:'json'});
  }

  createOilService(oilService){
    return this.http.post(this.global+"service/saveOilService",oilService,{responseType:'text'});
  }

  createAcService(acService){
    return this.http.post(this.global+"service/saveAcService",acService,{responseType:'text'});
  }
  
  createMehanicService(mehanicService){
    return this.http.post(this.global+"service/saveMehanicService",mehanicService,{responseType:'text'});
  }
  
  findClient(username,passoword){
    return this.http.get(this.global+"client/findClient/"+username+"/"+passoword,{responseType:'json'});
  }
}
