import { Pipe, PipeTransform } from '@angular/core';
import { CarDetail } from '../models/carDetail';

@Pipe({
  name: 'filterCarPipe'
})
export class FilterCarPipePipe implements PipeTransform {

  transform(value: CarDetail[],filterText:string): CarDetail[] {
    filterText=filterText?filterText.toLocaleUpperCase():""
    return filterText?value.filter((c:CarDetail)=>c.carName.toLocaleUpperCase().indexOf(filterText)!=-1):value;
  }

}
