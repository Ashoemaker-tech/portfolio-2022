import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container-fluid">

    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
  </div>
  <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent {

}
