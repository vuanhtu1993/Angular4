import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import 'rxjs/add/operator/debounce';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  searchField = new FormControl;
  searches: string[] = [];
  projectForm = new FormGroup({
    projectName: new FormControl(),
    email: new FormControl(),
  });
  constructor() {
  }

  ngOnInit() {
    console.log(this.projectForm);
    this.searchField.valueChanges
      .debounceTime(500)
      .distinctUntilChanged()
      .subscribe((term) => {
      this.searches.push(term);
    });
  }
}
