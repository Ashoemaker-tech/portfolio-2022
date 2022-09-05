import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-post',
  template: `
  <header class="hero overlay" style="background-image: url('{{ post.featuredImageUrl }}');">
    <div class="container position-relative px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <h1>{{ post.title }}</h1>
          <h2 class="subheading"> {{ post.excerpt }}</h2>
          <span class="meta"> Posted by: {{ post.author }} on {{ post.publishDate }}</span> 
        </div>
      </div>
    </div>

  </header>

  <article class="mb-4">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <p>{{ post.content }}</p>
                    </div>
                </div>
            </div>
        </article>
  `,
  styles: [
    `
    .hero {
      height: 50vh;
      width: 100vw;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
    .overlay {
      background-color: #000;
      height: 50vh;
      width: 100vw;
      opactity: 0.5;
      z-index: 100;
    }
    `
  ]
})
export class BlogPostComponent implements OnInit {
  post: any = []

  constructor(private blogService: BlogService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( params => {
      const id = params.get('id');

      if (id) {
        this.blogService.getPostById(id).subscribe( response => {
          this.post = response
        })
      }
    })
  }

}
