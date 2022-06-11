import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ConverterComponent } from './components/converter/converter.component';
import { OnlyNumberDirective } from './directives/only-number.directive';
import { CurrencyService } from './services/currency.service';
import { ConverterService } from './services/converter.service';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    ConverterComponent,
    OnlyNumberDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    ConverterComponent
  ],
  providers: [CurrencyService, ConverterService]
})
export class ConverterModule { }
