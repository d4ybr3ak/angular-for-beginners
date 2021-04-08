import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface } from '../types/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>( "http://localhost:3000/fetchusers");
  }

  removeUser(id: number) : Observable<{}> {
    return this.http.delete("http://localhost:3000/fetchusers/$(id)");
  }

  randomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  addUser(name: string): Observable<UserInterface> {
    const user = {
      name,
      age: this.randomNumber(5, 70)
    }
    return this.http.post<UserInterface>("http://localhost:3000/fetchusers", user);
  }

}
