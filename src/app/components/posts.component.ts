import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  template: `
  `,
  styles: [
  ]
})
export class PostsComponent implements OnInit {
  post: string = '';
  href: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
