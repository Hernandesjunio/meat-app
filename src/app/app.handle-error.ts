import { Injector/*, NgZone*/ } from '@angular/core';
import { LoginService } from './security/login/login.service';
import { NotificationService } from './shared/messages/notification.service';
import { HttpErrorResponse } from '@angular/common/http'

import { ErrorHandler, Inject, Injectable } from '@angular/core';

@Injectable()
export class AplicationErrorHandler extends ErrorHandler {
    constructor(private ns: NotificationService,
                private injector: Injector/*,
                private zone: NgZone*/){
        super()
    }

     handleError(errorResponse: HttpErrorResponse | any) {

        
        if(errorResponse instanceof HttpErrorResponse){
            const message = errorResponse.error.message
            /*this.zone.run(()=>{*/
            
                switch(errorResponse.status){
                    case 401:
                        this.injector.get(LoginService).handleLogin();
                        break;
                    case 403:
                        this.ns.notify(message||'Não autorizado.')
                        break;
                    case 404:
                        this.ns.notify(message || 'Recurso não encontrado. Verifique o console para mais detalhes.')
                        break;
                }

            /*})*/
        }

         super.handleError(errorResponse)
        // let errorMessage: string

        // if (error instanceof HttpErrorResponse) {
        //     const body = error.error
        //     errorMessage = `Erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText} || ${body}`

        // } else {
        //     errorMessage = error.message ? error.message : error.toString();
        // }
    }
}