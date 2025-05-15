import { Component, Input } from '@angular/core';
import { Post } from '../../core/models/post.model';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.scss']
})
export class PostPreviewComponent {
  @Input() post!: Post;
}
