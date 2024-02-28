import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UserFromDatabaseComplete } from './types/user';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'services-rx-js';
  usersInApp: UserFromDatabaseComplete[] = [];

  constructor(private userService: UserService) {
    //this.usersInApp = this.userService.usersAll;
  }

  ngOnInit(): void {
    //Test with fetch
    // this.userService.getUsers().then((users) => {
    //   console.log('users data ', users);
    //   this.usersInApp = users;
    // })
    
    //Test with HTTP
    this.userService.getUsersFromHttp().subscribe((users) => {
      console.log('users data ', users);
      this.usersInApp = users;
    });
  }

}
