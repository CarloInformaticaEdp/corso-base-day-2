import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { PostViewComponent } from './post/post-view.component';

const ROUTES: Routes = [
  {
    path: 'post-list',
    component: PostComponent,
    data: { showHeader: false, area: 'post' },
  },
  {
    path: 'post-view/:id',
    component: PostViewComponent,
    data: { showHeader: false, area: 'post' },
  },
  {
    path: 'my-post/',
    component: PostComponent,
    data: { onlyMyPost: true },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
