import {EventEmitter, Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {AuthService} from '../authentication/auth.service';
import {AngularFireAuth} from 'angularfire2/auth';

@Injectable()
export class ChattingService {
  messageCollection: AngularFireList<any>;
  user;
  isTyping;

  constructor(private fireDB: AngularFireDatabase,
              private authService: AuthService,
              private firebaseAuth: AngularFireAuth) {
    this.user = this.firebaseAuth.auth.currentUser;
  }

  getIsTyping() {
    this.isTyping = this.fireDB.object('isTyping').valueChanges();
    return this.isTyping;
  }

  setIsTyping(status: Boolean) {
    const _isTyping = this.fireDB.object('isTyping');
    _isTyping.set({
      isTyping: status,
      user: this.user.email,
    });
  }

  getMessage() {
    this.messageCollection = this.fireDB.list('chatting');
    return this.messageCollection;
  }

  newMessage(message) {
    const today = new Date();
    message.user = this.user.email;
    message.time = today.toLocaleString();
    this.messageCollection.push(message);
  }
}
