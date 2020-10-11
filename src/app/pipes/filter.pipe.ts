import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(table: any[], text: string): any[] {
    if (text === '') {
      return table;
    }
    text = text.toLocaleLowerCase();
    return table.filter(item => {
      return item.Nom.toLowerCase().includes(text);
    })
  }

}
