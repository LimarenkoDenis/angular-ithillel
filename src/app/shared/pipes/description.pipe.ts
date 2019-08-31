import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'description'
})
export class DescriptionPipe implements PipeTransform {

  public transform(value: string, length: number): string {
    return value.length <= length
      ? value
      : `${value.substring(0, length)}...`;
  }

}


// |  description: 10


// Lorem12345...
// Loare


