import { JsonPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ JsonPipe, ReactiveFormsModule ],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  signInForm:FormGroup;
  constructor(){
    this.signInForm = new FormGroup({
      user: new FormControl('user', [
        Validators.required,
        Validators.pattern(/^\S{4,20}$/),
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
      email: new FormControl('email', [
        Validators.required,
        Validators.pattern(/^[^@]\w+@\w+(.\w{2,}){1,4}$/),
        Validators.minLength(8),
      ]),
      password: new FormControl('pass', [
        Validators.required,
        Validators.pattern(/^([?=A-Z][?=a-z][?=0-9][?=#$!?-_]){8,50}$/),
        Validators.minLength(6),
        Validators.maxLength(50),
      ]),
      birthDate: new FormControl('birthdate', [
        Validators.required,
        Validators.pattern(/\d{2,4}([\/\-]\d{1,2}){2}/),
      ]),
      address:new FormControl('', [
        Validators.minLength(4),
      ]),
      city:new FormControl('', [
        Validators.pattern(/[A-Z a-z 0-9]{4,50}/),
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
      phone:new FormControl('', [
        Validators.pattern(/^\d{6,20}|(\(\d{2,6}\)([ -]{0,1}\d{2,4}){2,6})$/),
        Validators.minLength(6),
        Validators.maxLength(24),
      ]),
      website:new FormControl('', [
        Validators.pattern(/^http[s]*:\/\/\S+(\.\w+)+$/),
        Validators.minLength(12),
      ]),
      about: new FormControl('',[
        Validators.minLength(30),
        Validators.maxLength(3000),
      ])
    })
  }
  @Input() text:string = "Registrarse"
  onSubmit (){
    console.log(this.signInForm)
  }
}
