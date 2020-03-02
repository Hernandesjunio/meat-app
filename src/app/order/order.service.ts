import { LoginService } from './../security/login/login.service';
import { MEAT_API } from './../app.api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { CartItem } from './../restaurant-detail/shopping-cart/cart-item.model';
import { ShoppingCartService } from './../restaurant-detail/shopping-cart/shopping-cart.services';
import { Injectable } from '@angular/core';
import { Order } from './order.model';
import { HammerGestureConfig } from '@angular/platform-browser';

@Injectable()
export class OrderService {

  constructor(private shoppingCartService: ShoppingCartService,
    private http: HttpClient) {

  }

  itemsValue(): number {
    return this.shoppingCartService.total()
  }

  cartItems(): CartItem[] {
    return this.shoppingCartService.itens
  }

  increaseQty(item: CartItem): void {
    this.shoppingCartService.increaseQty(item)
  }

  decreaseQty(item: CartItem): void {
    this.shoppingCartService.decreaseQty(item)
  }

  remove(item: CartItem): void {
    this.shoppingCartService.removeItem(item)
  }

  checkOrder(order: Order): Observable<string> {

    return this.http.post<Order>(`${MEAT_API}/orders`, order)
      .map((order: Order) => order.id)
  }

  clear(): void {
    this.shoppingCartService.clear();
  }
}
