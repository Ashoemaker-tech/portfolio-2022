import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar.component';
import { FooterComponent } from './layout/footer.component';
import { HeroComponent } from './components/hero.component';
import { HomeComponent } from './pages/home.component';
import { ResumeComponent } from './pages/resume.component';
import { ShowcaseComponent } from './components/showcase.component';
import { ContactComponent } from './components/contact.component';
import { PostCardComponent } from './components/post-card.component';
import { PostComponent } from './pages/post.component';


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
    PostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
