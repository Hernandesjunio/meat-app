import { LoginService } from './login/login.service';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable, Injector } from "@angular/core";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private injector: Injector) {

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const loginService = this.injector.get(LoginService)
        let authRequest = req
        if (loginService.isLoggedIn()) {
            authRequest = req.clone({ setHeaders: { 'Authorization': `Bearer ${loginService.user.accessToken}` } })
        }
        
        return next.handle(authRequest);
    }

}