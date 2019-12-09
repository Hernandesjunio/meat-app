import { InputComponent } from './input/input.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RatingComponent } from './rating/rating.component';
import { RadioComponent } from './radio/radio.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  declarations: [RadioComponent,RatingComponent,InputComponent],
  exports:[InputComponent,RadioComponent,RatingComponent,CommonModule,FormsModule,ReactiveFormsModule]
})
export class SharedModule { }
