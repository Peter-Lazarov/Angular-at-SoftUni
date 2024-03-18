import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Post } from '../../types/posts';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit{
  posts: Post[] = [];

  constructor(private api: ApiService){

  }

  ngOnInit(): void {
    this.api.getPosts().subscribe((posts) => {
      //console.log(posts);
      this.posts = posts;
    });
  }
}
