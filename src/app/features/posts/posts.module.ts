import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { PostsRoutingModule } from './posts-routing.module';

import { PostsListComponent } from './posts-list/posts-list.component';
import { NewPostComponent } from './new-post/new-post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { CommentsComponent } from './comments/comments.component';
import { PostRatingComponent } from './post-rating/post-rating.component';

@NgModule({
  declarations: [
    PostsListComponent,
    NewPostComponent,
    PostDetailComponent,
    CommentsComponent,
    PostRatingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }
