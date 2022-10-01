import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-contact',
    template: `
    <div class="container col-xxl-8 mt-5 py-5">
      <h2 class="text-center mb-5">Get In <span class="grad-text">Touch</span></h2>
      <div class="row row-cols-1 row-cols-md-2 my-5 text-center">
        <div class="col">
          <div class="card mb-4">
            <div class="card-body rounded-3">
            <i class="fa-solid fa-envelope fa-3x"></i>
              <h4 class="mt-4 mb-3">Contact me by email</h4>
              <p>andrew.shoemaker9@gmail.com</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card mb-4">
            <div class="card-body rounded-3">
            <i class="fa-solid fa-phone fa-3x"></i>
            <h4 class="mt-4 mb-3">Send a text or call</h4>
              <p>1(334)618-8840</p>
            </div>
          </div>
        </div>
      </div>
    </div>


    `,
    styles: [
    `
    .card {
        background: linear-gradient(45deg, #fa8043, #ff4187);
    }
    .card-body {
        background: #12181b;
        border: none;
    }

    `
    ]
})
export class ContactComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
