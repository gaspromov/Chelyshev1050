import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(arr: any = [{}], searchParam: string): unknown {

    if (arr[0] && searchParam){
      let filter = arr.filter( ell =>
       ell.group.toLowerCase().indexOf(searchParam.toLowerCase()) === 0 || ell.direction.toLowerCase().indexOf(searchParam.toLowerCase()) === 0
      )

      return filter;

    }

    return arr;
  }

}
