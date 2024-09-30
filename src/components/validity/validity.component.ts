import { Component, Input } from '@angular/core';

interface Length{
  requiredLength: number,
  actualLength: number,
}
interface FormField {
  required?: boolean,
  minlength?: Length,
  maxlength?: Length,
  pattern?: boolean | RegExp,
}

@Component({
  selector: 'app-validity',
  standalone: true,
  imports: [ ],
  templateUrl: './validity.component.html',
  styleUrl: './validity.component.css'
})
export class ValidityComponent {
  @Input() touched:boolean = false;
  @Input() field:FormField = {}
  @Input() example:string = ""
}
