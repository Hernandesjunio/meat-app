import { EventEmitter } from '@angular/core';

export class NotificationService{
    notifier = new EventEmitter<string>()

    constructor(){}

    notify(message:string):void{
        this.notifier.emit(message)
    }
}