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
            (mouseout)="mouseovered=false" routerLink="/post/{{id}}">{{postName}}</a> 
            </h5>
            <p class="card-text">{{excerpt}}</p>
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
  @Input() postName: any = '';
  @Input() id: string = '';
  @Input() excerpt: string = '';


  constructor() { }

  ngOnInit(): void {
  }

}
