import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataBr'
})
export class DataBrPipe implements PipeTransform {

  transform(EnglishDate: string): string {
    if (!EnglishDate) return '';

    const dateArray = EnglishDate.split('-') as string[];

    if (dateArray.length !== 3) return EnglishDate;

    return `${dateArray[2]}/${dateArray[1]}/${dateArray[0]}`;
  }
}
