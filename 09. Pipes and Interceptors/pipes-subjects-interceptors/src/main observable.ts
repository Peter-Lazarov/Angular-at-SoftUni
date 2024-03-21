import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { Observable, map } from 'rxjs';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


//Refresher
const refresherPromise = new Promise((resolve, reject) => {
  resolve(100);
})

refresherPromise.then(console.log);

const observable$ = new Observable<number>((currentObserver) => {
  currentObserver.next(101);
  currentObserver.next(102);
    //currentObserver.complete();
  currentObserver.next(103);

  currentObserver.error(new Error('Something went wrong!'));

  return () =>{
    //cleanup

  }
});

//observable$.subscribe(console.log);

// //with error
// observable$.subscribe({
//   next: console.log,
//   error: console.error
// });

//observable$.pipe(map((n) => n + 5)).subscribe(console.log);
observable$.pipe(map((n) => n + 5)).subscribe({
  next: console.log,
  error: console.error,
  complete: () => console.log('Complete') //message to print
});

