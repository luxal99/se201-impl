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
    let username = this.loginForm.get('username').value;
    let password = this.loginForm.get('password').value;
    this.clientService.getAllService(username,password).subscribe(data=>{
     this.listOfService = data;
      console.log(data);
      
    })
  }

  displayedColumns: string[] = ['serviceType', 'date','time', 'car','carModel'];

}
