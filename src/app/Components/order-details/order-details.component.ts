import { Component } from '@angular/core';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent {
  dataFromLocal:{} = JSON.parse(localStorage.getItem('cartData')!);
  noOfItem:number = Object.keys(this.dataFromLocal).length;
  keys = Object.keys(this.dataFromLocal);
  cartTotal:number = 0;
  discount:number = 150;
  delivery:number = 0;

  constructor(){
    this.cartTotal = 0;
    for (let key of this.keys) {
      this.cartTotal += this.dataFromLocal[key].price * this.dataFromLocal[key].quantity;
    }
  }

}
