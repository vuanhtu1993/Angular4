import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private formBuilded: FormBuilder) {
    this.createLoginForm();
    console.log(this.loginForm, this.loginForm.get('email'));
  }

  ngOnInit() {
  }
  createLoginForm() {
    this.loginForm = this.formBuilded.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }
}
