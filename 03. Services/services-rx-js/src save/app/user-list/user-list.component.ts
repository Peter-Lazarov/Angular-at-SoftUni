import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, SimpleChange } from '@angular/core';
import { User } from '../types/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent {
  @Input('users') userListData: User[] = [];

  // constructor(private cd: ChangeDetectorRef) {
  //   setInterval(()=> {
  //     this.cd.detectChanges();
  //     console.log('detectChanges()');
  //   }, 3000);
  // }

  //Refresh button part
  constructor(private cd: ChangeDetectorRef) {

  }

  // ngOnChanges(changes: SimpleChange): void{
  //   console.log('Simple change');
  // }

  refresh(){
    this.cd.detectChanges();
  }
  
}
