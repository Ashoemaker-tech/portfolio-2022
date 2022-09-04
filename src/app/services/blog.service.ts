import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../models/Post.model';
import { PostRequest } from '../models/postRequest.model';

const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  apiUrl = environment.apiUrl
  deleteToggle: boolean = false
  updateToggle: boolean = false
  addToggle: boolean = false

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }

  getPostById(id: string): Observable<any[]> {
    return this.http.get<Post[]>(this.apiUrl + id)
  }

  updatePost(id: string, updatePostRequest: PostRequest): Observable<Post> {
    return this.http.put<Post>(this.apiUrl + id, updatePostRequest)
  }

  addPost(addPostRequest: PostRequest): Observable<Post> {
    return this.http.post<Post>(this.apiUrl, addPostRequest, httpOptions)
  }

  deletePost(id: string): Observable<Post[]> {
    return this.http.delete<Post[]>(this.apiUrl + id);
  }

}
