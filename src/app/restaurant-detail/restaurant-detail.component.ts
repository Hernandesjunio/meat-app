import { RestaurantsService } from './../restaurants/restaurants.service';
import { Restaurant } from './../restaurants/restaurant/restaurants.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant
  constructor(private restaurantService:RestaurantsService, 
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.restaurantService.restaurantById(this.activatedRoute.snapshot.params['id'])
    .subscribe(restaurant => this.restaurant = restaurant)
  }

}
