import { MenuItem } from './menu-item.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, transition, animate, style } from '@angular/animations'

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html',
  animations: [
    trigger('menuItemAppeared', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('500ms 0s ease-in')
      ])
    ])
  ]
})
export class MenuItemComponent implements OnInit {
  stateMenuItem: string = 'ready'
   
  @Input() menuItem: MenuItem
  @Output() add = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  emitAddEvent(): void {
    this.add.emit(this.menuItem)
  }

}
