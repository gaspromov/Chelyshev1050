import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(arr: any = [{}]): unknown {

    if (arr[0]){

      arr.sort((a, b) => {

        let nameA = a.lastName.toLowerCase(); 
        let nameB = b.lastName.toLowerCase(); 

        if (nameA > nameB)
          return 1;
        else if (nameA < nameB)
          return -1;
        else return 0;

      })

    }

    return arr;
  }

}
