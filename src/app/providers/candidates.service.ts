import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  private candidatesURL = 'https://randomuser.me/api/'
  constructor(private http:HttpClient) { }
  postCandidate(data:any){  // CREATE
    return this.http.post(this.candidatesURL, data)
  }
  getCandidates(){  // READ
    return this.http.get(this.candidatesURL+"?results=50")
  }
  putCandidate(id:number, data:any){  // UPDATE
    return this.http.put(this.candidatesURL+id, data)
  }
  deleteCandidate(id:number){ // DELETE
    return this.http.delete(this.candidatesURL+id)
  }
}