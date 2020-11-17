import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstChar'
})
export class FirstCharPipe implements PipeTransform {

  transform(str: string): unknown {

    if (str){

      return str[0];

    }

    return str;
  }

}
