import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy, APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { AlbumComponent } from './album/album.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
