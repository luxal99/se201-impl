import { Component, OnInit } from '@angular/core';
import { SchedulingService } from '../scheduling.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Client, User } from '../home/registration-dialog/registration-dialog.component';

class Service {
  idService;
  idClient:Client;
  date;
  time;
  car;
  carModel;
  
}


@Component({
  selector: 'app-scheduling-dialog',
  templateUrl: './scheduling-dialog.component.html',
  styleUrls: ['./scheduling-dialog.component.css']
})
export class SchedulingDialogComponent implements OnInit {

  schedulingForm = new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
    serviceType: new FormControl("", Validators.required),
    appointment: new FormControl("", Validators.required),
    car: new FormControl("", Validators.required),
    carModel: new FormControl("", Validators.required)
  });

  typeOfService:any = [{ id: 1, title: 'Servis klime' }, { id: 2, title: 'Servis ulja' }, { id: 3, title: 'Mehanicki servis' }];
  
  listOfAvailableService: any = [];

  constructor(private service: SchedulingService) { }


  getAllAvailableService() {
    this.service.getAllAvailableService().subscribe(data => {
      
      this.listOfAvailableService = data;
    })
  }

  schedulingService(){
    var user = new User();
    var client = new Client();
    var service = new Service();
    user.username = this.schedulingForm.get('username').value;
    user.password = this.schedulingForm.get('password').value;

    console.log(user);
    
    this.service.findClient(user.username,user.password).subscribe(data=>{
      client.name = data['name'];
      client.lastname=data['lastname']
      client.idClient=data['idClient'];

      service.idClient = client;
      
      let appointment = this.schedulingForm.get('appointment').value;
      service.date = appointment.date;
      service.time = appointment.time;

      service.car = this.schedulingForm.get('car').value;
      service.carModel = this.schedulingForm.get('carModel').value;

      
      console.log(service);
      let typeOfService = this.schedulingForm.get('serviceType').value;

      this.service.schedulingService(service).subscribe(data=>{
        if(typeOfService.id === 1){
         let acService = {idService:service}
         this.service.createAcService(acService).subscribe(data=>{
           console.log(data);
           
         })
        } else if (typeOfService.id === 2){
          
          let oilService = {idService:service}
          this.service.createOilService(oilService).subscribe(data=>{
            console.log(data);
            
          })

        }else if (typeOfService.id === 3){

          let mehanicService = {idService:service}
          this.service.createMehanicService(mehanicService).subscribe(data=>{
            console.log(data);
            
          })
        }
        
      })
      
      
    })
  }
  displayFn(product) {
    return product.date + ' ' + product.time;
  }

  ngOnInit() {
    this.getAllAvailableService();
  }


}
