import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Product } from '../../products/products.component';
import { ProductDataService } from '../../products/ProductDataService';

@Component({
  selector: 'app-retailer-login',
  templateUrl: './retailer-login.component.html',
  styleUrls: ['./retailer-login.component.css'],
})
export class RetailerLoginComponent{
  data !:any | null;

  constructor(private http: HttpClient, private router:Router, private service: ProductDataService) {}

  Login(credentials: { email: string; password: string }) {
    let url = `http://localhost:8080/retailer/login`;
    console.log(credentials);
    this.http.post(url, credentials).subscribe((res) => {
      console.log(res);

      if (res) {
        this.data = res;
        console.log(this.data.id);
        sessionStorage.setItem('retailerId', this.data.id);
        sessionStorage.setItem("retailerEmail", credentials.email);
        sessionStorage.setItem("retailerPassword", credentials.password);
        this.router.navigate(['/retailer/panel']);
      }
    });
  }

  }



