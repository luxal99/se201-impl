import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegistrationDialogComponent } from './registration-dialog/registration-dialog.component';
import { SchedulingDialogComponent } from '../scheduling-dialog/scheduling-dialog.component';
import { SchedulingService } from '../scheduling.service';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';

let num;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input()
  data;

  constructor(public dialog: MatDialog) { }

  
  ngOnInit() {
  }


  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  
openRegistationDialog(): void {
  const dialogRef = this.dialog.open(RegistrationDialogComponent, {
    width: '350px',
  });

  dialogRef.afterClosed().subscribe(result => {
  });
}


openSchedulingDialog(): void {
  const dialogRef = this.dialog.open(SchedulingDialogComponent, {
    width: '350px',
    
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log(this.data);
    
  });
}

print(){
  console.log(this.data);
  
}


}








