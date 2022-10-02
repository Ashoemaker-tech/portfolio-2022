import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-navbar',
  template: `
    <header class=" container d-flex flex-wrap justify-content-center py-3 mb-4">
      <a routerLink="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none">
        <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
        <span class="fs-4 grad-text"><i class="fa-solid fa-code"></i> Andrew Shoemaker</span>
      </a>

      <ul class="nav">
        <li class="nav-item"><a [class.grad-text]="hasRoute('/')" routerLink="/" class=" nav-link text-light" aria-current="page">Home</a></li>
        <li class="nav-item"><a [class.grad-text]="hasRoute('/resume')" routerLink="/resume" class=" nav-link text-light">Resume</a></li>    
      </ul>
    </header>
  `,
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }

}
