import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-posts',
  template: `
    <div class=" my-3 album row row-cols-1 row-cols-md-3" *ngFor="let post of posts">
        <div class="col">
          <a [routerLink]="['/post', post.id]">
          <div class="card text-bg-dark mt-5">
            <img src="{{ post.featuredImageUrl }}" class="card-img" alt="{{ post.title }}">
            <div class="card-img-overlay">
              <h5 class="card-title">{{ post.title }}</h5>
              <p class="card-text">{{ post.excerpt }}</p>
              <p class="card-text">{{ post.updatedDate }}</p>
            </div>
          </div>
        </a>
        </div>

  `,
  styles: [
  ]
})
export class PostsComponent implements OnInit {
  posts: Post[] = []
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getAllPosts().subscribe( response => {
      this.posts = response
    })
  }

}
