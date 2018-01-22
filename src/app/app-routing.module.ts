import {NgModule} from '@angular/core';
import {RouterModule, Router, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {AuthenticationComponent} from './authentication/authentication.component';
import {LoginComponent} from './authentication/login/login.component';

const appRoutes: Routes = [
  {path: 'auth', component: AuthenticationComponent, children: [
    {path: 'login', component: LoginComponent},
  ]}
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
