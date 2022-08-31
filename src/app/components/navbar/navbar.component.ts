import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <header class=" container d-flex flex-wrap justify-content-center py-3 mb-4">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none">
        <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
        <span class="fs-4 text-light"><i class="fa-solid fa-code"></i> Andrew Shoemaker</span>
      </a>

      <ul class="nav">
        <li class="nav-item"><a href="#" class=" nav-link text-light" aria-current="page">Home</a></li>
        <li class="nav-item"><a href="#" class=" nav-link text-light">Blog</a></li>    
      </ul>
    </header>
  `,
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
