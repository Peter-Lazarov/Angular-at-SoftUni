import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { User } from './types/user';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'services-rx-js';
  // usersAll: User[] = [
  //   { name: 'Pesho', age: 10 },
  //   { name: 'Maria', age: 20 },
  //   { name: 'Ivan', age: 30 },
  //   { name: 'Kalin', age: 40 },
  // ]

  // constructor() {
  //   setTimeout(() => {
  //     this.title = 'app.component Changed from Angular!';
  //   }, 2000);
  // }

  // //this is used when zone noop is set
  // constructor(private cd: ChangeDetectorRef) {
  //   setTimeout(()=> {
  //     this.title = 'Change from detector';
  //     this.cd.detectChanges();
  //   }, 3000);
  // }

  // addUser(inputName: HTMLInputElement, inputAge: HTMLInputElement){
  //   const currentUser: User ={
  //     name: inputName.value,
  //     age: Number(inputAge.value)
  //   };

  //   this.usersAll.push(currentUser); //this will not change component if changeDetection: ChangeDetectionStrategy.OnPush
  //   //this.usersAll = [...this.usersAll, currentUser]; //this will update component even with changeDetection: ChangeDetectionStrategy.OnPush is set
  //   console.log(this.usersAll);

  //   inputName.value = '';
  //   inputAge.value = '';
  // }

  constructor(public userServiceInstance: UserService) {

  }

  setUser(inputName: HTMLInputElement, inputAge: HTMLInputElement) {
    this.userServiceInstance.addUser(inputName, inputAge);
  }
  
}
