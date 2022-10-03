import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-admin',
  template: `
  <div class="container">
    <table class="table table-responsive">
      <thead>
        <tr>
          <th scope="col">Post</th>
          <th scope="col">Last Updated</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let post of posts">
          <td>{{post.title}}</td>
          <td>{{post.updatedDate}}</td>
          <td>
            <button class="btn btn-info" style="margin-right: 10px;">Edit</button>
            <button class="btn btn-danger">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  `,
  styles: [
  ]
})
export class AdminComponent implements OnInit {
  posts: any = [];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.loadAllPosts();
  }

  loadAllPosts() {
    this.blogService.getAllPosts().subscribe(response => {
      this.posts = response
    })
  }

}
