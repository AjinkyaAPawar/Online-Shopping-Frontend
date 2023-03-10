import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  dataFromLocal:{} = JSON.parse(localStorage.getItem('cartData')!);
  noOfItem:number = Object.keys(this.dataFromLocal).length;
  keys = Object.keys(this.dataFromLocal);
  cartTotal:number = 0;
  discount:number = 150;
  delivery:number = 0;

  email!: string;
  name!: string;
  number!: number
  sales_tax:number=5;
  customerId:number=1;
  order_date:Date  = new Date();

  saveOrder(){
    let url = `http://localhost:8080/addOrder`;

        this.http.post(url, {
          number: this.noOfItem,
          sales_tax:this.sales_tax,
          customerId:this.customerId,
          order_date:this.order_date
        }).subscribe((res) => {
          console.log(res);
          this.router.navigate(['/']);
        });
  }


  addProduct(id:number){
    this.dataFromLocal[id].quantity = this.dataFromLocal[id].quantity + 1;
    localStorage.setItem('cartData', JSON.stringify(this.dataFromLocal));
    this.updateTotal();
  }

  removeProduct(id:number){
    this.dataFromLocal[id].quantity = this.dataFromLocal[id].quantity - 1;

    if (this.dataFromLocal[id]["quantity"] <= 0) {
      delete this.dataFromLocal[id];
    }
    localStorage.setItem('cartData', JSON.stringify(this.dataFromLocal));
    this.updateTotal();
  }

  deleteProductFromCart(id:number){
    delete this.dataFromLocal[id];
    localStorage.setItem('cartData', JSON.stringify(this.dataFromLocal));
    this.updateTotal();
  }

  updateTotal(){
    this.cartTotal = 0;
    for (let key of this.keys) {
      this.cartTotal += this.dataFromLocal[key].price * this.dataFromLocal[key].quantity;
    }
  }


  constructor(private http : HttpClient, private router:Router){
    this.updateTotal();
  }
}
