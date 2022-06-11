import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ConverterComponent } from './components/converter/converter.component';
import { OnlyNumberDirective } from './directives/only-number.directive';
import { CurrencyService } from './services/currency.service';
import { ConverterService } from './services/converter.service';



@NgModule({
  declarations: [
    ConverterComponent,
    OnlyNumberDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ConverterComponent
  ],
  providers: [CurrencyService, ConverterService]
})
export class ConverterModule { }
