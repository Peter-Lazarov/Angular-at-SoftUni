import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-item/user-item.component';
import { Observable, filter, map, range, reduce, tap } from 'rxjs';

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

//Test 5
const promiseForExample = new Promise((resolve, reject) => {
  console.log('promise invoked after 3000 will receive resolve(111)');
  setTimeout(() => {
    resolve(111)
  }, 3000);
});

promiseForExample.then((data) => {
  console.log('promiseForExample.then resolve', data);
});

// //Test 6
// const observableExample = new Observable((observer) => {
//   observer.next(200);
//   observer.next(201);
//   observer.next(202);
//   observer.next(203);
// });

// observableExample.subscribe((data) => {
//   console.log('observable subscribe', data);
// });

// //Test 7
// const interval = (intervalValue: number) => {
//   const observableInInterval = new Observable<number>((observer) => {
//     let couter = 0;

//     const timer = setInterval(() => {
//       observer.next(couter++)
//     }, intervalValue);

//     //clear data on destroy
//     return () => {
//       clearInterval(timer);
//     }
//   });

//   return observableInInterval;
// };

// interval(2000).subscribe((data) => {
//   console.log('data from interval ', data);
// });

// //Test 8
// const obs = range(1, 10)
//   .pipe(
//     tap(i => console.log(`Hello: ${i}`))
//   );

// obs.subscribe(i => console.log(`first sub ${i}`));
// obs.subscribe(i => console.log(`second sub ${i}`));

//Test 9
// //The map operator
// const obs = range(1, 10).pipe(map(i => i ** 2));
// obs.subscribe(i => console.log(`first sub ${i}`));

// //The filter operator
// const obs2 = range(1, 10).pipe(filter(i => i % 2 === 0));
// obs2.subscribe(i => console.log(`second sub ${i}`));

// //The reduce operator
// const obs3 = range(1, 3).pipe(
//   reduce((prevVal, val) => prevVal + val, 0)
// )
// obs3.subscribe(i => console.log(`third sub ${i}`))




