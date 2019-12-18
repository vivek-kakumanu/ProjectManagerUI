import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterdata'
})
export class FilterdataPipe implements PipeTransform {

   transform(items: any[], field:any, value: any): any[] {

    if(!items) return [];
    if(!value) return items;
    let filterdata=[];
  if(field == "project")
  {
    return items.filter( str => {
      return str[field].projectName.toLowerCase().includes(value.toLowerCase());
    });
  }
  else{
    return items.filter( str => {
          return str[field].toLowerCase().includes(value.toLowerCase());
        });
      }
   }
}
