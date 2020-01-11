import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-available-service-dialog',
  templateUrl: './available-service-dialog.component.html',
  styleUrls: ['./available-service-dialog.component.css']
})
export class AvailableServiceDialogComponent implements OnInit {

  availableServiceForm = new FormGroup({
    date: new FormControl(""),
    time: new FormControl(""),
  });
  
  constructor() { }

  ngOnInit() {
  }

 
}
