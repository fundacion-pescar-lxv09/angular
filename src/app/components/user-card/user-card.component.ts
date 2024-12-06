import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggle } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { UserData } from '../../providers/user.interface';
import { SelectService } from '../../providers/select.service';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [
    RouterLink,
    MatListModule,
    MatCardModule,
    MatDivider,
    MatButtonModule,
    MatButtonToggle,
  ],
  providers: [SelectService],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  @Input() cand:UserData|any = {}
  chosen = false
  dataList = [
    { prop: "tel:+", key: "phone", text: "Telefono"},
    { prop: "tel:+", key: "cell",  text: "Celular"},
    { prop: "mailto:", key: "email", text: "Correo"},
  ]
  constructor(private select:SelectService){}
  selectUser(){
    this.chosen ?
    this.select.removeUser(this.cand.login.uuid):
    this.select.addUser(this.cand)
      
    this.chosen = !this.chosen

    this.select.getUsers()
  }
}