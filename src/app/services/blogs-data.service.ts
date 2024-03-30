import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BlogsDataService {
  constructor(private http: HttpClient) {}

  getBlogs() {
    return this.http.get('https://dev.to/api/articles');
  }
}
