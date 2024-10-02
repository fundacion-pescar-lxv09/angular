import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAlert]',
  standalone: true
})
export class AlertDirective {
  appAlert = false;
  constructor(el: ElementRef) { }
  alertColor(el:ElementRef):void {
    el.nativeElement.style.color = this.appAlert ? "#824" : "#eee"
  }
  alertClass(el:ElementRef):void {
    el.nativeElement.classList.toggle('alert')
  }
}
