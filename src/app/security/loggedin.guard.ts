import { LoginService } from './login/login.service';
import { CanLoad, Route, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";

export class LoggedInGard implements CanLoad, CanActivate{
   

constructor(private loginService: LoginService){

}

    checkAuthentication(path:string){
        const loggedIn = this.loginService.isLoggetIn();
        if(!loggedIn){
            this.loginService.handleLogin(`${path}`)
        }
        
        return loggedIn
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
        return this.checkAuthentication(route.routeConfig.path)

    }

    canLoad(route: Route): boolean {
        return this.checkAuthentication(route.path)
    }

}