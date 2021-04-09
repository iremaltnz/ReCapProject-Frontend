import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-form-control',
  templateUrl: './input-form-control.component.html',
  styleUrls: ['./input-form-control.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputFormControlComponent),
      multi: true
    }
  ]
})
export class InputFormControlComponent implements ControlValueAccessor {

  public value:string;
  public changed:(value:string)=>void
  public touched :()=>void
  public isDisabled:boolean

  constructor() { }

  writeValue(value: string): void {
    this.value=value;
  }
  registerOnChange(fn: any): void {
  this.changed=fn;
  }
  registerOnTouched(fn: any): void {
    this.touched=fn;
  }

  onChange(event:Event):void{
    const value:string=(<HTMLInputElement>event.target).value
    this.changed(value)
  }

  setDisabledState(isDisabled:boolean):void{
    this.isDisabled=isDisabled;
  }

  ngOnInit(): void {
  }

}
