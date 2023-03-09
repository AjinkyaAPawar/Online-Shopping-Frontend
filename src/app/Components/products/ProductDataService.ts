import { Injectable } from "@angular/core";
import { ProductsComponent } from "./products.component";

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  productData: ProductsComponent[];

  addData(productData: ProductsComponent[]) {
    this.productData = productData;
  }

  getData() {
    return this.productData;
  }
}
