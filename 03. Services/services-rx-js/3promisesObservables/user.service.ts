import { Injectable, OnDestroy } from '@angular/core';
import { User } from './types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy{
  usersAll: User[] = [
    { name: 'Pesho', age: 10 },
    { name: 'Maria', age: 20 },
    { name: 'Ivan', age: 30 },
    { name: 'Kalin', age: 40 },
  ]

  constructor() { }

  ngOnDestroy(): void {
    //clear terminal, detach from events
  }

  addUser(inputName: HTMLInputElement, inputAge: HTMLInputElement){
    const currentUser: User ={
      name: inputName.value,
      age: Number(inputAge.value)
    };
    
    //Test 1
    //Test 3 there will be no change in browser becaues OnPush is on
    //this will not change component if changeDetection: ChangeDetectionStrategy.OnPush
    this.usersAll.push(currentUser); 
    
    //Test 2
    // //this will update component even with changeDetection: ChangeDetectionStrategy.OnPush is set
    //this.usersAll = [...this.usersAll, currentUser];
    console.log(this.usersAll);

    inputName.value = '';
    inputAge.value = '';
  }
}
