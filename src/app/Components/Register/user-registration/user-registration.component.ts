import { Component } from '@angular/core';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {
  user:User = new User();

  handlesubmit(){
    console.log(this.user);
    this.user.name = "";
    this.user.email = "";
    this.user.phone = "";
    this.user.password = "";
  }
}

export class User{
  name!:string;
  email!:string;
  phone!:string;
  password!:string;
}