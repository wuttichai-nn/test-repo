import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service'
import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items;
  checkoutForm;

  constructor(
    private CartService: CartService,
    private formBuilder: FormBuilder
  ) {
    this.items = this.CartService.getItems();
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  ngOnInit(): void {
    this.items = this.CartService.getItems();
  }

  onSubmit(customerData) {
    console.warn(customerData);
    this.items = this.CartService.clearCart();
    this.checkoutForm.reset();
  }

}
