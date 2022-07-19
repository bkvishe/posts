import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  listOfPosts: Post[] = [
    new Post(
      'Title',
      'Description',
      'https://previews.123rf.com/images/arcady31/arcady311108/arcady31110800017/10101139-sample-stamp.jpg',
      'Bharat',
      new Date()
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
