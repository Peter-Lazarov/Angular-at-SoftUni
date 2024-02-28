import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-item/user-item.component';
import { Observable } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

const promiseForExample = new Promise((resolve, reject) => {
  console.log('promise invoked');
  setTimeout(() => {
    resolve(111)
  }, 3000);
});

promiseForExample.then((data) => {
  console.log('promiseForExample.then', data);
});

const observableExample = new Observable((observer) => {
  observer.next(200);
  observer.next(201);
  observer.next(202);
  observer.next(203);
});

observableExample.subscribe((data) => {
  console.log('observable subscribe', data);
});

const interval = (intervalValue: number) => {
  const observableInInterval = new Observable<number>((observer) => {
    let couter = 0;

    const timer = setInterval(() => {
      observer.next(couter++)
    }, intervalValue);

    //clear data on destroy
    return () => {
      clearInterval(timer);
    }
  });

  return observableInInterval;
};

interval(2000).subscribe((data) => {
  console.log('data from interval ', data);

});

