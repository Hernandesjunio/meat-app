import { RestaurantsService } from './../restaurants/restaurants.service';
import { OrderService } from './../order/order.service';
import { ShoppingCartService } from './../restaurant-detail/shopping-cart/shopping-cart.services';
import { NgModule } from "@angular/core";

@NgModule({
    providers: [ShoppingCartService, OrderService, RestaurantsService]
})
export class CoreModule {
    constructor() { }
}