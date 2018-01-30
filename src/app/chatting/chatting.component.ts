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
  user;
  chatForm: FormGroup;

  constructor(private chattingService: ChattingService,
              private formBuider: FormBuilder,
              private firebaseAuth: AngularFireAuth) {
    this.createChatForm();
    this.user = this.firebaseAuth.auth.currentUser;
  }

  ngOnInit() {
    console.log(this.chattingService.user);
    const inputChange = this.chatForm.valueChanges;
    let timeout;
    inputChange
      .subscribe(() => {
        this.chattingService.someoneTyping = this.user.email;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          this.chattingService.someoneTyping = '';
        }, 1000);
      });
    this.chattingService.getMessage().valueChanges()
      .subscribe((message) => {
        this.message = message;
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
}
