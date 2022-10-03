import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <div class="container">
      <form  autocomplete="off">
        <div class="card py-3 my-5 mx-auto" style="width: 400px;">
          <h2 class="card-title text-center">Login</h2>
          <div class="card-body text-center">
            <input class="my-3 text-dark" type="text" placeholder="Username">
            <input class="my-3 text-dark" type="text" placeholder="Password">
          </div>
          <div class="d-flex justify-content-center">
            <button class="btn btn-outline-light">Login</button>
          </div>
        </div>
      </form>
    </div>
  `,
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
