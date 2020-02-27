import { User } from './../../../../backend/users';
import { LoginService } from './login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LoginForm } from './user.model';

@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  constructor(private loginService: LoginService) { }

  getLoginForm(): LoginForm {
    return this.loginForm.value
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', [Validators.required])
    })
  }

  login() {
    const login = this.getLoginForm()

    this.loginService.login(login.name,login.password)
      .subscribe((user: User) => {
        console.log(user.name + ' ' + - user.email)
      })
  }

}
