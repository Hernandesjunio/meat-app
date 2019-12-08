import { CartItem } from './../restaurant-detail/shopping-cart/cart-item.model';
import { ShoppingCartService } from './../restaurant-detail/shopping-cart/shopping-cart.services';
import { Injectable } from '@angular/core';

@Injectable()
export class OrderService {

  constructor(private shoppingCartService:ShoppingCartService) {

   }

   cartItems(): CartItem[]{
     console.log('items')
     return this.shoppingCartService.itens
   }

   increaseQty(item:CartItem):void{
    this.shoppingCartService.increaseQty(item)
   }

   decreaseQty(item:CartItem):void{
    this.shoppingCartService.decreaseQty(item)
   }

   remove(item:CartItem):void{
    this.shoppingCartService.removeItem(item)
   }

}
