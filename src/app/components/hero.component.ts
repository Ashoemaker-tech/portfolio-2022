import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  template: `
    <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse justify-content-center align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src="../../../assets/images/avatar.svg" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
      </div>
      <div class="col-lg-6">
        <h1 class="display-6 fw-bold lh-1 mb-3">Hi there, I'm <span class="grad-text">Andrew</span> </h1>
        <p class="lead">I am a full stack software developer that is based in the southestern United States. I specialize in building cutting edge, blazingly fast, pixel perfect web apps with Angular and .NET Core. </p>
        <div class="">
          <ul class="icons">
          <li><a href="https://www.linkedin.com/in/andrew-shoemaker-825847a6/" target="_blank"><span class="fab fa-linkedin text-light"></span></a></li>
          <li><a href="https://github.com/Ashoemaker-tech" target="_blank"><span class="fab fa-github"></span></a></li>
          <li><a href="https://twitter.com/Ashoemaker_tech" target="_blank"><span class="fab fa-twitter"></span></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  `,
  styles: [
    `
    .icons {
      list-style-type: none;
      padding: 0;
    }
    .icons li{
      height: 50px;
      width: 50px;
      display: inline-block;
      margin: 0 10px;
      cursor: pointer;
      position: relative;
    }
    .icons li:before {
      content: '';
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      left: -28%;
      z-index: -1;
      border-radius: 10%;
      background: linear-gradient(45deg, #fa8043, #ff4187);
      transition: all 0.3s ease-in;
    }

    .icons li:hover:before {
      transform: rotate(360deg);
      border-radius: 100%;
    }
    .icons li a span{
      font-size: 24px;
      line-height: 50px;
      color: #fff;
      transition: all 0.3s ease-out;
    }


    .icons li:hover a span{
      transform: scale(1.2);
    }

    `
  ]
})



export class HeroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
