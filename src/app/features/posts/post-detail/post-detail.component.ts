import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  AfterViewInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../../core/posts.service';
import { Post } from '../../../core/models/post.model';
import { RoutePaths } from '../../../core/route-paths.enum';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html'
})
export class PostDetailComponent implements OnInit, OnChanges, AfterViewInit {
  post: Post | undefined;
  public RP = RoutePaths;
  
  constructor(
    private _route: ActivatedRoute,
    private _postsService: PostsService
  ) { }

  ngOnInit(): void {
    const id = Number(this._route.snapshot.paramMap.get('id'));
    this.post = this._postsService.getPostById(id);
    console.log('PostDetail ngOnInit, loaded post:', this.post);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('PostDetail ngOnChanges:', changes);
  }
  ngAfterViewInit(): void {
    console.log('PostDetail view initialized');
  }
}
