import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Converter } from '../models/converter';
import { ConverterResponse } from '../models/converter-response';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {

  private readonly API: string = environment.API

  constructor(
    private http: HttpClient
  ) { }

  converter(converter: Converter): Observable<ConverterResponse> {
    const params = `?to=${converter.currencyTo}&from=${converter.currencyForm}&amount=${converter.value}`;

    return this.http.get<ConverterResponse>(`${this.API}${params}&apikey=FO6ZWoSWLS5z15d8a7EW9ChO7LrSuJyS`);
  }
}