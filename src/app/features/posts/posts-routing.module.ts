import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsListComponent } from './posts-list/posts-list.component';
import { NewPostComponent } from './new-post/new-post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { CommentsComponent } from './comments/comments.component';
import { AuthGuard } from '../../core/auth.guard';
import { RoutePaths } from '../../core/route-paths.enum';

const routes: Routes = [
  { path: RoutePaths.POSTS_NEW, component: NewPostComponent },
  { path: '', component: PostsListComponent },
  {
    path: RoutePaths.POSTS_ID,
    component: PostDetailComponent,
    children: [
      {
        path: RoutePaths.COMMENTS,
        component: CommentsComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
