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

  constructor(public userServiceInstance: UserService) {
    
  }
  
  setUser(inputName: HTMLInputElement, inputAge: HTMLInputElement) {
    this.userServiceInstance.addUser(inputName, inputAge);
  }
  
  //Test 5
  test5 = 'Test 5 - Promises look in the console';
  //Test 6
  test6 = 'Test 6 - observer.next and .subscribe';
  //Test 7
  test7 = 'Test 7 - observableInInterval and .subscribe thru 2000';

}
