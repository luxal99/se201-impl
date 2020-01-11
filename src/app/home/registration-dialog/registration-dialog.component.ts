import { Component, OnInit } from '@angular/core';
import { RegistrationService } from 'src/app/registration.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

export class Client{
  idClient;
  name;
  lastname;
  telephone;
}
export class User{
  username;
  password;
  idClient:Client;
}
@Component({
  selector: 'app-registration-dialog',
  templateUrl: './registration-dialog.component.html',
  styleUrls: ['./registration-dialog.component.css']
})
export class RegistrationDialogComponent implements OnInit {


  registerForm = new FormGroup({
    name: new FormControl("", Validators.required),
    lastname: new FormControl("", Validators.required),
    telephone: new FormControl("", Validators.required),
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
  });


  constructor(private service:RegistrationService) { }

  ngOnInit() {
  }

  registerClient(){
    var client = new Client();
    var user = new User();

    client.name = this.registerForm.get('name').value;
    client.lastname = this.registerForm.get('lastname').value;
    client.telephone = this.registerForm.get('telephone').value;

    this.service.saveClient(client).subscribe(data=>{
      client.idClient = data['idClient'];
      user.username = this.registerForm.get('username').value;
      user.password = this.registerForm.get('password').value;
      user.idClient = client;

      this.service.registerUser(user).subscribe(data=>{
        console.log(data);
        
      })
    })

  
  }

}
