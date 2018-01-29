import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuth, AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {environment} from '../../environments/environment';
import {AuthenticationComponent} from './authentication.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthService} from './auth.service';
import { RegisterComponent } from './register/register.component';
import { IntroComponent } from './intro/intro.component';


@NgModule({
  declarations: [
    AuthenticationComponent,
    LoginComponent,
    RegisterComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [
    AuthService
  ],
})
export class AuthenticationModule {}
