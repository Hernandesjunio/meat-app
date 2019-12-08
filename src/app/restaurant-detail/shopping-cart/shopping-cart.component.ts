import { MenuItem } from './../menu-item/menu-item.model';
import { ShoppingCartService } from './shopping-cart.services';
import { Component, OnInit } from '@angular/core';
import { CartItem } from './cart-item.model';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {

  }

  removeItem(item: CartItem): void {
    this.shoppingCartService.removeItem(item)
  }

  addItem(item: MenuItem): void {
    this.shoppingCartService.addItem(item)
  }

  clear(): void {
    this.shoppingCartService.clear()
  }

  itens(): CartItem[] {
    return this.shoppingCartService.itens
  }

  total(): number {
    return this.shoppingCartService.total()
  }

}
