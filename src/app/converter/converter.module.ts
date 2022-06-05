import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConverterComponent } from './components/converter/converter.component';
import { ReactiveFormsModule } from '@angular/forms';



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
