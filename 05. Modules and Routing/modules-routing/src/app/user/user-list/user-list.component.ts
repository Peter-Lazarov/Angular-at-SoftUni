import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../../types/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  isLoading = false;
  usersAll: User[] = [];

  constructor(private userService: UserService) {

  }

  fetchUsers() {
    this.isLoading = true;

    this.userService.getUsers().subscribe((users) => {
      console.log(users);
      this.usersAll = users;
      this.isLoading = false;
    });
  }
}
