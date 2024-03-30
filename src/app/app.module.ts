import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { LoadingSpinerComponent } from './components/loading-spiner/loading-spiner.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { HeadSectionComponent } from './components/head-section/head-section.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogCardComponent,
    BlogListComponent,
    ErrorMessageComponent,
    LoadingSpinerComponent,
    HeadSectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
