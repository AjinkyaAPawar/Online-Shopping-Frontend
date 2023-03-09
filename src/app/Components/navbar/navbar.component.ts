import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForOf } from '@angular/common';
import { ProductDataService } from '../products/ProductDataService';
import { ProductsComponent } from '../products/products.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  name!: string;
  productData !: any;

  constructor(private http: HttpClient, private router:Router, private service: ProductDataService) {}
      serachProduct(){
        let url =`http://localhost:8080/search?name=${this.name}`;
        this.http.get<ProductsComponent[]>(url).subscribe((response)=>{
          console.log(response);
          this.productData = response;
          this.router.navigate(['/dashboard']);
          this.service.addData(response);
          //sessionStorage.setItem('productData', JSON.stringify(this.productData));
        })
      }
}


