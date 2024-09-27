import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Link } from '../../models/Link';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [ RouterLink ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  @Input() appname?:string;
  @Output() useLink = new EventEmitter<string>();

  isActive = false;
  links:Link[] = [
    { link: "home", text: "Inicio", icon:"" },
    { link: "login", text: "Iniciar Sesion", icon:"" },
    { link: "signin", text: "Registrarse", icon:"" },
    { link: "products", text: "Productos", icon:"" },
    { link: "chart", text: "Carrito", icon:"" },
    { link: "contact", text: "Contacto", icon:"" },
  ]
  setLink (data:string) {
    this.useLink.emit(data)
  }
}
