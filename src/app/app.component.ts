import {Component} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pipe Application';
  string = 'AnhTus';
  type = '';
  kind = '';
  sortForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.createSortForm();
  }
  arrayPerson = [
    {id: 3, name: 'A'},
    {id: 1, name: 'B'},
    {id: 2, name: 'C'}];
  createSortForm() {
    this.sortForm = this.formBuilder.group({
      type: '',
      kind: '',
    });
  }
  onClickSort() {
    this.type = this.sortForm.get('type').value;
    this.kind = this.sortForm.get('kind').value;
  }
}

