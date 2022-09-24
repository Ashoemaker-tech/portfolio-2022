import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  template: `
    <div class="container" markdown [src]="post"></div>
  `,
  styles: [
  ]
})
export class PostsComponent implements OnInit {
  post: string = '';
  href: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let articleName = this.route.snapshot.paramMap.get('article');
    this.href = window.location.href;
    this.post = '../../../assets/posts/' + articleName + '.md';
  }

}
