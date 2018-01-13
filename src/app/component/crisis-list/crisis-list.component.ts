import { Component, OnInit } from '@angular/core';
import {CrisisService} from './crisis.service';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css'],
  providers: [CrisisService],
})
export class CrisisListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
