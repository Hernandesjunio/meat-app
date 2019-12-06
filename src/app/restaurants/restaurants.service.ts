import { MEAT_API } from './../app.api';
import { Restaurant } from "./restaurant/restaurants.model";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { ErrorHandler } from 'app/app.handle-error';

@Injectable()
export class RestaurantsService {

  rests: Restaurant[] = []

  constructor(private http: Http) { }

  restaurants(): Observable<Restaurant[]> {
    return this.http.get(`${MEAT_API}/restaurants`).map(response=> response.json())
    .catch(ErrorHandler.handleError)
  }

  restaurantById(id:string):Observable<Restaurant>{
    return this.http.get(`${MEAT_API}/restaurants/${id}`)
    .map(response=>response.json())
    .catch(ErrorHandler.handleError)
  }
}