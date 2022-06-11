import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Converter } from '../../models/converter';
import { ConverterResponse } from '../../models/converter-response';
import { Currency } from '../../models/currency';
import { ConverterService } from '../../services/converter.service';
import { CurrencyService } from '../../services/currency.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  public currencies!: Currency[];
  public converter!: Converter;
  public thereIsError: boolean = false;
  public converterResponse!: ConverterResponse;
  public converterInfo: boolean = false;
  public converterData: object = {};
  public converterForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private currencyService: CurrencyService,
    private converterService: ConverterService
  ) { }

  ngOnInit(): void {
    this.converterForm = this.formBuilder.group({
      value: [''],
      currencyFrom: ['USD'],
      currencyTo: ['BRL']
    });

    this.currencies = this.currencyService.fetchCurrency();
    this.init();
  }

  init(): void {
    this.thereIsError = false;
    this.converterInfo = false;
  }

  newConversion(): void {
    this.converterInfo = false;
    this.converterForm.reset()
  }

  convert(): void {
    const form = this.converterForm;
    const formValue: Converter = this.converterForm.getRawValue();

    if (form.valid) {
      this.converterService.converter(formValue).subscribe(response => {
        this.converterResponse = response;
        console.log(response);
      }, error => {
        console.log(error);
        console.log(error.error);
        console.log(error.error.message);
        this.thereIsError = true;
      });
    } else {
      this.thereIsError = true;
      this.converterForm.reset();
    }

  }
}
