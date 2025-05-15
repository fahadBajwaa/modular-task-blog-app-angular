import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../../../core/models/post.model';

@Component({
  selector: 'app-post-rating',
  templateUrl: './post-rating.component.html'
})
export class PostRatingComponent {
  @Input() post!: Post;
  @Output() favoriteToggled = new EventEmitter<number>();

  toggle() {
    this.favoriteToggled.emit(this.post.id);
  }
}
