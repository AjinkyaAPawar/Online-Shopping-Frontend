import { Component, OnInit } from '@angular/core';
import { Product } from '../../products/products.component';
import { HttpClient } from '@angular/common/http';
import { Router } from 'express';
import { ProductDataService } from '../../products/ProductDataService';
import axios from 'axios';

@Component({
  selector: 'app-retailer',
  templateUrl: './retailer.component.html',
  styleUrls: ['./retailer.component.css']
})
export class RetailerComponent {
  productsData!: any[];
  retailerData : any = {
    id : "",
    email: "" ,
    password:""
  }

  constructor(private http: HttpClient){}
  ngOnInit(){
    console.log("component has been initialised");
    this.showAllProducts()

  }
//   showAllProducts(){
//     this.retailerData.id = sessionStorage.getItem("retailerId")
//     this.retailerData.email = sessionStorage.getItem("retailerEmail");
//     this.retailerData.password = sessionStorage.getItem("retailerPassword");
//   let url = `http://localhost:8080/show-all-products`
//   const jsonData = JSON.stringify(this.retailerData);
//   axios.post(url, jsonData,{
//     headers: {
//         "Content-Type": "application/json"
//     }}).then((response) => {
//     console.log(response);
//     this.productsData = response.data;
// });
// }

showAllProducts(){
      this.retailerData.id = sessionStorage.getItem("retailerId")
      this.retailerData.email = sessionStorage.getItem("retailerEmail");
      this.retailerData.password = sessionStorage.getItem("retailerPassword");
let url = `http://localhost:8080/show-all-products`
const jsonData = JSON.stringify(this.retailerData);
axios.post(url, jsonData,{
  headers: {
      "Content-Type": "application/json"
  }}).then((response) => {
  console.log(response);
  this.productsData = response.data;
});

}
}
