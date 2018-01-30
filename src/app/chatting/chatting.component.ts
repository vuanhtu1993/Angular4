import {Component, OnInit, ViewChild} from '@angular/core';
import {ChattingService} from './chatting.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AngularFireAuth} from 'angularfire2/auth';
import {User} from '../authentication/user.model';

@Component({
  selector: 'app-chatting',
  templateUrl: './chatting.component.html',
  styleUrls: ['./chatting.component.css']
})
export class ChattingComponent implements OnInit {
  message;
  chatForm: FormGroup;

  constructor(private chattingService: ChattingService,
              private formBuider: FormBuilder,
              private firebaseAuth: AngularFireAuth) {
    this.createChatForm();
  }

  ngOnInit() {
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
