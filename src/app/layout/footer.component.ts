import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer mt-auto py-3 text-center">
      <div class="container">
        <p class="text-light">&copy; Copyright {{ year }} by <span>Andrew Shoemaker</span> Made With <i class="fa-brands fa-angular"></i> hosted on Azure</p>
      </div>
    </footer>
  `,
  styles: [
  ]
})
export class FooterComponent implements OnInit {
year: number = new Date().getFullYear()
  constructor() { }

  ngOnInit(): void {
  }

}
