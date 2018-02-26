import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ProfileValidatorService} from '../check-name.service';
import 'rxjs/add/operator/filter';


@Component({
  selector: 'app-reactive-test',
  templateUrl: './reactive-test.component.html',
  styleUrls: ['./reactive-test.component.css'],
  providers: [ProfileValidatorService]
})
export class ReactiveTestComponent implements OnInit {
  searchForm: FormControl;
  profileForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private profileValidator: ProfileValidatorService) {
  }

  ngOnInit() {
    this.searchForm = new FormControl('thanh', [Validators.required], []);
    this.searchForm.valueChanges
      .filter((value) => value.indexOf('xxx') > -1)
      .subscribe((value) => console.log(value));
    this.createProfileForm();
  }
  createProfileForm() {
    this.profileForm = this.formBuilder.group({
      name: ['truong', [Validators.required], [this.validateName.bind(this)]],
      email: ['', [Validators.required, Validators.email], []],
      age: ['22', [Validators.required], []],
    });
  }

  validateName(control: AbstractControl) {
    return this.profileValidator.checkName(control.value)
      .map(res => {
        return res ? null : {nameHeroTaken: true};
      });
  }
}
