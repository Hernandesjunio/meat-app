import { NotificationService } from './../../shared/messages/notification.service';
import { User } from './../../../../backend/users';
import { LoginService } from './login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LoginForm } from './user.model';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup
  navigateTo: string

  constructor(private loginService: LoginService,
              private notificationService: NotificationService,
              private activatedRoute: ActivatedRoute,
              private router:Router) { }

  getLoginForm(): LoginForm {
    return this.loginForm.value
  }

  ngOnInit() {
    this.navigateTo = this.activatedRoute.snapshot.params['to'] || btoa('/')

    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', [Validators.required])
    })
  }

  login() {
    const login = this.getLoginForm()

    this.loginService.login(login.email,login.senha)
      .subscribe((user: User) => {
        this.notificationService.notify(`Bem vindo, ${user.name}`)
      },
      (response: HttpErrorResponse)=> this.notificationService.notify(response.error.message),
      ()=> {
        this.router.navigate([atob(this.navigateTo)])
        })
  }

}
