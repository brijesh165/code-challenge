import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataPipe'
})
export class DataPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(args);
    return args ?
      value.filter((item, index) => {
        if (item.Sex.toLowerCase().indexOf(args.toLowerCase()) !== -1) {
          return true;
        }
      })
      : value;
  }
}
