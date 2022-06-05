import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Converter } from '../../models/converter';
import { ConverterResponse } from '../../models/converter-response';
import { Currency } from '../../models/currency';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  public currency: Currency[] = [];
  public converter!: Converter;
  public thereIsError: boolean = false;
  public converterResponse!: ConverterResponse;
  public converterInfo: boolean = false;
  public converterData: object = {};
  public converterForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.converterForm = this.formBuilder.group({
      value: [''],
      currencyFrom: ['USD'],
      currencyTo: ['BRL']
    });
  }

  newConversion(): void {
    this.converterInfo = false;
    this.converterForm.reset()
  }

  convert(): void { }
}
