import { SharedModule } from './../shared/shared.module';
import { DeliveryCostsComponent } from './delivery-costs/delivery-costs.component';
import { OrderComponent } from './order.component';
import { NgModule } from '@angular/core';
import { OrderItemsComponent } from './order-items/order-items.component';
import { Routes, RouterModule } from '@angular/router';
import { LeaveOrderGuard } from './leave-order.guard';


const ROUTES: Routes = [
    { path: '', component: OrderComponent, canDeactivate:[LeaveOrderGuard] }
]

@NgModule({
    declarations: [OrderComponent, OrderItemsComponent, DeliveryCostsComponent],
    imports: [SharedModule, RouterModule.forChild(ROUTES)],
    providers:[]
})
export class OrderModule {
    constructor() { }
}