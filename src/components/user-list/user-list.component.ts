import { Component } from '@angular/core';
import { UsersService } from '../../providers/users.service';
import { JsonPipe } from '@angular/common';
import { User } from '../../models/User';

@Component({
  selector: 'app-userlist',
  standalone: true,
  imports: [
    JsonPipe,
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  users:any[] = []
  constructor(private srv:UsersService){}
  ngOnInit(){
    this.getUser()
  }
  getUser(){
    this.srv.getUsers()
    .subscribe((data) => {
      this.users.push(data)
      console.log(data)
    })
  }
}