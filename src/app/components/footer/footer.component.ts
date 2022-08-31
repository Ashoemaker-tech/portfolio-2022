import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer mt-auto py-3 text-center">
      <div class="container">
        <span class="text-light">Made With <i class="fa-brands fa-angular"></i> by Andrew Shoemaker</span>
      </div>
    </footer>
  `,
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
