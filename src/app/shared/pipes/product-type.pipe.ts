import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productType'
})
export class ProductTypePipe implements PipeTransform {

  private typeHash: { [key: string]: string } = {
    // tslint:disable-next-line: max-line-length
    drink: 'https://banner2.kisspng.com/20180216/cjq/kisspng-whisky-wine-logo-drink-trago-drinks-whiskey-logo-5a879f8fa6eb26.3580880815188376476837.jpg',
    // tslint:disable-next-line: max-line-length
    sandwich: 'https://banner2.kisspng.com/20180411/ioq/kisspng-submarine-sandwich-fast-food-sandwish-5acdeac86fe743.0264246715234444244584.jpg'
  };


  public transform(value: string, ...args: any[]): string {
    return this.typeHash[value] || value;
  }

}
