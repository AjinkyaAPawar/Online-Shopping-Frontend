import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  dataFromLocal:{} = JSON.parse(localStorage.getItem('cartData')!);
  noOfItem:number = Object.keys(this.dataFromLocal).length;
  keys = Object.keys(this.dataFromLocal);
  cartTotal:number = 0;
  discount:number = 150;
  delivery:number = 0;

  addProduct(id:number){
    this.dataFromLocal[id].quantity = this.dataFromLocal[id].quantity + 1;
    localStorage.setItem('cartData', JSON.stringify(this.dataFromLocal));
  }
  
  removeProduct(id:number){
    this.dataFromLocal[id].quantity = this.dataFromLocal[id].quantity - 1;
    
    if (this.dataFromLocal[id]["quantity"] <= 0) {
      delete this.dataFromLocal[id];
    }
    localStorage.setItem('cartData', JSON.stringify(this.dataFromLocal));
  }

  deleteProductFromCart(id:number){
    delete this.dataFromLocal[id];
    localStorage.setItem('cartData', JSON.stringify(this.dataFromLocal));
  }
  
  constructor(){
    console.log(this.dataFromLocal);
    console.log((typeof(this.keys)));

    for (let key of this.keys) {
      this.cartTotal += this.dataFromLocal[key].price;
    }
    console.log(this.cartTotal);
  }
}
