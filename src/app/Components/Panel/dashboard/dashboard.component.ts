import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../../products/ProductDataService';
import { ProductsComponent } from '../../products/products.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  productData: ProductsComponent[];

  constructor(private service: ProductDataService) {}

  ngOnInit(): void {
    //productData : any | null = JSON.parse(sessionStorage.getItem('productData'));
    this.productData = this.service.getData();
    console.log(this.productData)
  }

}
