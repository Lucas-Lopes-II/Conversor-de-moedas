import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Converter } from '../models/converter';
import { ConverterResponse } from '../models/converter-response';

@Injectable()
export class ConverterService {

  private readonly API: string = environment.API
  private readonly KEY: string = environment.KEY

  constructor(
    private http: HttpClient
  ) { }

  converter(converter: Converter): Observable<ConverterResponse> {
    const params = `?to=${converter.currencyTo}&from=${converter.currencyFrom}&amount=${converter.value}`;

    return this.http.get<ConverterResponse>(`${this.API}${params}&apikey=${this.KEY}`);
  }
}
