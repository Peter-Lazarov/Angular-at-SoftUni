import { Injectable, OnDestroy } from '@angular/core';
import { UserForAuthentication } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subscription, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy{
  private user$$ = new BehaviorSubject<UserForAuthentication | undefined>(undefined);
  private user$ = this.user$$.asObservable();

  //user = {} as UserForAuthentication;
  user: UserForAuthentication | undefined;
  userKey = '[user]';
  userSubscription: Subscription;


  get isLogged(): boolean {
    return !!this.user;
  }

  constructor(private http: HttpClient) {
    this.userSubscription = this.user$.subscribe((user) => {
      this.user = user;
    });
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  login(email: string, password: string) {

    return this.http.post<UserForAuthentication>('/api/login', { email, password })
      .pipe(tap(user => {
        this.user$$.next(user);
      }));
  }

  register(username: string, email: string, tel: string, password: string, rePassword: string) {
    return this.http.post<UserForAuthentication>('/api/register', { username, email, tel, password, rePassword })
      .pipe(tap(user => {
        this.user$$.next(user);
      }));;
  }

  logout() {
    return this.http.post('/api/logout', {}).pipe(tap(() => {
      this.user$$.next(undefined);
    }));
  }

  getProfile(){
    return this.http.get<UserForAuthentication>('/api/users/profile')
    .pipe(tap((user) => this.user$$.next(user)));
  }

  updateProfile(username: string, email: string, tel?:string){
    return this.http.put<UserForAuthentication>('/api/users/profile', {
      username, email, tel
    }).pipe(tap((user) => this.user$$.next(user)));
  }
}
