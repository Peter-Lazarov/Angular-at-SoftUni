import { Injectable } from '@angular/core';
import { UserForAuthentication } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //user = {} as UserForAuthentication;
  user: UserForAuthentication | undefined;
  userKey = '[user]';

  get isLogged(): boolean{
    return !!this.user;
  }

  constructor() {
    try {
      const localStorageUser = localStorage.getItem(this.userKey) || '';
      this.user = JSON.parse(localStorageUser);
    } catch (error) {
      this.user = undefined;
    }
  }

  login(){
    this.user = {
      firstName: 'Pesho',
      email: 'pesho@abv.bg',
      phoneNumber: '123456789',
      password: '123456'
    }
    localStorage.setItem(this.userKey, JSON.stringify(this.user));
  }

  logout(){
    this.user = undefined;
    localStorage.removeItem(this.userKey);
  }
}
