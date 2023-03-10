import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProductDataService } from '../products/ProductDataService';
import { Product, ProductsComponent } from '../products/products.component';
import { DashboardComponent } from '../Panel/dashboard/dashboard.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  name!: string;

  constructor(private http: HttpClient, private router:Router, private service: ProductDataService) {}
      searchProduct(){
        let url =`http://localhost:8080/search?name=${this.name}`;
        this.http.get<Product[]>(url).subscribe((response)=>{
          console.log(response);
          this.router.navigate(['/dashboard']);
          this.service.addData(response);
          // sessionStorage.setItem('productData', JSON.stringify(this.productData));
        })
      }

      navigateToCategory(){
        this.router.navigate(['/category'])
      }
}


