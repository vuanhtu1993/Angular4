import {Component, OnInit, ViewChild} from '@angular/core';
import {ChattingService} from './chatting.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AngularFireAuth} from 'angularfire2/auth';
import {User} from '../authentication/user.model';
import 'rxjs/operator/concatAll';

@Component({
  selector: 'app-chatting',
  templateUrl: './chatting.component.html',
  styleUrls: ['./chatting.component.css']
})
export class ChattingComponent implements OnInit {
  message;
  currentUser;
  chatForm: FormGroup;
  _isTyping = false;
  _sbTyping = '';

  constructor(private chattingService: ChattingService,
              private formBuider: FormBuilder,
              private firebaseAuth: AngularFireAuth) {
    this.currentUser = this.firebaseAuth.auth.currentUser;
    this.createChatForm();
    this.chattingService.getIsTyping()
      .subscribe((isTyping) => {
        this._isTyping = isTyping.isTyping;
        this._sbTyping = isTyping.user;
      });
  }

  ngOnInit() {
    const inputChange = this.chatForm.valueChanges;
    let timeout;
    inputChange
      .subscribe(() => {
        clearTimeout(timeout);
        this.chattingService.setIsTyping(true);
        timeout = setTimeout(() => {
          this.chattingService.setIsTyping(false);
        }, 500);
      });
    this.chattingService.getMessage().valueChanges()
      .subscribe((messageObj) => {
        this.message = messageObj;
      });
  }

  onNewMessage(message) {
    this.chattingService.newMessage(message);
    this.chatForm.reset();
  }

  createChatForm() {
    this.chatForm = this.formBuider.group({
      user: [''],
      time: [''],
      value: [''],
    });
  }

  canDeactive() {
    if (this.chatForm.value.value) {
      return false;
    } else {
      return true;
    }
  }
}
