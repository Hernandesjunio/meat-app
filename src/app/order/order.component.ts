import { CartItem } from './../restaurant-detail/shopping-cart/cart-item.model';
import { OrderService } from './order.service';
import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/shared/radio/radio-option.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  paymentOptions: RadioOption[] = [
    { label: 'Dinheiro', value: 'MON' },
    { label: 'Débito', value: 'DEB' },
    { label: 'Refeição', value: 'REF' }
  ]
  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  cartItems(): CartItem[] {
    return this.orderService.cartItems()
  }

  increaseQty(cartItem: CartItem): void {
    this.orderService.increaseQty(cartItem)
  }

  decreaseQty(cartItem: CartItem): void {
    this.orderService.decreaseQty(cartItem)
  }

  remove(cartItem:CartItem):void{
    this.orderService.remove(cartItem)
  }
}
