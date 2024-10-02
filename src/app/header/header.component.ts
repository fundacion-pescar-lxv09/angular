import { LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component, Input, } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [
    LowerCasePipe, 
    UpperCasePipe,
  ],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  @Input() title?:string
  @Input() subtitle?:string
}