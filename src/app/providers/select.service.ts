import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserData } from './user.interface';
import { UUID } from './profile.interface';

@Injectable({
  providedIn: 'root'
})
export class SelectService {
  private selectSubject = new BehaviorSubject<UserData[]>([]);
  selectedUsers$ = this.selectSubject.asObservable();
  addUser(user:UserData) {
    const current = this.selectSubject.value;
    if (!current.some((exists:UserData) => exists?.login?.uuid === user?.login?.uuid)) 
    this.selectSubject.next([...current, user])
  }
  removeUser(id: UUID) {
    const current = this.selectSubject.value.filter((c:UserData) => c?.login?.uuid !== id);
    this.selectSubject.next(current);
  }
  getUsers() {
    return this.selectSubject.value;
  }
}
