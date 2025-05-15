import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { RouterModule }  from '@angular/router'; 

import { PostPreviewComponent }    from './post-preview/post-preview.component';
import { DarkModeToggleComponent } from './dark-mode-toggle/dark-mode-toggle.component';
import { FilterPipe }              from './filter.pipe';

@NgModule({
  declarations: [
    PostPreviewComponent,
    DarkModeToggleComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule   
  ],
  exports: [
    PostPreviewComponent,
    DarkModeToggleComponent,
    FilterPipe,
    CommonModule,
    FormsModule,
    RouterModule  
  ]
})
export class SharedModule {}
