import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-card',
  template: `
    <div class="card py-3 my-5">
        <div class="card-body d-flex align-items-center">
          <div>
            <h5><a class="text-decoration-none h5 text-light" 
            [class.grad-text]="mouseovered" 
            (mouseover)="mouseovered=true" 
            (mouseout)="mouseovered=false" routerLink="{{link}}">{{postName}}</a> 
            </h5>
            <p class="card-text">Blog Post</p>
          </div>
        </div>
      </div>
  `,
  styles: [`
  a {
      margin-right: 5px;
    }
  `
  ]
})
export class PostCardComponent implements OnInit {
  mouseovered: boolean = false;
  @Input() postName: string = '';
  @Input() link: string = '';


  constructor() { }

  ngOnInit(): void {
  }

}
