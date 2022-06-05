import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ConverterComponent } from './components/converter/converter.component';



@NgModule({
  declarations: [
    ConverterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ConverterComponent
  ]
})
export class ConverterModule { }
