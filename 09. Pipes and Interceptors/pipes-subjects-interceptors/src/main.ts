import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject, map } from 'rxjs';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

//Subjects

// const subject$$ = new Subject();

// // subject$$.subscribe(console.log);
// // subject$$.next(100);
// // subject$$.next(200);
// // subject$$.next(300);

// subject$$.subscribe((data) => console.log('subscribe 1 ' + data));
// subject$$.next(100);
// subject$$.next(200);
// subject$$.subscribe((data) => console.log('subscribe 2 ' + data));
// subject$$.subscribe((data) => console.log('subscribe 3 ' + data));
// subject$$.next(300);

//-------------------------------------------------------------------------
// //Behavior Subjects
// const behaviorSubject$$ = new BehaviorSubject(500);
// behaviorSubject$$.subscribe((data) => console.log('subscribe 4 ' + data));

// setTimeout(()=> {
//   behaviorSubject$$.next(600);
//   behaviorSubject$$.subscribe((data) => console.log('subscribe 5 ' + data));
// }, 2000);

// //-------------------------------------------------------------------------
// //Replay Subjects
// const replaySubject$$ = new ReplaySubject(3);

// //before next prints the all - (last buffers size (3) elements), we need only one because it prints on every next
// replaySubject$$.subscribe((data) => console.log('subscribe 6 ' + data));
// replaySubject$$.next(1000);
// replaySubject$$.next(2000);
// replaySubject$$.next(3000);
// replaySubject$$.next(4000);
// replaySubject$$.next(5000);

// console.log('-------------------');

// //after next print buffer size
// replaySubject$$.subscribe((data) => console.log('subscribe 7 ' + data));

//Async Subject
const asyncSubject$$ = new AsyncSubject();
asyncSubject$$.next(1);
asyncSubject$$.next(2);
asyncSubject$$.next(3);
asyncSubject$$.subscribe((data) => console.log(`Subscribe 1 ${data}`));
asyncSubject$$.next(5);
asyncSubject$$.subscribe((data) => console.log(`Subscribe 2 ${data}`));
asyncSubject$$.complete();
