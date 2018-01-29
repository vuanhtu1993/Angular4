import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {AuthService} from '../authentication/auth.service';
import {AngularFireAuth} from 'angularfire2/auth';

@Injectable()
export class ChattingService {
  messageCollection: AngularFireList<any>;
  user;
  constructor(private fireDB: AngularFireDatabase,
              private authService: AuthService,
              private firebaseAuth: AngularFireAuth) {
    this.user = this.firebaseAuth.auth.currentUser;
  }

  getMessage() {
    this.messageCollection = this.fireDB.list('chatting');
    return this.messageCollection;
  }
  newMessage(message) {
    message.user = this.user.email;
    console.log(message);
    this.messageCollection.push(message);
  }
}
