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
    let appointment = this.schedulingForm.get('appointment').value;
    let username = this.schedulingForm.get('username').value;
    let password = this.schedulingForm.get('password').value;
    let type = this.schedulingForm.get('serviceType').value;
    let service = new Service();
    service.date = appointment.date;
    service.time = appointment.time;
    service.car = this.schedulingForm.get('car').value;
    service.carModel = this.schedulingForm.get('carModel').value;

    this.service.schedulingService(service,type.id,username,password).subscribe(data=>{
      console.log(data);
      
    })

    
  }
  displayFn(product) {
    return product.date + ' ' + product.time;
  }

  ngOnInit() {
    this.getAllAvailableService();
  }


}
