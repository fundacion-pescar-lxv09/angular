import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    RouterLink,
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  links = [
    { icon: "📰", link: "about",     text: "acerca" },
    { icon: "⚙️", link: "config",    text: "ajustes" },
    { icon: "🏠", link: "home",      text: "inicio" },
    { icon: "✅", link: "selection", text: "seleccion" },
  ]
}