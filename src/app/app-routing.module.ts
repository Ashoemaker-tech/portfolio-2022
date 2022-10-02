import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeComponent } from './pages/resume.component';
import { HomeComponent } from './pages/home.component';
import { PostComponent } from './pages/post.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'resume', component: ResumeComponent },
  {path: 'post/:id', component: PostComponent},
  {path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
