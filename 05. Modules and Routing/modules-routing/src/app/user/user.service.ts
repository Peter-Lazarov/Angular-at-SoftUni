import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API = 'http://jsonplaceholder.typicode.com/users';

  isLoading = false;

  constructor(private http: HttpClient) {

  }

  getUsers(){
    return this.http.get<User[]>(this.API);
  }

  getSingleUser(id:string){
    return this.http.get<User>(`${this.API}/${id}`);
  }
}
