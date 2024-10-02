import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Error } from '../../models/Error';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [ 
    RouterLink,
  ],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {
  @Input() error:Error = {
    code: 404,
    message: "Not Found"
  }
}