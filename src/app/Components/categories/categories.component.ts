import { Component } from '@angular/core';
import axios from 'axios';
import {HttpClient} from '@angular/common/http'
import {Router} from '@angular/router'


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoriesComponent {
  categoryId!: number;
  categoryName!: string;
  productsData!: any;
  id!: number;
  url1!: any;
  state!: any;


  constructor(private router: Router, private http: HttpClient){
    if(this.router.getCurrentNavigation()?.extras){
      this.state = this.router.getCurrentNavigation()?.extras.state;
      this.categoryId = this.state.categoryId;
      this.categoryName = this.state.categoryName;

    }
  }
  category1: any = {id: 1, name: 'fashion'};
  ngOnInit() {
    console.log("component has been initialized!")
    this.showProducts(this.categoryId)

  }
  showProducts(id: number){
    this.category1.id = id;
    console.log(id);


    var url = `http://localhost:8080/show-products?id=${this.category1.id}`
    this.url1 = url;


    this.http.get(url).subscribe((response) => {
      console.log(response);
      this.productsData = response;
  })
}

getOneProduct(id1: number){
  this.id = id1;
  // sessionStorage.setItem("productIdFromCategory",this.id)
  this.router.navigateByUrl('products/description', {state:{"id":this.id}});
}

}


