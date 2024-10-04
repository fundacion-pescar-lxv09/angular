import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggle } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';

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
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  @Input() cand:any
  dataList = [
    { prop: "tel:+", key: "phone", text: "Telefono"},
    { prop: "tel:+", key: "cell",  text: "Celular"},
    { prop: "mailto:", key: "email", text: "Correo"},
  ]
}