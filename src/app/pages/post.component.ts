import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../models/post.model';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-post',
  template: `
    <div *ngIf="post" class="container text-center">
      <h1>{{post.title}}</h1>
      <p>{{post.content}}</p>
      
    </div>
  `,
  styles: [
  ]
})
export class PostComponent implements OnInit {
  post: any = [];

  constructor(private blogService: BlogService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadPost()
  }

  loadPost() {
    this.route.paramMap.subscribe(
      params => {
        const id = params.get('id');

        if (id) {
          this.blogService.getSinglePost(id).subscribe(
            response => {
              this.post = response;
            }
          )
        }
      }
    )
  }

}
