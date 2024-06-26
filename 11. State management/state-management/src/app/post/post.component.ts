import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Post, PostState } from './post.type';
import { Observable } from 'rxjs';
import * as PostAction from './post.action'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  post$: Observable<Post>;
  textMessage: string = ''; //from form inpute

  constructor(private store: Store<PostState>){
    this.post$ = this.store.select('post');
  }

  upvote(){
    this.store.dispatch(new PostAction.Upvote())
  }

  downvote(){
    this.store.dispatch(new PostAction.Downvote())
  }

  reset(){
    this.store.dispatch(new PostAction.Reset())
  }

  edit(){
    this.store.dispatch(new PostAction.Edit(this.textMessage))
  }
}
