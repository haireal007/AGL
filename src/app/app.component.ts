import {Component} from '@angular/core';
import {Product} from "../models/Product";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crudAngular';
  products: Product[] = [];
  product: Product = new Product(0, "", "", 0);


  constructor() {
  }

  create(): void {
    this.products.push(this.product);
    localStorage.setItem("index2", String(this.product.id));
  }

  delete(index: number): void {
    this.products.splice(index, 1);
  }

  save(i: number): void {
    localStorage.setItem("index", String(i));
    this.product = Object.assign({},this.products[i]);
  }

  edit(): void {
    let index = localStorage.getItem("index");
    this.products[Number(index)] = this.product;
  }

  reset(): void {
    if (this.products.length == 0) {
      this.product = new Product(1, "", "", 0);
    } else {
      let id = localStorage.getItem("index2");
      this.product = new Product(Number(id) + 1, "", "", 0);
    }
  }

}
