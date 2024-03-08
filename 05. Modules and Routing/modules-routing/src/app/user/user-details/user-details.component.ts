import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  currentUser = {} as User;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(v => {
      console.log(v['id']);
      this.userService.getSingleUser(v['id']).subscribe(user => {
        console.log(user);
        this.currentUser = user;
      })
    });
  }
}
