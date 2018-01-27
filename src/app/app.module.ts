import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AuthenticationModule} from './authentication/authentication.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import {AuthGuard} from './guard/authGuard';
import {BookModule} from './books/book.module';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AuthenticationModule,
    AppRoutingModule,
    RouterModule,
    BookModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
