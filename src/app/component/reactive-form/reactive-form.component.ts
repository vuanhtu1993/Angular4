import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import 'rxjs/add/operator/debounce';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  searchField: FormControl;
  searches: string[] = [];
  projectForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.searchField = new FormControl;
    this.searchField.valueChanges
      .debounceTime(500)
      .distinctUntilChanged()
      .subscribe((term) => {
        this.searches.push(term);
      });
  }
  createForm() {
    this.projectForm = this.formBuilder.group({
      projectName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      projectStatus: ['', [Validators.required]],
    });
  }
}
