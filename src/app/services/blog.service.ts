import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  baseUrl: string = environment.apiUrl
  posts: Post[] = [];

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.baseUrl);
  }

  getSinglePost(id: string) {
    const post = this.posts.find(x => x.id === id);
    if (post != undefined) return of(post)
    return this.http.get<Post>(this.baseUrl + id)
  }


}
