import {NgModule} from '@angular/core';
import {RouterModule, Router, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {AuthenticationComponent} from './authentication/authentication.component';
import {LoginComponent} from './authentication/login/login.component';
import {RegisterComponent} from './authentication/register/register.component';
import {BooksComponent} from './books/books.component';
import {BookListComponent} from './books/book-list/book-list.component';
import {BookComponent} from './books/book/book.component';
import {ManageBookComponent} from './books/manage-book/manage-book.component';
import {AuthGuard} from './guard/authGuard';
import {ChattingComponent} from "./chatting/chatting.component";

const appRoutes: Routes = [
  {path: '', component: AuthenticationComponent, children: [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent}
  ]},
  {path: 'book', component: BooksComponent, canActivate: [AuthGuard], children: [
    {path: '', component: BookListComponent, children: [
      {path: ':id', component: BookComponent},
      {path: 'edit/:id', component: ManageBookComponent}
    ]},
  ]},
  {path: 'chatting', component: ChattingComponent},
  {path: '**', component: LoginComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule {}
