import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Converter } from '../../models/converter';
import { ConverterData } from '../../models/converter-data';
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
  public converterData!: ConverterData;
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

  private init(): void {
    this.thereIsError = false;
    this.converterInfo = false;
  }

  convert(): void {
    const form = this.converterForm;
    const formValue: Converter = this.converterForm.getRawValue();

    if (form.valid) {
      this.converterService.converter(formValue).subscribe(
        response => {
          this.receiveAndOrganizeData(response);
          this.converterInfo = true;
          console.log(this.converterData);
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
    const data: ConverterData = {
      value: responseData.query.amount,
      currencyFrom: responseData.query.from,
      converterValue: responseData.result,
      currencyTo: responseData.query.to,
      currencyQuote: responseData.info.rate,
      date: responseData.date
    }

    this.converterData = { ...data, value: (Number(data.value)).toFixed(2), converterValue: (Number(data.converterValue)).toFixed(2) };
  }

  newQuoteQuery(): void {
    this.init();
    this.converterForm = this.formBuilder.group({
      value: [''],
      currencyFrom: ['USD'],
      currencyTo: ['BRL']
    });
  }
}
