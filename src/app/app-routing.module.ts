import {NgModule} from '@angular/core';
import {RouterModule, Router, Routes} from '@angular/router';
import {AuthenticationComponent} from './authentication/authentication.component';
import {LoginComponent} from './authentication/login/login.component';
import {RegisterComponent} from './authentication/register/register.component';
import {BooksComponent} from './books/books.component';
import {BookListComponent} from './books/book-list/book-list.component';
import {BookComponent} from './books/book/book.component';
import {ManageBookComponent} from './books/manage-book/manage-book.component';
import {AuthGuard} from './guard/authGuard';
import {ChattingComponent} from './chatting/chatting.component';
import {ResumeComponent} from './resume/resume.component';
import {IntroComponent} from './authentication/intro/intro.component';

const appRoutes: Routes = [
  {path: '', component: AuthenticationComponent, children: [
    {path: '', component: IntroComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent}
  ]},
  {path: 'book', component: BooksComponent, canActivate: [AuthGuard], children: [
    {path: '', component: BookListComponent, children: [
      {path: ':id', component: BookComponent},
      {path: 'edit/:id', component: ManageBookComponent}
    ]},
  ]},
  {path: 'chatting', component: ChattingComponent, canActivate: [AuthGuard]},
  {path: 'resume', component: ResumeComponent},
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
