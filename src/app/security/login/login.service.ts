
import { MEAT_API } from './../../app.api';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/do'
import { User } from './user.model';

@Injectable()
export class LoginService {

  user: User;
  constructor(private http: HttpClient) {

  }

  isLoggetIn():boolean{
    return this.user !== undefined
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<User>(`${MEAT_API}/login`, { email: email, password: password })
                    .do(user => this.user = user)
  }

}
