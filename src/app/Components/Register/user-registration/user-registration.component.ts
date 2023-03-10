import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductDataService } from '../../products/ProductDataService';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {

  constructor(private http: HttpClient, private router:Router) {}


  userRegistration(credentials: {
     name : string;
     email: string;
     phone:number;
     address:string;
     city:string;
     state: string;
     password: string;
    }){
      let url = `http://localhost:8080/user/register`;
      console.log(credentials);
      this.http.post(url, credentials).subscribe((res) => {
        console.log(res);
        this.router.navigate(['/']);
      });
  }
}


