import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  template: `
    <div class="album">
      <div class="card" style="width: 20rem;">
        <img src="https://via.placeholder.com/300" class="card-img-top"  alt="...">
        <div class="card-body text-center">
          <h5 class="card-title">Post One</h5>
          <p class="text-small">Jan. 1, 2022</p>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class PostsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
