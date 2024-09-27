import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonPipe, UpperCasePipe } from '@angular/common';

interface User{
  username: string,
  password: string
}
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ FormsModule, JsonPipe, UpperCasePipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @Output() onlogin = new EventEmitter<User>()
  text = "iniciar sesion"
  show = false;
  login = {
    username: 'c215714n',
    password: ''
  }
  alert = {
    code: 0,
    title: "Inicio de Session",
    message: "Estamos verificando los datos, podras acceder al sition en unos segundos... Muchas Gracias por Ingresar"
  }

  userLogin(){
    this.onlogin.emit(this.login)
    this.show = true;
  }
  closeAlert(){
    this.show = false;
  }
}
