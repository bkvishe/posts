import { Injectable } from '@angular/core';
import { Post } from './post.model';

@Injectable({ providedIn: 'root' })
export class PostService {
    listOfPosts: Post[] = [
        new Post(
          'Title',
          'Description',
          'https://previews.123rf.com/images/arcady31/arcady311108/arcady31110800017/10101139-sample-stamp.jpg',
          'Bharat',
          new Date()
        ),
      ];
}
