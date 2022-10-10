import { Component, OnInit } from '@angular/core';
import * as AOS from "aos";
import { ProjectService } from '../services/project.service';
@Component({
  selector: 'app-showcase',
  template: `
    <div class="my-20 px-2">
      <h3 data-aos="fade-right" data-aos-duration="1000" class="text-3xl my-20 font-bold">Recent <span class="grad-text">Projects</span></h3>
      <div class="flex flex-row justify-evenly flex-wrap">
        <div *ngFor="let project of projects">
          <app-project-card [title]="project.title" [excerpt]="project.excerpt"
          [projUrl]="project.projUrl" [codeUrl]="project.codeUrl" [image]="project.image" ></app-project-card>
        </div>
      </div>
      <div data-aos="fade-left" data-aos-duration="1000">
        <h3 class="text-3xl font-bold my-20">Tech <span class="grad-text">Used</span></h3>
        <div class="my-10 flex flex-wrap justify-around ">
          <img class="p-2"  align="left" alt="HTML" width="80px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
          <!-- CSS -->
          <img class="p-2"  align="left" alt="CSS" width="80px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
          <!-- TypeScript -->
          <img class="p-2"  align="left" alt="TypeScript" width="80px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
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
          <!-- firebase -->
          <img class="p-2" align="left" alt="firebase" width="80px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg" />
          <!-- SqlServer -->
          <img class="p-2" align="left" alt="SqlServer" width="90px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg" />
          <!-- Mysql -->
          <img class="p-2" alt="mySql" width="90px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg" />
        </div>
      </div>

    </div>
  `,
  styles: [
    `
    a {
      margin-right: 5px;
    }
    `
  ]
})
export class ShowcaseComponent implements OnInit {
  projects = this.projectService.projects
   
  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    AOS.init();
  }

 

  }

