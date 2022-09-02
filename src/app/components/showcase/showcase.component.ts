import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcase',
  template: `
    <div class="container col-xxl-8 px-4 py-5">
      <h3 class="my-5">Recent <span class="grad-text">Projects</span></h3>
      <div class="card py-3 my-5">
        <div class="card-body d-flex align-items-center">
          <div>
            <a class="text-light" href="#"><i class="fa-solid fa-desktop temp-icon"></i></a>
          </div>
          <div>
            <h5><a class="text-decoration-none h5 text-light" 
            [class.grad-text]="mouseovered" 
            (mouseover)="mouseovered=true" 
            (mouseout)="mouseovered=false" href="#">Project One</a> 
              <span class="badge bg-danger mx-1">Angular</span>
              <span class="badge bg-primary mx-2">.NET Core</span>
              <span class="badge bg-success mx-1">Blog</span>
            </h5>
            <p class="card-text">Description about the project</p>
          </div>
        </div>
      </div>
      <div class="d-flex mt-5 pt-5 align-items-center justify-content-between">
        <h3 class="text-light">Recent <span class="grad-text">Posts</span></h3>
        <a class="text-light text-decoration-none" routerLink="/blog">View All Posts <i class="fa-solid fa-arrow-right-long"></i></a>
      </div>
      <app-posts></app-posts>
      

    </div>
  `,
  styles: [
    `
    a {
      margin-right: 5px;
    }
    

    .temp-icon {
      font-size: 50px;
      margin-right: 25px;
    }
    `
  ]
})
export class ShowcaseComponent implements OnInit {
  mouseovered: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
