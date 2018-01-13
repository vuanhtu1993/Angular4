import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {HeroService} from '../hero.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero;
  name;
  isEdit;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private heroService: HeroService) {
  }

  ngOnInit() {
    this.route.params.subscribe((param) => {
      this.hero = this.heroService.getHero(Number(param.id));
      this.name = this.hero.name;
    });
    this.route.queryParams.forEach((queryParam) => {
      this.isEdit = queryParam.isEdit;
    });
  }

  onClickUpdate(id, newName) {
    if (this.isEdit && newName !== '') {
      this.heroService.UpdateHero(id, newName);
    } else alert('Name should be fill in');
  }
}

