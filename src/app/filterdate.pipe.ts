import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterdate'
})
export class FilterdatePipe implements PipeTransform {

   transform(items: any[], field1:string, field2:string, fromDate:any, toDate:any): any[] {
     
    if(!items) return [];
    if(!fromDate || !toDate) return items;

    let startDate= new Date(fromDate);
    let endDate= new Date(toDate);
    console.log(startDate);
    console.log(endDate);
    let filterdata=[];
     items.filter( str => {
           if(startDate>=new Date(str[field1]) && startDate<=new Date(str[field2]) && new Date(str[field2])<=endDate &&  new Date(str[field2])>=startDate){
            filterdata.push(str);
           }
        });
        return filterdata;
   }

}
