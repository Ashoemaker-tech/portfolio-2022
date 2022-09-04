import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/Post.model';
import { BlogService } from 'src/app/services/blog.service';


@Component({
  selector: 'app-admin-posts',
  template: `
    <div *ngIf="updateAlertToggle" class="alert alert-success d-flex justify-content-between" role="alert">
      <div>Post Updated!</div>
      <button type="button" class="btn-close" (click)="updateAlertToggle=false"></button>
    </div>

    <div *ngIf="addAlertToggle" class="alert alert-success d-flex justify-content-between" role="alert">
      <div>Post Added!</div>
      <button type="button" class="btn-close" (click)="addAlertToggle=false"></button>
    </div>

    <div *ngIf="deleteAlertToggle" class="alert alert-danger d-flex justify-content-between" role="alert">
      <div>Post Deleted!</div>  
      <button type="button" class="btn-close" (click)="deleteAlertToggle=false"></button>
    </div>

    <div class="container mt-3">
    <h1 class="my-5">Manage <span class="grad-text">Blog</span></h1>
    <table class="table text-light">
        <thead class="">
            <tr>
                <th><h2 class="mb-3">All Blog Posts</h2></th>
                <th class=""><a class="btn btn-outline-dark text-light mb-3" routerLink="/admin/posts/add">Add New Blog Post</a></th>
            </tr>
        </thead>
        <tbody>
            <tr *ngFor="let post of posts">
                <td class="w-75">{{ post.title }}</td>
                <td>
                    <a class="btn btn-outline-dark text-light" [routerLink]="['/admin/posts', post.id]">View</a>
                    <button class="btn btn-danger" style="Margin-left: 25px;" (click)="onDelete(post.id)">Delete</button>
                  </td>
            </tr>
        </tbody>
    </table>
</div>
  `,
  styles: [`
  `
  ]
})
export class AdminPostsComponent implements OnInit {

  posts: Post[] = []
  post: any = []
  updateAlertToggle: boolean = this.blogService.updateToggle;
  addAlertToggle: boolean = this.blogService.addToggle;
  deleteAlertToggle: boolean = false;

  constructor(private blogService: BlogService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.blogService.getAllPosts().subscribe( response => {
      this.posts = response;
    })
  }

  onDelete(id: string): void{
    this.blogService.deletePost(id).subscribe( response => {
      this.deleteAlertToggle = true
      this.ngOnInit();
    })
  }
}
