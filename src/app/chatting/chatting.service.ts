import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';

@Injectable()
export class ChattingService {
  messageCollection: AngularFirestoreCollection<any>;
  constructor(private fireStore: AngularFirestore) { }

  getMessage() {
    this.messageCollection = this.fireStore.collection<any>('chatting');
    return this.messageCollection;
  }
  newMessage(message) {
    this.messageCollection.add(message);
  }
}
