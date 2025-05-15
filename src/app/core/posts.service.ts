import { Injectable, signal, computed, effect } from '@angular/core';
import { Post, POSTS } from './models/post.model';

@Injectable()
export class PostsService {
  private _postsSignal = signal<Post[]>([...POSTS]);

  posts = computed(() => this._postsSignal());
  totalPosts = computed(() => this._postsSignal().length);
  favoritesCount = computed(
    () => this._postsSignal().filter(p => p.favorite).length
  );
  toggleFavorite(id: number) {
    this._postsSignal.update(posts =>
      posts.map(p => p.id === id ? { ...p, favorite: !p.favorite } : p)
    );
  }
  addPost(data: { title: string; author: string; summary: string }) {
    const current = this._postsSignal();
    const nextId = current.length
      ? Math.max(...current.map(p => p.id)) + 1
      : 1;
    const newPost: Post = {
      id: nextId,
      title: data.title,
      author: data.author,
      summary: data.summary,
      favorite: false
    };
    this._postsSignal.update(posts => [...posts, newPost]);
  }
  getPostById(id: number): Post | undefined {
    return this._postsSignal().find(p => p.id === id);
  }
  loadMore(): void {
    this._postsSignal.update(posts => [...posts]);
  }
  constructor() {
    effect(() => {
      console.log('Favorites changed:', this.favoritesCount());
    });
  }
}
