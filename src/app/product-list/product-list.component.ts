import { Component } from '@angular/core';
import { products } from '../products'

@Component({
  selector: 'app-product-list', //ชื่อ component
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {
  products = products;
  share() {
    window.alert("hello world")
  }

  onNotify() {
    window.alert("You will be notify wthen the product goes on sale!")
  }

  onTest(product) {
    console.log(product);

  }

}
