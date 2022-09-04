import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  template: `
    <div class=" my-3 album row row-cols-1 row-cols-md-3">
        <div class="col">
          <div class="card text-bg-dark mt-5">
            <img src="https://via.placeholder.com/300" class="card-img" alt="...">
            <div class="card-img-overlay">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text">Last updated 3 mins ago</p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card text-bg-dark mt-5">
            <img src="https://via.placeholder.com/300" class="card-img" alt="...">
            <div class="card-img-overlay" >
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text">Last updated 3 mins ago</p>
            </div>
          </div>
        </div>
        <div class="col">
            <div class="card text-bg-dark mt-5">
              <img src="https://via.placeholder.com/300" class="card-img" alt="...">
              <div class="card-img-overlay" >
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text">Last updated 3 mins ago</p>
              </div>
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
