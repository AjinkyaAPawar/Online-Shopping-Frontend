import { JsonPipe } from '@angular/common';
import { Component,EventEmitter,Input, Output } from '@angular/core';
import axios from 'axios';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

// export class ProductDetailComponent {

//   product:Product = new Product();

//   cartData:any = {};

//   constructor(){
//     console.log("contructer called");
//     this.product.id = 2;
//     this.product.brand = "Soundcore";
//     this.product.color = "Black | red";
//     this.product.description = "Hi-res certified sound: The Hi-Res logo is a of exceptional audio quality, awarded only to audio devices capable of producing the most accurate representation of what the artist intended. Unlike ordinary headphones, life Q10 deliver sound up to 40 KHz for the richest, most nuanced listening experience. Bass up our exclusive bass up technology analyzes your Audio’s low frequencies in real-time and instantly increases the Bass. Combined with oversized 40mm dynamic drivers, bass power is boosted up to 100%. a button on the right ear cup of the wireless over ear headphones activates bass up. 60-Hour playtime an advanced Bluetooth chip with reduced power draw combines with anker’s world-renowned power technology to offer enormous playtime, even for wireless over ear headphones. Listen for 2 hours a day for an entire month";
//     this.product.name = "Life Q10";
//     this.product.picture = "https://cdn.shopify.com/s/files/1/0516/3761/6830/products/06_05f1a31a-c3fd-46a6-ab3c-fd567743d944_2048x.jpg?v=1618822175";
//     this.product.price = 3999;
//     this.product.size = "On - ear";
//     this.product.quantity = 1;
//   }

//   addtocart(){
//     if(localStorage.getItem('cartData')){
//       this.cartData = JSON.parse(localStorage.getItem('cartData')!);
//       if(this.product.id in this.cartData){
//         this.cartData[this.product.id].quantity = this.cartData[this.product.id].quantity + 1;
//       }else{
//         this.cartData[this.product.id] = this.product;
//       }
//       localStorage.setItem('cartData', JSON.stringify(this.cartData));
//     }else{
//       this.cartData[this.product.id] = this.product;
//       localStorage.setItem('cartData', JSON.stringify(this.cartData));
//     }
//   }
// }

// export class Product{
//   id!:number;

// 	brand!:String;

// 	color!:String;

// 	description!:String;

// 	name!:String;

// 	picture!:String;

// 	price!:number;

// 	size!:String;

// 	quantity!:number;

// }


// Rutwik

export class ProductDetailComponent {
  product:Product = new Product();

  productId!:number;
  state!:any;

  cartData:any = {};
  product1!: any;

  constructor(private http: HttpClient, private router:Router){
    if(this.router.getCurrentNavigation()?.extras){
      this.state = this.router.getCurrentNavigation()?.extras.state;
      this.productId = this.state.id;
    }

    var url = `http://localhost:8080/show-product-by-id?id=${this.productId}`

    this.http.get(url).subscribe((res) => {
      this.product1 = res;
      console.log(this.product1)
      this.product.id = this.productId;
      this.product.brand = this.product1.brand;
      this.product.color = this.product1.color;
      this.product.description = this.product1.description;
      this.product.name = this.product1.name;
      this.product.picture = this.product1.picture;
      this.product.price = this.product1.price;
      this.product.size = this.product1.size;
      this.product.quantity = 1;
    });

    // axios.get(url).then((res)=>{
    //   // console.log(res.data);
    //   this.product1 = res;

    // })


    console.log("contructer called");
    console.log(this.productId);

  }

  addtocart(){
    if(localStorage.getItem('cartData')){
      this.cartData = JSON.parse(localStorage.getItem('cartData')!);
      if(this.product.id in this.cartData){
        this.cartData[this.product.id].quantity = this.cartData[this.product.id].quantity + 1;
      }else{
        this.cartData[this.product.id] = this.product;
      }
      localStorage.setItem('cartData', JSON.stringify(this.cartData));
    }else{
      this.cartData[this.product.id] = this.product;
      localStorage.setItem('cartData', JSON.stringify(this.cartData));
    }
  }
}

export class Product{
  id :number;

	brand :string;

	color :string;

	description :string;

	name :string;

	picture :string;

	price :number;

	size :string;

	quantity!:number;

}
