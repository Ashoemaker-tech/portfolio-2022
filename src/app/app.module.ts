import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { NavbarComponent } from './layout/navbar.component';
import { FooterComponent } from './layout/footer.component';
import { HeroComponent } from './components/hero.component';
import { HomeComponent } from './pages/home.component';
import { ResumeComponent } from './pages/resume.component';
import { ShowcaseComponent } from './components/showcase.component';
import { ContactComponent } from './components/contact.component';
import { PostCardComponent } from './components/post-card.component';
import { PostsComponent } from './components/posts.component';
=======
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { HomeComponent } from './pages/home/home.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { ShowcaseComponent } from './components/showcase/showcase.component';
import { ContactComponent } from './components/contact/contact.component';
import { SecurityContext } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { PostCardComponent } from './components/post-card/post-card.component';
import { PostsComponent } from './components/posts/posts.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
>>>>>>> ca9e4f28e585ab73f216f031f7299c91c64d9fd5


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    HomeComponent,
    ResumeComponent,
    ShowcaseComponent,
    ContactComponent,
    PostCardComponent,
    PostsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
<<<<<<< HEAD
=======
    MarkdownModule.forRoot({ loader: HttpClient, sanitize: SecurityContext.NONE }),
    ScullyLibModule
>>>>>>> ca9e4f28e585ab73f216f031f7299c91c64d9fd5
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
