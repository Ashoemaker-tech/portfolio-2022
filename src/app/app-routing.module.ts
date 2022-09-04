import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAddPostsComponent } from './pages/admin/admin-add-posts/admin-add-posts.component';
import { AdminPostsComponent } from './pages/admin/admin-posts/admin-posts.component';
import { AdminViewPostsComponent } from './pages/admin/admin-view-posts/admin-view-posts.component';
import { BlogComponent } from './pages/blog/blog.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'blog', component: BlogComponent },
  {path: 'admin', component: AdminPostsComponent},
  {path: 'admin/posts/add', component: AdminAddPostsComponent},
  {path: 'admin/posts/:id', component: AdminViewPostsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
