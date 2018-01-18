import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, type: string, kind: any): any {
    if (kind === 'id') {
      if (type === 'asc') {
        value.sort((a, b) => {
          return a.id - b.id;
        });
      } else if (type === 'desc') {
        value.sort((a, b) => {
          return b.id - a.id;
        });
      }
    } else if (kind === 'name') {
      if (type === 'asc') {
        value.sort(function (a, b) {
          const nameA = a.name.toUpperCase(); // ignore upper and lowercase
          const nameB = b.name.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          // names must be equal
          return 0;
        });
      } else if (type === 'desc') {
        value.sort(function (a, b) {
          const nameA = a.name.toUpperCase(); // ignore upper and lowercase
          const nameB = b.name.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return 1;
          }
          if (nameA > nameB) {
            return -1;
          }
          // names must be equal
          return 0;
        });
      }
    }
    return value;
  }

}
