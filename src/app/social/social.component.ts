import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Link } from '../../models/Link'

@Component({
  selector: 'app-social',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './social.component.html',
  styleUrl: './social.component.css'
})
export class SocialComponent {
  phone?: string = "54110303456"
  message?: string = ""
  links:Link[] = [
    { 
      text:"LinkedIn",
      link:"https://linkedin.com/in/profile",
    },
    { 
      text:"Whatsapp",
      link:`https://api.whatsapp.com/send?phone=${this.phone}&text=${this.message}`,
    },
    { 
      text:"GitHub",
      link:"https://github.com/fundacion-pescar-lxv09/angular",
    },
  ]
}
