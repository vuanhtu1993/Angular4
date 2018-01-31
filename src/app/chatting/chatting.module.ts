import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChattingComponent} from './chatting.component';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {ChattingService} from './chatting.service';
import {environment} from '../../environments/environment';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ChattingGuard} from '../guard/authGuard';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  declarations: [
    ChattingComponent
  ],
  providers: [ChattingService, ChattingGuard],
})
export class ChattingModule { }
