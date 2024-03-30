import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.css',
})
export class BlogCardComponent {
  @Input() blogData;

  onClick() {
    window.open(this.blogData.url);
  }
}
