import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <!--Section: Contact v.2-->
<section class="container col-xxl-8 px-4 py-5">
<!--Section heading-->
<h2 class="h1-responsive font-weight-bold text-center my-4">Get In Touch</h2>
<div>
    <!--Grid column-->
    <div class="col-md-9 mb-md-0 mx-auto mb-5">
        <form id="contact-form" name="contact-form" action="" method="">
            <!--Grid row-->
            <div class="row">
                <!--Grid column-->
                <div class="col-md-6">
                    <div class="md-form mb-0">
                        <input type="text" id="name" name="name" class="form-control">
                        <label for="name" class="">Your name</label>
                    </div>
                </div>
                <!--Grid column-->
                <div class="col-md-6">
                    <div class="md-form mb-0">
                        <input type="text" id="email" name="email" class="form-control">
                        <label for="email" class="">Your email</label>
                    </div>
                </div>
                <!--Grid column-->
            </div>
            <!--Grid row-->
            <div class="row">
                <div class="col-md-12">
                    <div class="md-form mb-0">
                        <input type="text" id="subject" name="subject" class="form-control">
                        <label for="subject" class="">Subject</label>
                    </div>
                </div>
            </div>
            <!--Grid row-->
            <div class="row">
                <!--Grid column-->
                <div class="col-md-12">
                    <div class="md-form">
                        <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                        <label for="message">Your message</label>
                    </div>
                </div>
            </div>
            <!--Grid row-->
        </form>
        <div class="text-center">
            <a class="btn btn-primary">Send</a>
        </div>
    </div>
    
    <!--Grid column-->
</div>
</section>
  `,
  styles: [
  ]
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
