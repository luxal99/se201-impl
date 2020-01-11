import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { RegistrationDialogComponent } from './registration-dialog/registration-dialog.component';
import { SchedulingDialogComponent } from '../scheduling-dialog/scheduling-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
  });
}


}




