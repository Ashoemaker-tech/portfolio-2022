import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container-fluid">
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
    <app-footer></app-footer>

  </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'portfolio';
}
