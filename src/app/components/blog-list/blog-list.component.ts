import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BlogsDataService } from '../../services/blogs-data.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css',
})
export class BlogListComponent implements OnInit {
  blogList;
  loadingFlag = true;
  errFlag = false;
  page: number = 1;

  constructor(private blogsService: BlogsDataService) {}

  ngOnInit(): void {
    this.blogsService.getBlogs().subscribe(
      (res) => {
        this.blogList = res;
        this.loadingFlag = false;
      },
      (err) => {
        this.errFlag = true;
        this.loadingFlag = false;
      }
    );
  }
}
