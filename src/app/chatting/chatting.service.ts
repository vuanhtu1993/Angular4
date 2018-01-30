import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {AuthService} from '../authentication/auth.service';
import {AngularFireAuth} from 'angularfire2/auth';

@Injectable()
export class ChattingService {
  messageCollection: AngularFireList<any>;
  user;
  someoneTyping;
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
    const today = new Date();
    message.user = this.user.email;
    message.time = today.toLocaleString();
    console.log(message);
    this.messageCollection.push(message);
  }
}
