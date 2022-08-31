import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  template: `
    <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src="../../../assets/images/avatar.svg" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
      </div>
      <div class="col-lg-6 text-light">
        <h1 class="display-5 fw-bold lh-1 mb-3">Hi there, I'm <span>Andrew</span> </h1>
        <p class="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
        <div class="">
          <ul class="icons">
          <li><a href="#"><span class="fab fa-linkedin text-light"></span></a></li>
          <li><a href="#"><span class="fab fa-github text-light"></span></a></li>
          <li><a href="#"><span class="fab fa-twitter text-light"></span></a></li>
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
