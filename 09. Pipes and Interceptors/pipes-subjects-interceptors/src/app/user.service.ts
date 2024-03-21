import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject$$ = new BehaviorSubject<Object | null>(null);
  public userObservable$ = this.userSubject$$.asObservable();

  constructor(private http: HttpClient) { }

  loadUsers(){
    this.userSubject$$.next(null);

    return this.http.get('/api/users').subscribe((users) => {
      this.userSubject$$.next(users);
    });
  }
}
