import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { HomeComponent } from './pages/home/home.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { ShowcaseComponent } from './components/showcase/showcase.component';
import { PostsComponent } from './components/posts/posts.component';
import { ContactComponent } from './components/contact/contact.component';
import { AdminPostsComponent } from './pages/admin/admin-posts/admin-posts.component';
import { AdminAddPostsComponent } from './pages/admin/admin-add-posts/admin-add-posts.component';
import { AdminViewPostsComponent } from './pages/admin/admin-view-posts/admin-view-posts.component';
import { BlogPostComponent } from './pages/blog/blog-post/blog-post.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    HomeComponent,
    ResumeComponent,
    ShowcaseComponent,
    PostsComponent,
    ContactComponent,
    AdminPostsComponent,
    AdminAddPostsComponent,
    AdminViewPostsComponent,
    BlogPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
