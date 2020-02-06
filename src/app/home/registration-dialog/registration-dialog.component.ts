import { Component, OnInit } from '@angular/core';
import { RegistrationService } from 'src/app/registration.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

export class Client {
  idClient;
  name;
  lastname;
  telephone;
  username;
  password;
}
export class User {

  idClient: Client;
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


  constructor(private service: RegistrationService) { }

  ngOnInit() {
  }

  registerClient() {
    var client = new Client();
    var user = new User();

    client.name = this.registerForm.get('name').value;
    client.lastname = this.registerForm.get('lastname').value;
    client.telephone = this.registerForm.get('telephone').value;
    client.username = this.registerForm.get('username').value;
    client.password = this.registerForm.get('password').value;

    if ( client.name === '' || client.lastname === '' || client.telephone === '' || client.username === '' || client.password === '' ) {
      alert('Unesite validne podatke')
    } else {
      this.service.registerUser(client).subscribe(data => {
        console.log(data);
        alert(data);
      })
    }



  }

}
