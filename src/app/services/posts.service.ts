import { Injectable } from '@angular/core';

type Post = { id: number; title: string; body: string };
@Injectable({
  providedIn: 'root',
})
export class PostsService {
  posts: Post[] = [{ title: 'Vincis', id: 1, body: 'vinicius junior' }];
  constructor() {}
}
