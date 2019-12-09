import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel, FormControlName } from '@angular/forms';

@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit, AfterContentInit {

  @Input() label: string
  @Input() errorMessage: string
  input: any

  @ContentChild(NgModel) model: NgModel
  @ContentChild(FormControlName) control: FormControlName

  constructor() { }

  ngOnInit() {
  }

  hasSuccess(): boolean {
    return this.input.valid && (this.input.touched || this.input.dirty)
  }

  hasError(): boolean {
    return !this.input.valid && (this.input.touched || this.input.dirty)
  }

  ngAfterContentInit(): void {
    this.input = this.model || this.control

    if (this.input === undefined)
      throw new Error('Este componente precisa ser utilizado com uma diretiva ngModel formControlName')
  }

}
