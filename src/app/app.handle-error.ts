import {Response} from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw'

export class ErrorHandler {
    static handleError(error:Response|any){
        let errorMessage:string
        console.log(errorMessage);

        if(error instanceof Response){
            errorMessage = `Erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText}`

        }else{
            errorMessage = error.toString();
        }

        return Observable.throw(errorMessage)
    }
}