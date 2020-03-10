import { MenuItem } from './../menu-item/menu-item.model';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { RestaurantsService } from './../../restaurants/restaurants.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>

  constructor(private restaurantService: RestaurantsService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.menu = this.restaurantService.menuOfRestaurant(
      this.activatedRoute.parent.snapshot.params['id']
    )
  }

  addMenuItem(item: MenuItem) {
    console.log(item)
  }

}
