import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appToUpper]'
})
export class ToUpperDirective {

  @Input() fontSize:Number=0
  constructor(private elementRef:ElementRef) {
    this.elementRef.nativeElement.style.fontStyle='italic'
    this.elementRef.nativeElement.style.fontStyle=this.fontSize
  }

}
