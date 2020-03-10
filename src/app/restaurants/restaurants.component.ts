import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { state, trigger, style, transition, animate } from '@angular/animations';
import { Restaurant } from './restaurant/restaurants.model';
import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from './restaurants.service';
import { debounceTime, switchMap, distinctUntilChanged, catchError } from 'rxjs/operators';
import { from } from 'rxjs';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  animations: [
    trigger('toggleSearch', [
      state('hidden',
        style({
          opacity: 0,
          "max-height": "0px"
        })
      ),
      state('visible',
        style({
          opacity: 1,
          "max-height": "70px",
          "margin-top": "20px"
        })
      ),
      transition('* => *', animate('250ms 0s ease-in-out'))
    ])
  ]
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[]
  searchBarState: string = 'hidden'
  searchForm: FormGroup
  searchControl: FormControl
  constructor(private restaurantsService: RestaurantsService,
    private fb: FormBuilder) {

  }

  ngOnInit() {

    this.searchControl = this.fb.control('')
    this.searchForm = this.fb.group({
      searchControl: this.searchControl
    })

    this.searchControl.valueChanges
    .pipe(debounceTime(500),
    distinctUntilChanged(),
    switchMap(searchTerm=> this.restaurantsService.
                                restaurants(searchTerm)
                                .pipe(catchError(error => from([])))))
    .subscribe((c:Restaurant[])=> this.restaurants = c)

    this.restaurantsService.restaurants().subscribe((c:Restaurant[]) => this.restaurants = c);
  }

  toggleSearch() {
    this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden'
    console.log(this.searchBarState)
  }
}
