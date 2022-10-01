import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeComponent } from './pages/resume.component';
import { HomeComponent } from './pages/home.component';
import { PostsComponent } from './components/posts.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'resume', component: ResumeComponent },
<<<<<<< HEAD
  {path: '**', redirectTo: '/' },
=======
  { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
  {path: '**', redirectTo: '/' }
>>>>>>> ca9e4f28e585ab73f216f031f7299c91c64d9fd5
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
