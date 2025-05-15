import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  postId!: number;
  comments: string[] = [];
  newComment: string = '';

  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void {
    this.postId = Number(this._route.parent?.snapshot.paramMap.get('id'));
    // mock comments
    this.comments = ['Great post!', 'Very informative.', 'Thanks for sharing.'];
  }
  addComment() {
    const trimmed = this.newComment.trim();
    if (trimmed) {
      this.comments.push(trimmed);
      this.newComment = '';
    }
  }
}
