import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeComponent } from './pages/resume/resume.component';
import { HomeComponent } from './pages/home/home.component';
import { PostsComponent } from './components/posts/posts.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'resume', component: ResumeComponent },
  {path: 'posts/post/:article', component: PostsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
