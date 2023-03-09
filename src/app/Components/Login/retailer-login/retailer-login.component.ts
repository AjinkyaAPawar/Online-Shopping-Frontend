import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-retailer-login',
  templateUrl: './retailer-login.component.html',
  styleUrls: ['./retailer-login.component.css'],
})
export class RetailerLoginComponent {
  constructor(private http: HttpClient) {}

  Login(credentials: { email: string; password: string }) {
    let url = `http://localhost:8080/retailer/login`;
    console.log(credentials);
    this.http.post(url, credentials).subscribe((res) => {
      console.log(res);
    });
  }
}
