import { NgModule, Optional, SkipSelf } from '@angular/core';
import { AuthGuard } from './auth.guard';
import { PostsService } from './posts.service';

@NgModule({
  providers: [PostsService, AuthGuard]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded.');
    }
  }
}
