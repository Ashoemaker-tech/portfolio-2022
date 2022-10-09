import { Component, OnInit } from '@angular/core';
import * as AOS from "aos";

@Component({
    selector: 'app-contact',
    template: `
    <!-- <div data-aos="fade-up" data-aos-duration="1000" class=" col-xxl-8 my-20 py-5">
      <h2 class="text-center my-20 text-3xl font-bold">Get In <span class="grad-text">Touch</span></h2>
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
    </div> -->
    <div class="mb-20" data-aos="fade-up" data-aos-duration="1000">
      <form  action="#" method="POST">
        <div class=" bg-base-200 overflow-hidden shadow sm:rounded-md">
          <div class="px-4 py-5 mt-4 sm:p-6">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <input type="text" name="first-name" id="first-name" placeholder="First Name" autocomplete="off" class="input block w-full  shadow-lg sm:text-sm">
              </div>

              <div class="col-span-6 sm:col-span-3">
                <input type="text" name="last-name" id="last-name" placeholder="Last Name" autocomplete="off" class="input block w-full  shadow-lg sm:text-sm">
              </div>

              <div class="col-span-6">
                <input type="text" name="email-address" placeholder="Email" id="email-address" autocomplete="off" class="input block w-full  shadow-lg sm:text-sm">
              </div>

              <div class=" col-span-6">
                <textarea type="text" name="message" id="message" class="textarea w-full shadow-lg sm:text-sm" placeholder="Message"></textarea>
              </div>
            </div>
          </div>
          <div class="px-4 py-3 text-right sm:px-6 flex justify-center mb-4">
            <button type="submit" class="btn btn-wide btn-ghost">Send Message</button>
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
      AOS.init()
    }

}
