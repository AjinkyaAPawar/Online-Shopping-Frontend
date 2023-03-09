import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  email!:string;
  password!:string;

  constructor(private router:Router){}

  handlesubmit(){
      console.log(this.email + " "+this.password)
      this.router.navigateByUrl('/dashboard', {state:{"email":this.email}})
    
  }
}
