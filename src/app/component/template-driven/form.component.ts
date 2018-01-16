import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
declare const $;
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  @ViewChild('form1') form1: NgForm;
  email1 = '';
  password1 = '';
  subscription1 = '';
  constructor() { }
  ngOnInit() {
  }
  onClickShow(email, password, subscription) {
    console.log(email, password, subscription);
    if (this.form1.valid === true) {
      this.email1 = email;
      this.password1 = password;
      this.subscription1 = subscription;
      this.form1.reset();
    }
  }
}
