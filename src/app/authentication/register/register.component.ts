import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Toast, ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  email: string;
  password: string;
  constructor(private formBuilder: FormBuilder,
              private authService: AuthService) {
    this.createRegisterForm();
  }

  ngOnInit() {
  }

  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  onSignUp(registerForm) {
    if (registerForm.valid) {
      this.email = registerForm.value.email;
      this.password = registerForm.value.password;
      this.authService.signUp(this.email, this.password);
      this.registerForm.reset();
    }
  }
}
