import { Injectable } from "@angular/core";
import { Product } from "./navbar.component";

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  productData: Product[];

  addData(productData: Product[]) {
    this.productData = productData;
  }

  getData() {
    return this.productData;
  }
}
