import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CrisisService} from '../crisis.service';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css']
})
export class CrisisDetailComponent implements OnInit {
  crisis;
  constructor(private route: ActivatedRoute,
              private crisisService: CrisisService) { }

  ngOnInit() {
    this.route.params.subscribe((param) => {
      this.crisis = this.crisisService.getCrisis(Number(param.id));
    });
  }
}
