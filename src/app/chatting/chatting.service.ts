import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';

@Injectable()
export class ChattingService {
  messageCollection: AngularFireList<any>;
  constructor(private fireDB: AngularFireDatabase) { }

  getMessage() {
    this.messageCollection = this.fireDB.list('chatting');
    return this.messageCollection;
  }
  newMessage(message) {
    this.messageCollection.push(message);
  }
}
