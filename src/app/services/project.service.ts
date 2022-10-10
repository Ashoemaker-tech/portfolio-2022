import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projects = [
    {
      title: 'Dating App',
      excerpt: 'A dating app project that was built from the ground up with Angular .Net Core and Bootstrap for styling.',
      image: 'https://placeimg.com/400/225/arch',
      projUrl: '#',
      codeUrl: 'https://github.com/Ashoemaker-tech/DatingApp',
      tags: ['Angular', '.Net', 'SQlite']
    },
    {
      title: 'Blog',
      excerpt: 'My blog that was built from the ground up with Angular, .Net minimal API, and SQL Server',
      image: 'https://placeimg.com/400/225/arch',
      projUrl: '#',
      codeUrl: 'https://github.com/Ashoemaker-tech/dotnet-angular-blog',
      tags: ['Angular', '.Net', 'SQL Server']
    },
    {
      title: 'Kanban Board',
      excerpt: 'A page of mini apps featuring google auth and email password login, kanban board, tic-tac-toe, and more.',
      image: 'https://placeimg.com/400/225/arch',
      projUrl: '#',
      codeUrl: 'https://github.com/Ashoemaker-tech/angular-firebase-tb',
      tags: ['Angular', 'Firebase']
    },
  ]

  constructor() { }
}
