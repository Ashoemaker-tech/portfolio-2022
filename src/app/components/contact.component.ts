import { Component, OnInit } from '@angular/core';
import * as AOS from "aos";

@Component({
    selector: 'app-contact',
    template: `
    <div class="mb-10" data-aos="fade-up" data-aos-duration="1000">
    <h3 class="text-3xl text-center font-bold mt-20 mb-10">Let's Work <span class="grad-text">Together</span></h3>
    <p class="text-center text-lg">Send a message to connect with me and I will get back with you shortly.</p>
    </div>
    <div class="my-20 mx-auto max-w-5xl" data-aos="fade-up" data-aos-duration="1000">
      <form ngNoForm target="_blank"  action="https://formspree.io/f/mjvzokoy" method="POST">
        <div class=" bg-base-200 overflow-hidden shadow sm:rounded-md">
          <div class="px-4 py-5 mt-4 sm:p-6">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <input type="text" name="first"  placeholder="First Name" autocomplete="off" class="input block w-full  shadow-lg sm:text-sm" required>
              </div>

              <div class="col-span-6 sm:col-span-3">
                <input type="text" name="last" placeholder="Last Name" autocomplete="off" class="input block w-full  shadow-lg sm:text-sm" required>
              </div>

              <div class="col-span-6">
                <input type="email" name="email" placeholder="Email"  autocomplete="off" class="input block w-full  shadow-lg sm:text-sm" required>
              </div>

              <div class=" col-span-6">
                <textarea type="text" name="message" class="textarea w-full shadow-lg sm:text-sm" placeholder="Message" required></textarea>
              </div>
            </div>
          </div>
          <div class="px-4 py-3 text-right sm:px-6 flex justify-center mb-4">
            <button type="submit" a- class="btn btn-wide btn-ghost">Send Message</button>
        </div>
    </div>


   

    `,
    styles: [
    `

    `
    ]
})
export class ContactComponent implements OnInit {
 

    constructor() { }

    ngOnInit(): void {
      AOS.init()
    }
}
