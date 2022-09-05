import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostRequest } from 'src/app/models/postRequest.model';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-admin-view-posts',
  template: `
    <div class="container " *ngIf="post"> 
    <h1 class="my-5">Post Details</h1>
    <form #form="ngForm" (ngSubmit)="onSubmit()">
        <div class="mb-3">
            <label for="" class="form-label">Id</label>
            <input type="text" class="form-control" name="id" [(ngModel)]="post.id" readonly>
        </div>

        <div class="mb-3">
            <label for="" class="form-label">Title</label>
            <input type="text" class="form-control" name="title" [(ngModel)]="post.title">
        </div>

        <div class="mb-3">
            <label for="" class="form-label">Author</label>
            <input type="text" class="form-control" name="author" [(ngModel)]="post.author">
        </div>

        <div class="mb-3">
            <label for="" class="form-label">Excerpt</label>
            <input type="text" class="form-control" name="excerpt" [(ngModel)]="post.excerpt" >
        </div>
        
        <div class="mb-3">
            <label for="" class="form-label">Content</label>
            <textarea type="text" class="form-control" name="content" [(ngModel)]="post.content"></textarea>
        </div>


        <div class="mb-3">
            <label for="" class="form-label">Featured Image</label>
            <input type="text" class="form-control" name="featuredimage" [(ngModel)]="post.featuredImageUrl">
        </div>

        <div class="mb-3">
            <label for="" class="form-label">Url</label>
            <input type="text" class="form-control" name="urlhandle" [(ngModel)]="post.urlHandle">
        </div>

        <div class="mb-3">
            <label for="" class="form-label">Published Date</label>
            <input type="text" class="form-control" name="publisheddate" [(ngModel)]="post.publishDate" >
        </div>

        <div class="mb-3">
            <label for="" class="form-label">Updated Date</label>
            <input type="text" class="form-control" name="updateddate" [(ngModel)]="post.updatedDate" >
        </div>

        <div class="form-check mb-3">
            <label for="" class="form-check-label">Visibility</label>
            <input type="checkbox" class="form-check-input" name="visable" [(ngModel)]="post.visable">
        </div>

        <div class="mb-3">
            <button class="btn btn-outline-success">Update</button>
           
        </div>
    </form>
</div>
  `,
  styles: [`
  input, textarea {
    background: #12181b;
    border-top: none;
    border-left: none;
    border-right: none;
    border-radius: 0;
    color: #fff !important;

  }
  input:focus, textarea:focus {
    background: #12181b;
    border-top: none;
    border-left: none;
    border-right: none;
    border-radius: 0;
    outline: none;

  }
  `
  ]
})
export class AdminViewPostsComponent implements OnInit {

  post: any = []

  constructor(private route: ActivatedRoute, private blogService: BlogService, private router: Router) { }

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

  onSubmit(): void {
    const updatePostRequest: PostRequest = {
      author: this.post?.author,
      title: this.post?.title,
      content: this.post?.content,
      excerpt: this.post?.excerpt,
      urlHandle: this.post?.urlHandle,
      visable: this.post?.visable,
      publishDate: this.post?.publishDate,
      updatedDate: this.post?.updatedDate,
      featuredImageUrl: this.post?.featuredImageUrl,
    }
    this.blogService.updatePost(this.post?.id, updatePostRequest).subscribe( response => {
      this.blogService.toggleText = 'Post Updated'
      this.router.navigate(['/admin'])
    })
  }
  

}
