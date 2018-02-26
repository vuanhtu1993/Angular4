import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import 'rxjs/add/operator/debounce';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import {HeroValidatorService} from "./hero-validator.service";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
  providers: [HeroValidatorService],
})
export class ReactiveFormComponent implements OnInit {
  // Search Form
  searchField: FormControl;
  searches: string[] = [];
  // ProjectForm
  isShowForm = false;
  projectForm: FormGroup;
  projectName = '';
  email = '';
  projectStatus = '';
  // Hero Form
  heroForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private heroValidator: HeroValidatorService) {
    this.createProjectForm();
    this.createHeroForm();
    console.log(this.heroForm);
  }

  ngOnInit() {
    // search Form
    this.searchField = new FormControl;
    this.searchField
      .valueChanges
      .debounceTime(500)
      .distinctUntilChanged()
      .subscribe((term) => {
        this.searches.push(term);
      });
    const nameHero = this.heroForm.get('nameHero');
    console.log(nameHero.asyncValidator);
  }

  createProjectForm() {
    this.projectForm = this.formBuilder.group({
      projectName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      projectStatus: ['', []],
    });
  }

  onClickUpdate() {
    if (this.projectForm.valid) {
      console.log(this.projectForm.value, this.projectForm.valid);
      this.projectName = this.projectForm.value.projectName;
      this.email = this.projectForm.value.email;
      this.projectStatus = this.projectForm.value.projectStatus;
      this.isShowForm = true;
    } else {
      this.isShowForm = false;
    }
  }

  createHeroForm() {
    this.heroForm = this.formBuilder.group({
      nameHero: ['', [], this.validateNameHero.bind(this)],
      attribute: ['', [Validators.required]],
    });
  }

  validateNameHero(control: AbstractControl) {
    return this.heroValidator.checkHeroName(control.value)
      .map(res => {
        return res ? null : {nameHeroTaken: true};
      });
  }
}
