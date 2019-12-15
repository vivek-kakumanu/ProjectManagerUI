import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterdata'
})
export class FilterdataPipe implements PipeTransform {

   transform(items: any[], field:any, value: any): any[] {

    if(!items) return [];
    if(!value) return items;
    console.log(items[1]);
    console.log(field);
    console.log(value);
    let filterdata=[];
  if(field == "parentTask")
  {
    return items.filter( str => {
      return str[field].parentTask.toLowerCase().includes(value.toLowerCase());
    });
  }
  else{
    return items.filter( str => {
          return str[field].toLowerCase().includes(value.toLowerCase());
        });
      }
   }
}
