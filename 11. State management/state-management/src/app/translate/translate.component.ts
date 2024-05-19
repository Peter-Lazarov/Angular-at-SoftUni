import { Component } from '@angular/core';
import { TranslateState } from './translate.type';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css']
})
export class TranslateComponent {
  messageObservable$: Observable<string>;

  constructor(private store: Store<TranslateState>){
    //console.log(this.strore.select('message'));
    this.messageObservable$ = this.store.select('message');
  }

  bgMessage() {
    this.store.dispatch({type: 'BG'});
  }
  enMessage() {
    this.store.dispatch({type: 'EN'});
  }
  itMessage() {
    this.store.dispatch({type: 'IT'});
  }
}
