import { NotificationService } from './../../shared/messages/notification.services';
import { Injectable } from '@angular/core';
import { MenuItem } from './../menu-item/menu-item.model';
import { CartItem } from './cart-item.model';

@Injectable()
export class ShoppingCartService {
    itens: CartItem[] = []

    constructor(private notificationService: NotificationService) { }

    clear(): void {
        this.itens = []
    }

    addItem(item: MenuItem): void {
        const foundItem = this.itens.find(d => d.menuItem.id == item.id)
        if (foundItem)
            foundItem.quantity++
        else
            this.itens.push(new CartItem(item))

        this.notificationService.notify(`Você adicionou o item ${item.name}`)
    }

    increaseQty(item: CartItem): void {
        item.quantity++
    }

    decreaseQty(item: CartItem): void {
        item.quantity--
        if (item.quantity === 0)
            this.removeItem(item)
    }

    removeItem(item: CartItem): void {
        this.itens.splice(this.itens.indexOf(item), 1)

        this.notificationService.notify(`Você removeu o item ${item.menuItem.name}`)
    }

    total(): number {
        return this.itens.map(c => c.value()).reduce((x, y) => x + y, 0)
    }

}