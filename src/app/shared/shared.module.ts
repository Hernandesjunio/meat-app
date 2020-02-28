import { LoggedInGard } from './../security/loggedin.guard';
import { LoginService } from './../security/login/login.service';
import { RestaurantsService } from './../restaurants/restaurants.service';
import { ShoppingCartService } from './../restaurant-detail/shopping-cart/shopping-cart.services';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RatingComponent } from './rating/rating.component';
import { RadioComponent } from './radio/radio.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderService } from 'app/order/order.service';
import { SnackbarComponent } from './messages/snackbar/snackbar.component';
import { NotificationService } from './messages/notification.service';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [RadioComponent, RatingComponent, InputComponent, SnackbarComponent],
  exports: [InputComponent, RadioComponent, RatingComponent, CommonModule, FormsModule, ReactiveFormsModule, SnackbarComponent]
  //providers:[NotificationService]
})
export class SharedModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [LoginService, 
                  ShoppingCartService, 
                  OrderService, 
                  RestaurantsService, 
                  NotificationService,
                  LoggedInGard]
    }
  }
}
