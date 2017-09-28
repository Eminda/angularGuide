import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(items: any, name: any): any {
    if (name) {
      items = items.filter(
        item => item.name.toUpperCase().startsWith(name.toUpperCase()));
    }
    return items;
  }

}
