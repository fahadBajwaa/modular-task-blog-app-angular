import {
  Component,
  OnInit,
  AfterViewInit,
  ChangeDetectionStrategy
} from '@angular/core';
import { PostsService } from '../../../core/posts.service';

import { Signal } from '@angular/core';
import { Post } from '../../../core/models/post.model';
import { RoutePaths } from '../../../core/route-paths.enum';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsListComponent implements OnInit, AfterViewInit {
  public RP = RoutePaths;
  posts: Signal<Post[]> = this._postsService.posts;
  totalPosts = this._postsService.totalPosts;
  filterTerm: string = '';

  constructor(private _postsService: PostsService) { }

  ngOnInit(): void {
    console.log('PostsListComponent initialized, total posts:', this.totalPosts());
  }
  ngAfterViewInit(): void {
    console.log('PostsListComponent view initialized');
  }
  toggleFavorite(id: number) {
    this._postsService.toggleFavorite(id);
  }
}
