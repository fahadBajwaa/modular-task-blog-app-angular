import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../../../core/posts.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent {
  title: string = '';
  author: string = '';
  summary: string = '';

  constructor(
    private _postsService: PostsService,
    private _router: Router
  ) {}
  onSubmit() {
    if (!this.title.trim() || !this.author.trim() || !this.summary.trim()) {
      return;
    }
    this._postsService.addPost({
      title: this.title.trim(),
      author: this.author.trim(),
      summary: this.summary.trim()
    });
    // Navigate back to posts list (or to detail: `/posts/${newId}`)
    this._router.navigate(['/posts']);
  }
}
