import { Injectable, OnDestroy } from '@angular/core';
import { User, UserFromDatabaseComplete } from './types/user';
import { retry } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService implements OnDestroy{
  usersAll: UserFromDatabaseComplete[] = [];

  constructor(private http: HttpClient) { }

  ngOnDestroy(): void {
    //clear terminal, detach from events
  }

  getUsers(){
    return fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json());
  }

  getUsersFromHttp(){
    return this.http.get<UserFromDatabaseComplete[]>('https://jsonplaceholder.typicode.com/users');
  }
}
