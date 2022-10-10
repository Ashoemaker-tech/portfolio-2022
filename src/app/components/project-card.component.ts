import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-card',
  template: `
  <div class="flex flex-row">
    <div class="card w-96 bg-base-100 shadow-xl my-10" data-aos="fade-right" data-aos-duration="1000">
      <figure><img src="{{image}}" alt="Shoes" /></figure>
      <div class="card-body">
        <h2 class="card-title">
        <a class="text-white" 
                [class.grad-text]="mouseovered" 
                (mouseover)="mouseovered=true" 
                (mouseout)="mouseovered=false" href="{{projUrl}}">{{title}}</a>
        </h2>
        <p>{{excerpt}}</p>
        <div class="card-actions justify-between mt-5">
          <a class="btn btn-sm btn-ghost" href="{{codeUrl}}" target="_blank">Code</a> 
          <a class="btn btn-sm btn-ghost" href="{{projUrl}}" target="_blank">See More</a>
        </div>
        </div>
    </div>
  </div>
  `,
  styles: [
  ]
})
export class ProjectCardComponent implements OnInit {
  mouseovered: boolean = false
  @Input() title: string
  @Input() excerpt: string
  @Input() image: string
  @Input() codeUrl: string
  @Input() projUrl: string

  constructor() { }

  ngOnInit(): void {
  }

}
