import { MEAT_API } from './../app.api';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { CartItem } from './../restaurant-detail/shopping-cart/cart-item.model';
import { ShoppingCartService } from './../restaurant-detail/shopping-cart/shopping-cart.services';
import { Injectable } from '@angular/core';
import { Order } from './order.model';

@Injectable()
export class OrderService {

  constructor(private shoppingCartService: ShoppingCartService,
    private http: Http) {

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
    const headers = new Headers()
    headers.append('Content-Type', 'application/json')

    return this.http.post(`${MEAT_API}/orders`,
      JSON.stringify(order),
      new RequestOptions({ headers: headers }))
      .map(c => c.json())
  }

  clear():void{
    this.shoppingCartService.clear();
  }
}
