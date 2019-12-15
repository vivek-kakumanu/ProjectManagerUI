import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpriority'
})
export class FilterpriorityPipe implements PipeTransform {

   transform(items: any[], field:string, fromPriority: any,toPriority:any): any[] {
     
    if(!items) return [];
    if(!fromPriority || !toPriority) return items;

    let filterdata=[];
     items.filter( str => {
           if(fromPriority<=str[field] && str[field]<=toPriority){
            filterdata.push(str);
           }
        });
        return filterdata;
   }

}
