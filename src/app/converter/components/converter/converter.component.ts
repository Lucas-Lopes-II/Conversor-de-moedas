import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Converter } from '../../models/converter';
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
  public thereIsError: boolean = false;
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
      this.converterService.converter(formValue).subscribe(
        response => {
          this.receiveAndOrganizeData(response);
        },
        error => {
          console.log(error);
          console.log(error.error);
          console.log(error.error.message);
          this.thereIsError = true;
        }
      );
    } else {
      this.thereIsError = true;
      this.converterForm.reset();
    }

    this.converterForm.reset();
  }

  private receiveAndOrganizeData(responseData: any): void {
    const data = {
      value: responseData.query.amount,
      currencyFrom: responseData.query.from,
      converterValue: responseData.result,
      currencyTo: responseData.query.to,
      currencyQuote: responseData.info.rate,
      date: responseData.date
    }

    this.converterData = { ...data, value: (data.value).toFixed(2), converterValue: (data.converterValue).toFixed(2) };
  }
}
