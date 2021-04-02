import { Pipe, PipeTransform } from '@angular/core';
import { Brand } from '../models/brand';

@Pipe({
  name: 'filterBrandPipe'
})
export class FilterBrandPipePipe implements PipeTransform {

  transform(value: Brand[], filtertText:string): Brand[] {
    filtertText=filtertText? filtertText.toLocaleUpperCase():""
    return filtertText?value.filter((b:Brand)=>b.brandName.toLocaleUpperCase().indexOf(filtertText)!=-1):value
  }

}
