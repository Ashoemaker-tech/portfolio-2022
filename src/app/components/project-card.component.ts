import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-card',
  template: `
    <div class="card w-96 bg-base-100 shadow-xl" data-aos="fade-right" data-aos-duration="1000">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">
    <a class="text-white" 
            [class.grad-text]="mouseovered" 
            (mouseover)="mouseovered=true" 
            (mouseout)="mouseovered=false" href="#">Dating App</a>
    </h2>
    <p>A dating app project that was built from the ground up with Angular .Net Core and Bootstrap for styling.</p>
    <div class="card-actions justify-end">
      <div class="badge badge-info">.Net</div> 
      <div class="badge badge-error">Angular</div>
      <div class="badge badge-secondary">SQL</div>
    </div>
  </div>
</div>
  `,
  styles: [
  ]
})
export class ProjectCardComponent implements OnInit {
  mouseovered: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
