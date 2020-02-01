import { Component, OnInit, Output, Inject, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SchedulingService } from 'src/app/scheduling.service';
import { User } from '../registration-dialog/registration-dialog.component';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {
  

  @Output() public onDelete: EventEmitter<{}> = new EventEmitter();
  
  loginForm = new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  });

  constructor(public service:SchedulingService,@Inject(MAT_DIALOG_DATA) public data) { }



  ngOnInit() {
    console.log(this.data);
    
  }

  sendData(){
    this.data='Aleksa';
    this.onDelete.emit(this.data);
    
  }

}
