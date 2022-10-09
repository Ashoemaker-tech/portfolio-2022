import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  template: `
    <div id="container--main">
    <section id="wrapper--hero" class="section--page">
      <img id="profile-pic" src="./assets/images/profile_pic.jpg" alt=""/>

      <div>
        <h1 id="username">Andrew Shoemaker</h1>
        <p id="bio">Software Engineer with a background in construction. Experience with
          building modern and responsive user interfaces with Angular  as well as
          building MVC & minimal APIs with C# .NET core framework
          </p>
        <p id="email">👉 andrew.shoemaker9@gmail.com</p>
      </div>
    </section>

    <section class="section--page">
      <div id="socials--list">
        <a href="https://www.linkedin.com/in/andrew-shoemaker-825847a6/" target="_blank">LinkedIn</a>
        <a href="https://github.com/Ashoemaker-tech" target="_blank">Github</a>
        <a href="https://twitter.com/Ashoemaker_tech" target="_blank">Twitter</a>
        <a href="../../../assets/Resume2022.pdf" target="_blank">Download Resume</a>
      </div>
    </section>

    <section class="section--page">
      <h2>Skills & Qualifications</h2>
      <ul id="qualifications--list">
        <li>✔ Year & half working with full stack development</li>
        <li>✔ Extensive knowledge in API & Database Design</li>
        <li>✔ Experience building client facing web applicaions with Angular</li>
        <li>✔ 12+ years managing teams & working in fast paced industries</li>
      </ul>
    </section>

    <section class="section--page">
      <h2>Tech Stack</h2>
      <div id="wrapper--techstack__items">
        <div class="card--techstack">
          <span>JavaScript, C#, PHP</span>
        </div>

        <div class="card--techstack">
          <span>.NET, Laravel</span>
        </div>

        <div class="card--techstack">
          <span>Angular, Svelte</span>
        </div>

        <div class="card--techstack">
          <span>SQLite, SQL Server, MySQL</span>
        </div>
      </div>
    </section>

    <section id="work-history-wrapper" class="section--page">
      <h2>Recent Work History</h2>
      <div class="line-break"></div>
      <div class="card--work-history">
        <strong>Freelance Software Engineer | Self Employed</strong>
        <p>12/2020 - Present</p>
        <p>Picking up small side projects for clients as well as doing volunteer
          work to provide not for profit charities with web services using a wide range of technologies such as HTML, CSS, Bootstrap, Angular, Shopify, and WordPress.</p>
      </div>

      <div class="line-break"></div>
      <div class="card--work-history">
        <strong>Task Director | E Group LLC</strong>
        <p>06/2022 - Present</p>
        <p>Responsible for leading critical path projects during nuclear plant
          maintenance periods. Corrected any design and implementation related
          issues which has resulted in keeping the project on schedule and under
          budget</p>
      </div>

      <div class="line-break"></div>
      <div class="card--work-history">
        <strong>Civil Supervisor | Day & Zimmermann
        </strong>
        <p>07/2020 - 06/2022
        </p>
        <p>Handpicked from over 30 peers by senior management to lead multiple
          teams to support client needs. Organized multiple work groups to work
          in parallel which exceeded schedule and budget expectations.
          </p>
      </div>

      <div class="line-break"></div>
      <div class="card--work-history">
        <strong>Project Manager | Barnhart Crane & Rigging
        </strong>
        <p>12/2019 - 07/2020</p>
        <p>Managed outages at multiple chevron refineries by providing the client
          with equipment and manpower needs. Also, completed field safety audits
          to ensure company and client safety needs are being met.</p>
      </div>
    </section>
    <section class="section--page">
      <h2>Education & Accomplishments</h2>

      <div class="card--project">
        <p><span>🏆</span><a href="../../../assets/certificate_of_completion.pdf" target="_blank">W3Schools C# Certification | August 2022</a></p>
      </div>

      <div class="card--project">
        <p><span>🏆</span>University Of Phoenix AS Cyber Security | October 2023</p>
      </div>

      <div class="card--project">
        <p><span>🏆</span> Inducted into National Society of Leadership and Success For maintaining a 3.8 GPA</p>
      </div>

      <div class="card--project">
        <p><span>🏆</span> Ironworkers Local 798 Apprentice of the year in 2016</p>
      </div>

      <div class="card--project">
        <p><span>🏆</span> Received Army Commendation Medal during military service in 2011</p>
      </div>

      

    </section>

  </div>
  `,
  styles: [`
  
  `
  ]
})
export class ResumeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
