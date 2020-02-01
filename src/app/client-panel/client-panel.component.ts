import { Component, OnInit, Input, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginDialogComponent } from '../home/login-dialog/login-dialog.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SchedulingService } from '../scheduling.service';
import { User } from '../home/registration-dialog/registration-dialog.component';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-panel',
  templateUrl: './client-panel.component.html',
  styleUrls: ['./client-panel.component.css']
})
@Injectable()
export class ClientPanelComponent implements OnInit {

  listOfServices:any =[];


  loginForm = new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  });

  
  // @Input()
  // idClient;

  constructor(private dialog:MatDialog,private service:SchedulingService,private clientService:ClientService) { }

  ngOnInit() {
    
  }

  listOfService:any=[];

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
     
    });
  }

  getAllServices(){
    this.clientService.getAllService(34).subscribe(data=>{
     this.listOfService = data;
      
    })
  }

  // findUser(){
  //   var user = new User();
  //   user.username = this.loginForm.get('username').value;
  //   user.password = this.loginForm.get('password').value;

  //   this.service.findClient(user.username,user.password).subscribe(data=>{
      
  //    this.clientService.getAllService(data['idClient']).subscribe(data=>{
  //      this.listOfServices = data;
  //      console.log(this.listOfServices);
       
  //    })
      
  //   })
  // }

  displayedColumns: string[] = ['serviceType', 'date','time', 'car','carModel'];

}
