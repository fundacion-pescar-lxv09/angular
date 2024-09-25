import { Component, Input } from '@angular/core';
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

  isActive = false;
  links:Link[] = [
    { link: "/home", text: "Inicio"},
    { link: "/login", text: "Iniciar Sesion"},
    { link: "/signin", text: "Registrarse"},
    { link: "/products", text: "Productos"},
    { link: "/chart", text: "Carrito"},
    { link: "/contact", text: "Contacto"},
  ]
}
