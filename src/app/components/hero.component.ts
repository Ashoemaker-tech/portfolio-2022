import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';


@Component({
  selector: 'app-hero',
  template: `
  <div class="hero min-h-screen">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <img data-aos="fade-up" data-aos-duration="1000" src="../../../assets/images/avatar.svg" class="w-full" />
      <div data-aos="fade-down" data-aos-duration="1000">
        <h1 class="text-5xl font-bold">Hi there, I'm <span class="grad-text">Andrew</span></h1>
        <p class="py-6 text-lg">I am a full stack software developer that is based in the southestern United States. I specialize in building cutting edge, blazingly fast, pixel perfect web apps with Angular and .NET Core. </p>
        <ul class="icons ml-1">
            <li><a href="https://www.linkedin.com/in/andrew-shoemaker-825847a6/" target="_blank"><span class="fab fa-linkedin text-light"></span></a></li>
            <li><a href="https://github.com/Ashoemaker-tech" target="_blank"><span class="fab fa-github"></span></a></li>
            <li><a href="https://twitter.com/Ashoemaker_tech" target="_blank"><span class="fab fa-twitter"></span></a></li>
            </ul>
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
    Aos.init();
  }

}
