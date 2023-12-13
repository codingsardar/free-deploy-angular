import { Component, OnInit } from '@angular/core';
import { BlogEntity } from './BlogEntity';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  blogPosts: BlogEntity[] = [];

  constructor(private appServ: AppService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.appServ.getBlogs().subscribe({
      next: data => this.blogPosts = data,
      error: e => console.log(e)
    });
  }

}
