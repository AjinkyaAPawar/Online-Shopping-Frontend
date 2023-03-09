import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent {
  name: string;
  brand:string;
  description:string;
  price : number;
  rank:number;
  picture:string;
  weight:number;
}
