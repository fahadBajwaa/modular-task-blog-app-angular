import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutePaths } from './core/route-paths.enum';

export const routes: Routes = [
  { path: '', redirectTo: RoutePaths.HOME, pathMatch: 'full' },
  {
    path: RoutePaths.HOME,
    loadChildren: () =>
      import('./features/home/home.module').then(m => m.HomeModule)
  },
  {
    path: RoutePaths.POSTS,
    loadChildren: () =>
      import('./features/posts/posts.module').then(m => m.PostsModule)
  },
  { path: '**', redirectTo: RoutePaths.HOME }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



