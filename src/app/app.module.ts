import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import 'zone.js';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header.component';
import { PostComponent } from './post/post.component';
import { PostRowComponent } from './post/post-row.component';
import { PostViewComponent } from './post/post-view.component';

import { PostService } from './post/post.service';
import { AppRoutingModule } from './app-routing.module';
import { HttpInterceptorService } from './http-interceptor.service';

/* the AppModule class with the @NgModule decorator */
@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    PostComponent,
    PostRowComponent,
    PostViewComponent,
  ],
  imports: [FormsModule, BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    PostService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
