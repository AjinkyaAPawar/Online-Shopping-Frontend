import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../../products/ProductDataService';
import { Product, ProductsComponent } from '../../products/products.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  productData: Product[];

  constructor(private service: ProductDataService) {}

  ngOnInit(): void {
    //productData : any | null = JSON.parse(sessionStorage.getItem('productData'));
    this.service.getData().subscribe((productList) => {
      this.productData = productList;
      console.log(this.productData);
    });
  }
}
