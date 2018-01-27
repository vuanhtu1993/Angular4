import {Component, OnInit, ViewChild} from '@angular/core';
import {ChattingService} from './chatting.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-chatting',
  templateUrl: './chatting.component.html',
  styleUrls: ['./chatting.component.css']
})
export class ChattingComponent implements OnInit {

  message;
  chatForm: FormGroup;
  constructor(private chattingService: ChattingService,
              private formBuider: FormBuilder) {
    this.createChatForm();
    console.log(this.chatForm);
  }

  ngOnInit() {
    this.chattingService.getMessage().valueChanges()
      .subscribe((message) => {
        this.message = message;
        console.log(this.message);
      });
  }

  onNewMessage(message) {
    this.chattingService.newMessage(message);
    this.chatForm.reset();
  }
  createChatForm() {
    this.chatForm = this.formBuider.group({
      value: [''],
    });
  }
}
