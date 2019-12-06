import { Restaurant } from './restaurant/restaurants.model';
import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from './restaurants.service';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

restaurants:Restaurant[]

  constructor(private restaurantsService: RestaurantsService) {
    
   }

  ngOnInit() {
    this.restaurantsService.restaurants().subscribe(c=> this.restaurants = c);
  }
}
