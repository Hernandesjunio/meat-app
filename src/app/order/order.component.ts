import { CartItem } from './../restaurant-detail/shopping-cart/cart-item.model';
import { OrderService } from './order.service';
import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/shared/radio/radio-option.model';
import { Order, OrderItem } from './order.model';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { validateConfig } from '@angular/router/src/config';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  delivery: number = 8
  orderForm: FormGroup

  paymentOptions: RadioOption[] = [
    { label: 'Dinheiro', value: 'MON' },
    { label: 'Débito', value: 'DEB' },
    { label: 'Refeição', value: 'REF' }
  ]

  patternEmail: any = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/

  constructor(private orderService: OrderService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.orderForm = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      email: new FormControl('', [Validators.required, Validators.pattern(this.patternEmail)]),
      emailConfirmation: new FormControl('', [Validators.required, Validators.pattern(this.patternEmail)]),
      address: new FormControl('', [Validators.required]),
      number: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      optionalAddress: new FormControl(''),
      paymentOption: new FormControl('', Validators.required)
    }, { validator: OrderComponent.equalsTo })
  }

  static equalsTo(group: AbstractControl): { [key: string]: boolean } {
    var email = group.get('email')
    var emailConfirmation = group.get('emailConfirmation')
    
    if (!email || !emailConfirmation)
      return undefined

      
    if (email.value !== emailConfirmation.value)
      return { emailsNotMatch: true }

    return undefined
  }

  itemsValue(): number {
    return this.orderService.itemsValue()
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

  remove(cartItem: CartItem): void {
    this.orderService.remove(cartItem)
  }

  checkOrder(order: Order): void {
    order.orderItems = this.cartItems()
      .map((cartItem: CartItem) =>
        new OrderItem(cartItem.quantity, cartItem.menuItem.id)
      )
    this.orderService.checkOrder(order).subscribe((orderId: string) => {
      this.router.navigate(['/order-summary'])
      console.log('Compra concluída orderId:' + orderId)
      this.orderService.clear();
    })
  }
}
