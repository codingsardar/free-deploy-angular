import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogEntity } from './BlogEntity';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getBlogs(): Observable<BlogEntity[]> {
    return this.http.get<BlogEntity[]>('https://blogsapp-oewa.onrender.com/api/v1/get-blogs');
  }

  getMessage(): Observable<string> {
    return this.http.get('https://blogsapp-oewa.onrender.com/api/v1/greet', { responseType: 'text' });
  }

}
