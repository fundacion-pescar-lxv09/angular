import { CommonModule } from '@angular/common';
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
  custom?: boolean
}

@Component({
  selector: 'app-validity',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './validity.component.html',
  styleUrl: './validity.component.css'
})
export class ValidityComponent {
  @Input() touched:boolean = false;
  @Input() field:FormField|null|undefined = {}
  @Input() custom:string=""
  @Input() example:string = ""
}
