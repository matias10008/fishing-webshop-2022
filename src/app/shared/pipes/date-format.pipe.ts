import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): string {
    let datestring = new Date().toLocaleDateString().replace(',',' ')
    return datestring
  }

}
