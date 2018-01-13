import { Component, OnInit } from '@angular/core';
import {CrisisService} from './crisis.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css'],
  providers: [],
})
export class CrisisListComponent implements OnInit {
  crisises;
  constructor(private crisisService: CrisisService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCrisises();
  }
  getCrisises() {
    this.crisises =  this.crisisService.getCrisises();
  }
}
