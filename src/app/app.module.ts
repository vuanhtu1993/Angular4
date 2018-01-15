import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ImageComponent } from './component/image/image.component';
import {LoadImageService} from './load-image.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [LoadImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
