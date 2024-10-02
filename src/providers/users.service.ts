import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private url = "https://randomuser.me/api?results=10"
  constructor(private http:HttpClient) {}
  getUsers ():Observable<any> {
    return this.http.get(this.url)
  }
  postUser(data:User):Observable<any>{
    return this.http.post(this.url, data)
  }
}
