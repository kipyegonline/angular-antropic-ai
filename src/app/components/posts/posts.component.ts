import { Component } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent {
  welcome = "You're currently viewing posts";
  posts: any[] = [];
  constructor(postsService: PostsService) {
    this.posts = postsService.posts;
  }
}
