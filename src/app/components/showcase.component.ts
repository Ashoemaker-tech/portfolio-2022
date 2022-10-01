import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-showcase',
  template: `
    <div class="container col-xxl-8 px-4 py-5">
      <h3 class="my-5">Recent <span class="grad-text">Projects</span></h3>
      <div class="card py-3 my-5">
        <div class="card-body d-flex align-items-center">
          <div>
            <h5><a class="text-decoration-none h5 text-light" 
            [class.grad-text]="mouseovered" 
            (mouseover)="mouseovered=true" 
            (mouseout)="mouseovered=false" href="#">Dating App</a> 
              <span class="badge bg-danger mx-1">Angular</span>
              <span class="badge bg-primary mx-2">.NET Core</span>
            </h5>
            <p class="card-text">A dating app project that was built from the ground up with Angular .Net Core and Bootstrap for styling. This app implements full authentication on the backend and Angular route guards on the front end and it also has a full social media style post feed. Users can register, login create a profile with drag and drop image upload feature. Users can communitcate privately with messages, and like each others profiles. If both users like each others profiles then the users will show up in each others matches page.  </p>
          </div>
        </div>
      </div>
      <div>
        <h3 class="text-light">Tech <span class="grad-text">Used</span></h3>
        <div class=" mt-5 d-flex flex-wrap justify-content-around">
          <!-- HTML -->
          <img class="p-2" align="left" alt="HTML" width="80px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
          <!-- CSS -->
          <img class="p-2" align="left" alt="CSS" width="80px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
          <!-- TypeScript -->
          <img class="p-2" align="left" alt="TypeScript" width="80px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
          <!-- csharp -->
          <img class="p-2" align="left" alt="csharp" width="80px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" />
          <!-- node -->
          <img class="p-2" align="left" alt="node" width="80px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
          <!-- Angular -->
          <img class="p-2" align="left" alt="angular" width="80px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" />
          <!-- dotNet -->
          <img class="p-2" align="left" alt="dotNet" width="80px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" />
          <!-- Bootstrap -->
          <img class="p-2" align="left" alt="bootstrap" width="80px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
          <!-- Tailwind -->
          <img class="p-2" align="left" alt="tailwind" width="80px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
          <!-- SqlServer -->
          <img class="p-2" align="left" alt="SqlServer" width="90px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg" />
          <!-- Mysql -->
          <img class="p-2" alt="mySql" width="90px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg" />
        </div>
      </div>
      <h3 class="text-light my-5">Recent <span class="grad-text">Posts</span></h3>
      <div>
        <app-post-card [postName]="postOneTitle" [link]="postOneUrl"></app-post-card>
        <app-post-card [postName]="postTwoTitle" [link]="postTwoUrl"></app-post-card>
      </div>

    </div>
  `,
  styles: [
    `
    a {
      margin-right: 5px;
    }
    

    .temp-icon {
      font-size: 50px;
      margin-right: 25px;
    }
    `
  ]
})
export class ShowcaseComponent implements OnInit {
  mouseovered: boolean = false;
  // TODO Possibly create Post Model to hold these values? 
  postOneTitle:string = 'Why I chose Angular Over React';
  postTwoTitle:string = 'Blog Two';
  postOneUrl: string = '/posts/post/test-one';
  postTwoUrl:string = '/posts/post/test-two';
  constructor() { }

  ngOnInit(): void {
  }

}
