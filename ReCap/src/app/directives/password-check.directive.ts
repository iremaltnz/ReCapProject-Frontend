import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[passwordCheck]'
})
export class PasswordCheckDirective {

  constructor(private eRef:ElementRef) { }

  @HostListener('keyup') onkeyup(){

   
    if( this.eRef.nativeElement.value.length<8){
       this.eRef.nativeElement.style.backgroundColor="red"
    }
    else{
      this.eRef.nativeElement.style.backgroundColor="green"
    }
  }
 

}
