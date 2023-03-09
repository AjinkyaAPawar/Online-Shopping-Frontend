import { EventEmitter, Injectable } from "@angular/core";
import { ProductsComponent } from "./products.component";
import { Product } from "../products/products.component";

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  // productData: ProductsComponent[];
  productData = new EventEmitter <Product[]>()

  addData(productList: Product[]) {
    this.productData.emit(productList);
  }

  getData() {
    return this.productData;
  }
}
