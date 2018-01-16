import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pipe Application';
  string = 'AnhTus';
  data = [
    {id: 3, name: 'A'},

    {id: 1, name: 'B'},

    {id: 2, name: 'C'}];
}

