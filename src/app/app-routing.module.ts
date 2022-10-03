import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeComponent } from './pages/resume.component';
import { HomeComponent } from './pages/home.component';
import { PostComponent } from './pages/post.component';
import { AdminComponent } from './pages/admin.component';
import { LoginComponent } from './pages/login.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'resume', component: ResumeComponent },
  {path: 'login', component: LoginComponent },
  {path: 'admin', component: AdminComponent },
  {path: 'post/:id', component: PostComponent},
  {path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
