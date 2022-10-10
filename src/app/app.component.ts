import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container mx-auto px-8 lg:px-36">
      <app-navbar></app-navbar>
      <router-outlet></router-outlet>
      <app-footer></app-footer>
    </div>
  `,
  styles: []
})
export class AppComponent {

}
