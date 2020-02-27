import { User } from './../../../../backend/users';
import { MEAT_API } from './../../app.api';
import { environment } from './../../../environments/environment.prod';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) {

  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<User>(`${MEAT_API}/login`, { email: email, password: password })
  }

}
