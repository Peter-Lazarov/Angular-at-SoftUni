import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { User } from '../types/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  //Test 1
  //Test 2
  //Test 3
  changeDetection: ChangeDetectionStrategy.OnPush //this turn off detection on every change
})
export class UserListComponent {
  @Input('users') userListData: User[] = [];

  // //Test 1
  // constructor(private cd: ChangeDetectorRef) {
  //   setInterval(()=> {
  //     this.cd.detectChanges();
  //     console.log('cd.detectChanges() in UserListComponent check on 3000');
  //   }, 3000);
  // }

  //Test4
  //Refresh button part
  constructor(private cd: ChangeDetectorRef) {

  }

  refresh() {
    this.cd.detectChanges();
    console.log('cd.detectChanges() in UserListComponent Refresh button');
  }

}
