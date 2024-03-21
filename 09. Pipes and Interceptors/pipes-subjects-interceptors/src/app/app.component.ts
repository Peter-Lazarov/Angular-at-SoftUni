import { Component, OnInit } from '@angular/core';
import { interval, map } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'pipes-subjects-interceptors';

  user = { name: 'Pesho', age: 23, list: [1, 2, 3, 4, 5, 6, 7] };

  
  sum(accumulator: number, current: number): number {
    return accumulator + current;
  }
  
  addProperty() {
    (this.user as any).test = 'test123';
  }
  
  promise = new Promise((resolve) =>{
    setTimeout(() => {
      resolve('resolved')
    }, 3000)
  })
  
  //Clock
  time$ = interval(1000).pipe(map(() => new Date()));
  
  constructor(private userservice: UserService){
    
  }
  
  ngOnInit(): void {
    // this.userservice.loadUsers().subscribe({
      //   next: (data) => console.log(data)
      // })
  }
  
  users$ = this.userservice.userObservable$;
    
  reloadUsers(){
    this.userservice.loadUsers()
  }
}
