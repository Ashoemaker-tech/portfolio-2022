import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-navbar',
  template: `
    <div class="">
      <div class="navbar bg-base-100">
        <div class="flex-1">
          <a class="normal-case text-2xl" routerLink="/"><span class="fs-4 grad-text"><i class="fa-solid fa-code"></i> Andrew Shoemaker</span></a>
        </div>
        <div class="flex-none">
          <ul class="menu menu-horizontal p-0">
            <li class=""><a [class.grad-text]="hasRoute('/')" routerLink="/" aria-current="page">Home</a></li>
            <li class=""><a [class.grad-text]="hasRoute('/resume')" routerLink="/resume">Resume</a></li>
          </ul>
        </div>
      </div>
      </div>
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
