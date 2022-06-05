export interface Converter {
  currencyFrom: string;
  currencyTo: string;
  value: number | null;
}
